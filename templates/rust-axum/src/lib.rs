//! Rust Axum server generator.
//!
//! Generates a production-ready Axum server with:
//! - One module per OpenAPI tag with feature flags
//! - RequestContext for state and request metadata
//! - Auth wrappers from security schemes
//! - Per-operation result and error types with IntoResponse
//! - Generated handlers with proper Axum extractors
//! - Router function and extension trait for ergonomic usage

mod service_codegen;

use askama::Template;
use codegen::{Config, Error, GenIr, Generator, Result, VirtualFS};
use ir::gen_ir::{
    Additional, AliasTarget, CanonicalName, Composite, ErrorUse, Literal, Service, StableId,
    TypeDecl, TypeKind, TypeMod, TypeRef,
};
use service_codegen::{
    AuthTypeKey, RenderCtx, ResolvedAuth, ResolvedAuthKind, ServiceModuleGenerator,
    resolve_operation_auth,
};
use std::borrow::Cow;
use std::collections::{BTreeMap, BTreeSet, HashMap};
use std::path::PathBuf;

/// Where a generated type lives. In single-crate mode everything is in the
/// same crate (`Bucket::Tag`/`Bucket::Common` only affects which file inside
/// `src/types/`). In multi-crate mode this also dictates which Cargo crate
/// the type lands in.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Bucket {
    /// Type owned by a single tag (crate in multi-crate mode).
    Tag(String),
    /// Type shared across tags (common crate in multi-crate mode).
    Common,
}

/// Chosen output layout. `MultiCrate` carries the names needed to emit
/// Cargo.toml files and cross-crate import paths.
#[derive(Debug, Clone)]
pub enum Layout {
    SingleCrate,
    MultiCrate {
        common_name: String,
        crate_name_template: String,
    },
}

impl Layout {
    fn from_config(config: &Config) -> Self {
        let Some(opts) = config.lang_options.get("rust-axum") else {
            return Layout::SingleCrate;
        };
        let Some(obj) = opts.as_object() else {
            return Layout::SingleCrate;
        };
        let layout = obj.get("layout").and_then(|v| v.as_str()).unwrap_or("");
        if layout != "multi-crate" {
            return Layout::SingleCrate;
        }
        let crate_name_template = obj
            .get("crate_name")
            .and_then(|v| v.as_str())
            .unwrap_or("api-{tag}")
            .to_string();
        let common_name = obj
            .get("common_name")
            .and_then(|v| v.as_str())
            .unwrap_or("api-common")
            .to_string();
        Layout::MultiCrate {
            common_name,
            crate_name_template,
        }
    }

    fn is_multi_crate(&self) -> bool {
        matches!(self, Layout::MultiCrate { .. })
    }

    fn tag_crate_name(&self, tag: &str) -> Option<String> {
        match self {
            Layout::MultiCrate {
                crate_name_template,
                ..
            } => Some(crate_name_template.replace("{tag}", tag)),
            Layout::SingleCrate => None,
        }
    }

    fn common_name(&self) -> Option<&str> {
        match self {
            Layout::MultiCrate { common_name, .. } => Some(common_name),
            Layout::SingleCrate => None,
        }
    }
}

/// Convert a crate name like "ticket-plug-api-common" to the Rust identifier
/// "ticket_plug_api_common" used for `use` paths.
fn crate_name_to_ident(name: &str) -> String {
    name.replace('-', "_")
}

/// Represents edges that need Box wrapping to break cycles.
/// Key is (source_type_id, target_type_id) pair.
type BoxedEdges = BTreeSet<(StableId, StableId)>;

/// Pick a module name that doesn't collide with any tag name.
/// Tries `desired` first, then each fallback, then underscore-prefixed variants.
fn disambiguate_module(desired: &str, tag_names: &BTreeSet<String>, fallbacks: &[&str]) -> String {
    if !tag_names.contains(desired) {
        return desired.to_string();
    }
    for fallback in fallbacks {
        if !tag_names.contains(*fallback) {
            return fallback.to_string();
        }
    }
    for i in 1..=12 {
        let prefixed = format!("{}{}", "_".repeat(i), desired);
        if !tag_names.contains(&prefixed) {
            return prefixed;
        }
    }
    desired.to_string()
}

/// Validates a version string as semver. Returns "0.0.1" if invalid.
fn sanitize_version(version: &str) -> Cow<'_, str> {
    let parts: Vec<&str> = version.split('.').collect();
    if parts.len() == 3 && parts.iter().all(|p| p.parse::<u64>().is_ok()) {
        Cow::Borrowed(version)
    } else {
        Cow::Owned("0.0.1".to_string())
    }
}

/// Rust Axum server generator.
pub struct RustAxumGenerator;

impl RustAxumGenerator {
    pub fn new() -> Self {
        Self
    }

    /// Collect all types that are actually referenced from services/operations.
    /// Returns a map of type ID -> tags that reference it.
    /// This is the authoritative set - only these types will be generated.
    /// Types in ir.types that aren't referenced (e.g., base types always overridden
    /// in allOf compositions) are excluded, preventing compilation issues with
    /// feature-gated fields on unused types.
    fn collect_referenced_types(
        &self,
        ir: &GenIr,
    ) -> std::collections::BTreeMap<StableId, BTreeSet<String>> {
        let mut referenced: std::collections::BTreeMap<StableId, BTreeSet<String>> =
            std::collections::BTreeMap::new();
        let mut visited = BTreeSet::new();

        // Traverse all services and their operations
        for service in &ir.services {
            // Get the service tag (used for feature flags)
            let service_tag = if service.name.canonical == "default" {
                None
            } else {
                Some(service.name.snake.clone())
            };

            for op in &service.operations {
                // Reset visited for each operation to allow the same type to be
                // referenced by multiple operations (accumulating their tags)
                visited.clear();

                // Path parameters
                for param in &op.http.path_params {
                    self.collect_type_ref_recursive(
                        &param.ty,
                        ir,
                        &mut referenced,
                        &mut visited,
                        &service_tag,
                    );
                }

                // Query parameters
                for param in &op.http.query {
                    self.collect_type_ref_recursive(
                        &param.ty,
                        ir,
                        &mut referenced,
                        &mut visited,
                        &service_tag,
                    );
                }

                // Header parameters
                for param in &op.http.headers {
                    self.collect_type_ref_recursive(
                        &param.ty,
                        ir,
                        &mut referenced,
                        &mut visited,
                        &service_tag,
                    );
                }

                // Cookie parameters
                for param in &op.http.cookies {
                    self.collect_type_ref_recursive(
                        &param.ty,
                        ir,
                        &mut referenced,
                        &mut visited,
                        &service_tag,
                    );
                }

                // Request body variants
                if let Some(body) = &op.http.body {
                    for variant in &body.variants {
                        self.collect_type_ref_recursive(
                            &variant.ty,
                            ir,
                            &mut referenced,
                            &mut visited,
                            &service_tag,
                        );
                        // Part encodings in multipart
                        for part in &variant.encoding {
                            self.collect_type_ref_recursive(
                                &part.ty,
                                ir,
                                &mut referenced,
                                &mut visited,
                                &service_tag,
                            );
                        }
                    }
                }

                // Success response
                if let Some(success) = &op.success {
                    if let Some(ty) = &success.ty {
                        self.collect_type_ref_recursive(
                            ty,
                            ir,
                            &mut referenced,
                            &mut visited,
                            &service_tag,
                        );
                    }
                    for header in &success.headers {
                        self.collect_type_ref_recursive(
                            &header.ty,
                            ir,
                            &mut referenced,
                            &mut visited,
                            &service_tag,
                        );
                    }
                }

                // Alternative success responses
                for alt in &op.alt_success {
                    if let Some(ty) = &alt.ty {
                        self.collect_type_ref_recursive(
                            ty,
                            ir,
                            &mut referenced,
                            &mut visited,
                            &service_tag,
                        );
                    }
                }

                // Error responses
                match &op.errors {
                    ErrorUse::Inline(error_decl) => {
                        for variant in &error_decl.variants {
                            if let Some(ty) = &variant.ty {
                                self.collect_type_ref_recursive(
                                    ty,
                                    ir,
                                    &mut referenced,
                                    &mut visited,
                                    &service_tag,
                                );
                            }
                        }
                    }
                    ErrorUse::Shared(id) => {
                        // Find the shared error decl and traverse it
                        if let Some(error_decl) = ir.errors.iter().find(|e| &e.id == id) {
                            for variant in &error_decl.variants {
                                if let Some(ty) = &variant.ty {
                                    self.collect_type_ref_recursive(
                                        ty,
                                        ir,
                                        &mut referenced,
                                        &mut visited,
                                        &service_tag,
                                    );
                                }
                            }
                        }
                    }
                    ErrorUse::None => {}
                }
            }
        }

        referenced
    }

    /// Recursively collect type references, handling cycles via visited set.
    /// This traverses into struct fields, union variants, aliases, and nested containers.
    /// Propagates the service tag to all referenced types for proper feature flag generation.
    fn collect_type_ref_recursive(
        &self,
        type_ref: &TypeRef,
        ir: &GenIr,
        referenced: &mut std::collections::BTreeMap<StableId, BTreeSet<String>>,
        visited: &mut BTreeSet<StableId>,
        service_tag: &Option<String>,
    ) {
        // Skip primitives - they're built-in, not generated
        if matches!(type_ref.target, StableId::Primitive(_)) {
            // But still check modifiers for nested types (e.g., Map values)
            for modifier in &type_ref.modifiers {
                if let TypeMod::Map(value_type) = modifier {
                    self.collect_type_ref_recursive(
                        value_type,
                        ir,
                        referenced,
                        visited,
                        service_tag,
                    );
                }
            }
            return;
        }

        // Check for cycles (within this operation's traversal)
        if !visited.insert(type_ref.target.clone()) {
            return;
        }

        // Mark as referenced and add the service tag
        let tags = referenced.entry(type_ref.target.clone()).or_default();
        if let Some(tag) = service_tag {
            tags.insert(tag.clone());
        }

        // Handle modifiers (Map contains nested TypeRef)
        for modifier in &type_ref.modifiers {
            if let TypeMod::Map(value_type) = modifier {
                self.collect_type_ref_recursive(value_type, ir, referenced, visited, service_tag);
            }
        }

        // Recursively traverse into the type's internals
        if let Some(type_decl) = ir.types.get(&type_ref.target) {
            self.collect_type_decl_refs(type_decl, ir, referenced, visited, service_tag);
        }
    }

    /// Collect references from within a type declaration (fields, variants, aliases).
    fn collect_type_decl_refs(
        &self,
        type_decl: &TypeDecl,
        ir: &GenIr,
        referenced: &mut std::collections::BTreeMap<StableId, BTreeSet<String>>,
        visited: &mut BTreeSet<StableId>,
        service_tag: &Option<String>,
    ) {
        match &type_decl.kind {
            TypeKind::Struct {
                fields, additional, ..
            } => {
                for field in fields {
                    self.collect_type_ref_recursive(
                        &field.ty,
                        ir,
                        referenced,
                        visited,
                        service_tag,
                    );
                }
                // Handle additionalProperties typed map
                if let Additional::Typed(type_ref) = additional {
                    self.collect_type_ref_recursive(type_ref, ir, referenced, visited, service_tag);
                }
            }
            TypeKind::Union { variants, .. } => {
                for variant in variants {
                    self.collect_type_ref_recursive(
                        &variant.ty,
                        ir,
                        referenced,
                        visited,
                        service_tag,
                    );
                }
            }
            TypeKind::Alias { aliased } => {
                self.collect_alias_target_refs(aliased, ir, referenced, visited, service_tag);
            }
            TypeKind::Enum { .. } => {
                // Enums don't contain type references
            }
        }
    }

    /// Collect references from alias targets.
    fn collect_alias_target_refs(
        &self,
        target: &AliasTarget,
        ir: &GenIr,
        referenced: &mut std::collections::BTreeMap<StableId, BTreeSet<String>>,
        visited: &mut BTreeSet<StableId>,
        service_tag: &Option<String>,
    ) {
        match target {
            AliasTarget::Primitive(_) => {}
            AliasTarget::Reference(type_ref) => {
                self.collect_type_ref_recursive(type_ref, ir, referenced, visited, service_tag);
            }
            AliasTarget::Composite(composite) => match composite {
                Composite::List(inner) => {
                    self.collect_type_ref_recursive(inner, ir, referenced, visited, service_tag);
                }
                Composite::Map { value, .. } => {
                    self.collect_type_ref_recursive(value, ir, referenced, visited, service_tag);
                }
                Composite::Tuple(types) => {
                    for ty in types {
                        self.collect_type_ref_recursive(ty, ir, referenced, visited, service_tag);
                    }
                }
            },
        }
    }

    /// Build a dependency graph of types. Returns adjacency list mapping each type
    /// to the types it directly references.
    fn build_type_graph(&self, ir: &GenIr) -> BTreeMap<StableId, BTreeSet<StableId>> {
        let mut graph: BTreeMap<StableId, BTreeSet<StableId>> = BTreeMap::new();

        for (id, type_decl) in &ir.types {
            let deps = self.collect_direct_deps(type_decl, ir);
            graph.insert(id.clone(), deps);
        }

        graph
    }

    /// Collect direct type dependencies from a type declaration.
    fn collect_direct_deps(&self, type_decl: &TypeDecl, ir: &GenIr) -> BTreeSet<StableId> {
        let mut deps = BTreeSet::new();

        match &type_decl.kind {
            TypeKind::Struct {
                fields, additional, ..
            } => {
                for field in fields {
                    self.collect_type_ref_deps(&field.ty, ir, &mut deps);
                }
                if let Additional::Typed(type_ref) = additional {
                    self.collect_type_ref_deps(type_ref, ir, &mut deps);
                }
            }
            TypeKind::Union { variants, .. } => {
                for variant in variants {
                    self.collect_type_ref_deps(&variant.ty, ir, &mut deps);
                }
            }
            TypeKind::Alias { aliased } => {
                self.collect_alias_deps(aliased, ir, &mut deps);
            }
            TypeKind::Enum { .. } => {
                // Enums don't have type dependencies
            }
        }

        deps
    }

    /// Collect dependencies from a type reference.
    #[allow(clippy::only_used_in_recursion)]
    fn collect_type_ref_deps(&self, type_ref: &TypeRef, ir: &GenIr, deps: &mut BTreeSet<StableId>) {
        // Skip primitives
        if !matches!(type_ref.target, StableId::Primitive(_)) {
            // Only add if this type actually exists in ir.types
            if ir.types.contains_key(&type_ref.target) {
                deps.insert(type_ref.target.clone());
            }
        }

        // Check modifiers for nested types
        for modifier in &type_ref.modifiers {
            if let TypeMod::Map(value_type) = modifier {
                self.collect_type_ref_deps(value_type, ir, deps);
            }
        }
    }

    /// Collect dependencies from an alias target.
    fn collect_alias_deps(&self, target: &AliasTarget, ir: &GenIr, deps: &mut BTreeSet<StableId>) {
        match target {
            AliasTarget::Primitive(_) => {}
            AliasTarget::Reference(type_ref) => {
                self.collect_type_ref_deps(type_ref, ir, deps);
            }
            AliasTarget::Composite(composite) => match composite {
                Composite::List(inner) => {
                    self.collect_type_ref_deps(inner, ir, deps);
                }
                Composite::Map { value, .. } => {
                    self.collect_type_ref_deps(value, ir, deps);
                }
                Composite::Tuple(types) => {
                    for ty in types {
                        self.collect_type_ref_deps(ty, ir, deps);
                    }
                }
            },
        }
    }

    /// Find strongly connected components using Tarjan's algorithm.
    /// Returns components in reverse topological order (leaf SCCs first).
    fn find_sccs(&self, graph: &BTreeMap<StableId, BTreeSet<StableId>>) -> Vec<BTreeSet<StableId>> {
        let mut index_counter = 0u32;
        let mut stack: Vec<StableId> = Vec::new();
        let mut on_stack: BTreeSet<StableId> = BTreeSet::new();
        let mut indices: HashMap<StableId, u32> = HashMap::new();
        let mut low_links: HashMap<StableId, u32> = HashMap::new();
        let mut sccs: Vec<BTreeSet<StableId>> = Vec::new();

        for node in graph.keys() {
            if !indices.contains_key(node) {
                self.tarjan_strongconnect(
                    node,
                    graph,
                    &mut index_counter,
                    &mut stack,
                    &mut on_stack,
                    &mut indices,
                    &mut low_links,
                    &mut sccs,
                );
            }
        }

        sccs
    }

    /// Tarjan's algorithm helper - process a single node.
    #[allow(clippy::too_many_arguments, clippy::only_used_in_recursion)]
    fn tarjan_strongconnect(
        &self,
        node: &StableId,
        graph: &BTreeMap<StableId, BTreeSet<StableId>>,
        index_counter: &mut u32,
        stack: &mut Vec<StableId>,
        on_stack: &mut BTreeSet<StableId>,
        indices: &mut HashMap<StableId, u32>,
        low_links: &mut HashMap<StableId, u32>,
        sccs: &mut Vec<BTreeSet<StableId>>,
    ) {
        let index = *index_counter;
        *index_counter += 1;
        indices.insert(node.clone(), index);
        low_links.insert(node.clone(), index);
        stack.push(node.clone());
        on_stack.insert(node.clone());

        // Visit successors
        if let Some(successors) = graph.get(node) {
            for successor in successors {
                if !indices.contains_key(successor) {
                    // Successor not yet visited
                    self.tarjan_strongconnect(
                        successor,
                        graph,
                        index_counter,
                        stack,
                        on_stack,
                        indices,
                        low_links,
                        sccs,
                    );
                    let succ_low = *low_links.get(successor).unwrap();
                    let node_low = low_links.get_mut(node).unwrap();
                    *node_low = (*node_low).min(succ_low);
                } else if on_stack.contains(successor) {
                    // Successor is on stack, part of current SCC
                    let succ_index = *indices.get(successor).unwrap();
                    let node_low = low_links.get_mut(node).unwrap();
                    *node_low = (*node_low).min(succ_index);
                }
            }
        }

        // If node is a root, pop the SCC
        if low_links.get(node) == indices.get(node) {
            let mut scc = BTreeSet::new();
            loop {
                let w = stack.pop().unwrap();
                on_stack.remove(&w);
                scc.insert(w.clone());
                if &w == node {
                    break;
                }
            }
            sccs.push(scc);
        }
    }

    /// Determine which edges need Box wrapping to break cycles.
    /// For each SCC with multiple nodes, we box all edges within the SCC.
    /// This ensures all cycles are broken, though it may over-box slightly.
    fn compute_boxed_edges(&self, ir: &GenIr) -> BoxedEdges {
        let graph = self.build_type_graph(ir);
        let sccs = self.find_sccs(&graph);

        let mut boxed_edges = BoxedEdges::new();

        // For each SCC with more than one node (a cycle), box all internal edges
        for scc in &sccs {
            if scc.len() <= 1 {
                continue; // No cycle in singleton SCC
            }

            // Box all edges within this SCC
            for type_id in scc {
                if let Some(deps) = graph.get(type_id) {
                    for dep in deps {
                        if scc.contains(dep) {
                            boxed_edges.insert((type_id.clone(), dep.clone()));
                        }
                    }
                }
            }
        }

        boxed_edges
    }

    /// Check if a reference from source_type to target_type needs Box wrapping.
    fn needs_boxing(
        &self,
        source_type: &StableId,
        target_type: &StableId,
        boxed_edges: &BoxedEdges,
    ) -> bool {
        boxed_edges.contains(&(source_type.clone(), target_type.clone()))
    }

    /// Compute a type-partitioning (the bucket map) from the referenced-types
    /// index. `tag_types` maps each tag to the type decls it owns; `shared` is
    /// every type referenced by 0 or 2+ tags (lives in the common bucket).
    /// `common_module` is the disambiguated single-crate module name
    /// (ignored under multi-crate layout).
    #[allow(clippy::type_complexity)]
    fn partition_types<'a>(
        &self,
        ir: &'a GenIr,
    ) -> (
        BTreeMap<String, Vec<(&'a StableId, &'a TypeDecl)>>,
        Vec<(&'a StableId, &'a TypeDecl, BTreeSet<String>)>,
        String,
    ) {
        let referenced_types = self.collect_referenced_types(ir);

        // Types used directly as multipart request bodies are rendered inside
        // service modules — not emitted as shared types.
        let mut multipart_request_types = BTreeSet::new();
        for service in &ir.services {
            for operation in &service.operations {
                if let Some(body) = &operation.http.body {
                    for variant in &body.variants {
                        if variant.content_type.starts_with("multipart/") {
                            multipart_request_types.insert(variant.ty.target.clone());
                        }
                    }
                }
            }
        }

        let tag_names: BTreeSet<String> = ir
            .services
            .iter()
            .filter(|s| s.name.canonical != "default")
            .map(|s| s.name.snake.clone())
            .collect();

        let common_module = disambiguate_module(
            "common",
            &tag_names,
            &["shared_types", "base_types", "core_types"],
        );

        let mut tag_types: BTreeMap<String, Vec<(&'a StableId, &'a TypeDecl)>> = BTreeMap::new();
        let mut shared_types: Vec<(&'a StableId, &'a TypeDecl, BTreeSet<String>)> = Vec::new();

        for (type_id, service_tags) in referenced_types.into_iter() {
            if multipart_request_types.contains(&type_id) {
                continue;
            }
            // Resolve `&'a StableId` / `&'a TypeDecl` from the IR (outlives
            // this function) rather than from the just-built map.
            let Some((ir_id, type_decl)) = ir.types.get_key_value(&type_id) else {
                continue;
            };
            if service_tags.len() == 1 {
                let tag = service_tags.into_iter().next().unwrap();
                tag_types.entry(tag).or_default().push((ir_id, type_decl));
            } else {
                shared_types.push((ir_id, type_decl, service_tags));
            }
        }

        (tag_types, shared_types, common_module)
    }

    /// Build the bucket map (type_id -> Bucket) used by render-time
    /// qualification. Called once, fed into `RenderCtx`.
    fn build_bucket_map(
        tag_types: &BTreeMap<String, Vec<(&StableId, &TypeDecl)>>,
        shared: &[(&StableId, &TypeDecl, BTreeSet<String>)],
    ) -> BTreeMap<StableId, Bucket> {
        let mut map: BTreeMap<StableId, Bucket> = BTreeMap::new();
        for (tag, items) in tag_types {
            for (id, _) in items {
                map.insert((*id).clone(), Bucket::Tag(tag.clone()));
            }
        }
        for (id, _, _) in shared {
            map.insert((*id).clone(), Bucket::Common);
        }
        map
    }

    /// Emit the type files. In single-crate mode this lays out
    /// `src/types/{tag}.rs`, `src/types/{common}.rs`, and `src/types/mod.rs`
    /// (byte-identical to prior behaviour). In multi-crate mode this lays out
    /// `<tag_crate>/src/types.rs` and `<common_crate>/src/lib.rs` directly.
    #[allow(clippy::too_many_arguments)]
    fn generate_types(
        &self,
        ir: &GenIr,
        vfs: &mut VirtualFS,
        ctx: &RenderCtx,
        layout: &Layout,
        tag_types: &BTreeMap<String, Vec<(&StableId, &TypeDecl)>>,
        shared_types: &[(&StableId, &TypeDecl, BTreeSet<String>)],
        common_module: &str,
    ) -> Result<()> {
        let boxed_edges = self.compute_boxed_edges(ir);
        let type_file_header = "#[allow(unused_imports)]\nuse serde::{Deserialize, Serialize};\n\n";

        // --- Per-tag type files ---
        // Precompute per-tag cross-ref detection (single-crate only — in
        // multi-crate mode, cross-bucket refs emit a `<common_ident>::` path
        // inline, so `use super::*` is never needed).
        let tag_type_ids: BTreeMap<&String, BTreeSet<&StableId>> = tag_types
            .iter()
            .map(|(tag, types)| (tag, types.iter().map(|(id, _)| *id).collect()))
            .collect();

        for (tag, types) in tag_types {
            let mut content = format!("//! Types for the {} service\n\n{}", tag, type_file_header);

            if !layout.is_multi_crate() {
                let own_ids = &tag_type_ids[tag];
                let needs_super = types.iter().any(|(_, type_decl)| {
                    let deps = self.collect_direct_deps(type_decl, ir);
                    deps.iter()
                        .any(|dep| matches!(dep, StableId::Named(_)) && !own_ids.contains(dep))
                });
                if needs_super {
                    content.push_str("use super::*;\n\n");
                }
            }

            for (_, type_decl) in types {
                let rendered = self.render_type(type_decl, ir, &boxed_edges, ctx)?;
                content.push_str(&rendered);
                content.push_str("\n\n");
            }

            let path = match layout {
                Layout::SingleCrate => format!("src/types/{}.rs", tag),
                Layout::MultiCrate { .. } => {
                    let crate_dir = layout.tag_crate_name(tag).unwrap();
                    format!("{}/src/types.rs", crate_dir)
                }
            };
            vfs.add_file(path, content);
        }

        // --- Shared/common file ---
        {
            let mut content = format!("//! Shared API types\n\n{}", type_file_header);

            for (_, type_decl, service_tags) in shared_types {
                // Feature-cfg gates only make sense under single-crate; in
                // multi-crate mode every shared type is unconditionally
                // available in the common crate.
                if !layout.is_multi_crate() && !service_tags.is_empty() {
                    let feature_list: Vec<String> = service_tags
                        .iter()
                        .map(|f| format!("feature = \"{}\"", f))
                        .collect();
                    if feature_list.len() > 1 {
                        content.push_str(&format!("#[cfg(any({}))]\n", feature_list.join(", ")));
                    } else {
                        content.push_str(&format!("#[cfg({})]\n", feature_list[0]));
                    }
                }

                let rendered = self.render_type(type_decl, ir, &boxed_edges, ctx)?;
                content.push_str(&rendered);
                content.push_str("\n\n");
            }

            let (path, prefix) = match layout {
                Layout::SingleCrate => (format!("src/types/{}.rs", common_module), String::new()),
                Layout::MultiCrate { common_name, .. } => (
                    format!("{}/src/lib.rs", common_name),
                    "//! Shared API types (generated)\n\n".to_string(),
                ),
            };
            let final_content = if prefix.is_empty() {
                content
            } else {
                // Replace the single-crate header with a multi-crate lib.rs
                // header; keep the `use serde::...` import etc. Append
                // `shared` and `multipart` module declarations so tag crates
                // can import `RequestContext`, auth extractors, and
                // `Spooled` through the common crate ident — nominal types
                // must match across tag crates.
                let without_header = content
                    .strip_prefix("//! Shared API types\n\n")
                    .unwrap_or(&content);
                format!(
                    "{}{}\npub mod shared;\npub use shared::*;\npub mod multipart;\n",
                    prefix, without_header
                )
            };
            vfs.add_file(path, final_content);
        }

        // --- types/mod.rs (single-crate only) ---
        if let Layout::SingleCrate = layout {
            let mut mod_content = String::from("//! API types\n\n");
            mod_content.push_str(&format!(
                "pub mod {};\npub use {}::*;\n\n",
                common_module, common_module
            ));
            for tag in tag_types.keys() {
                mod_content.push_str(&format!(
                    "#[cfg(feature = \"{tag}\")]\npub mod {tag};\n#[cfg(feature = \"{tag}\")]\npub use {tag}::*;\n\n",
                ));
            }
            vfs.add_file("src/types/mod.rs", mod_content);
        }

        Ok(())
    }

    /// Escape Rust keywords with r# prefix.
    /// Note: `self` and `Self` cannot be raw identifiers and are handled separately
    /// by `escape_self_keyword` which uses underscore prefixing.
    fn escape_rust_keyword(name: &str) -> String {
        match name {
            "as" | "break" | "const" | "continue" | "crate" | "else" | "enum" | "extern"
            | "false" | "fn" | "for" | "if" | "impl" | "in" | "let" | "loop" | "match" | "mod"
            | "move" | "mut" | "pub" | "ref" | "return" | "static" | "struct" | "super"
            | "trait" | "true" | "type" | "unsafe" | "use" | "where" | "while" | "async"
            | "await" | "dyn" | "abstract" | "become" | "box" | "do" | "final" | "macro"
            | "override" | "priv" | "typeof" | "unsized" | "virtual" | "yield" | "try" => {
                format!("r#{}", name)
            }
            _ => name.to_string(),
        }
    }

    /// Check if a name is `self` or `Self` (cannot be raw identifiers in Rust)
    fn is_self_keyword(name: &str) -> bool {
        name == "self" || name == "Self"
    }

    /// Escape `self`/`Self` by prepending underscores until no conflict exists.
    /// Returns Err if all 12 underscore variants are taken.
    fn escape_self_keyword(
        name: &str,
        existing_names: &std::collections::BTreeSet<String>,
    ) -> std::result::Result<String, String> {
        for underscore_count in 1..=12 {
            let escaped = format!("{}{}", "_".repeat(underscore_count), name);
            if !existing_names.contains(&escaped) {
                return Ok(escaped);
            }
        }
        Err(format!(
            "Cannot escape '{}': all underscore variants up to 12 are already in use",
            name
        ))
    }

    /// Check if a name is a valid Rust identifier
    fn is_valid_rust_ident(name: &str) -> bool {
        if name.is_empty() {
            return false;
        }
        let first = name.chars().next().unwrap();
        if !first.is_alphabetic() && first != '_' {
            return false;
        }
        name.chars().all(|c| c.is_alphanumeric() || c == '_')
    }

    /// Make a valid Rust field name from an arbitrary string.
    /// Returns (field_name, needs_rename) where needs_rename is true if the original
    /// name differs from the generated field name.
    fn make_valid_field_name(original: &str, snake: &str) -> (String, bool) {
        // If the snake case version is valid, use it
        if Self::is_valid_rust_ident(snake) {
            let escaped = Self::escape_rust_keyword(snake);
            // Check if we need rename (either the original differs from snake, or we escaped a keyword)
            let needs_rename = original != snake || escaped != snake;
            return (escaped, needs_rename);
        }

        // If it starts with a digit, prefix with underscore
        if snake.chars().next().is_some_and(|c| c.is_ascii_digit()) {
            let new_name = format!("_{}", snake);
            return (new_name, true);
        }

        // Replace invalid characters with underscores
        let valid: String = snake
            .chars()
            .map(|c| {
                if c.is_alphanumeric() || c == '_' {
                    c
                } else {
                    '_'
                }
            })
            .collect();

        // If it starts with underscore followed by digit or is all underscores, prefix with 'f'
        if valid.is_empty()
            || valid.chars().all(|c| c == '_')
            || (valid.starts_with('_') && valid.chars().nth(1).is_some_and(|c| c.is_ascii_digit()))
        {
            let new_name = format!("f{}", valid);
            return (new_name, true);
        }

        (valid.clone(), original != valid)
    }

    /// Render a type declaration
    fn render_type(
        &self,
        type_decl: &TypeDecl,
        ir: &GenIr,
        boxed_edges: &BoxedEdges,
        ctx: &RenderCtx,
    ) -> Result<String> {
        use ir::gen_ir::TypeKind;

        match &type_decl.kind {
            TypeKind::Struct { fields, .. } => {
                // Collect all snake_case field names for conflict detection.
                // We track both original names AND generated names to handle conflicts
                // between self/Self/_self/etc.
                let mut used_names: BTreeSet<String> =
                    fields.iter().map(|f| f.name.snake.clone()).collect();

                let mut fields_str: Vec<String> = Vec::new();
                for f in fields {
                    let (field_name, needs_rename) = if Self::is_self_keyword(&f.name.snake) {
                        // Handle self/Self specially - cannot use r# prefix
                        let escaped = Self::escape_self_keyword(&f.name.snake, &used_names)
                            .map_err(|e| {
                                Error::GenerationError(format!(
                                    "Failed to generate field name for '{}' in struct '{}': {}",
                                    f.name.canonical, type_decl.name.pascal, e
                                ))
                            })?;
                        // Track the generated name so subsequent self/Self fields don't conflict
                        used_names.insert(escaped.clone());
                        (escaped, true)
                    } else {
                        Self::make_valid_field_name(&f.name.canonical, &f.name.snake)
                    };
                    let type_str = self.render_type_ref(&f.ty, ir, &type_decl.id, boxed_edges, ctx);
                    if needs_rename {
                        fields_str.push(format!(
                            "    #[serde(rename = \"{}\")]\n    pub {}: {},",
                            f.name.canonical, field_name, type_str
                        ));
                    } else {
                        fields_str.push(format!("    pub {}: {},", field_name, type_str));
                    }
                }

                Ok(format!(
                    "#[derive(Debug, Clone, Serialize, Deserialize)]\npub struct {} {{\n{}\n}}",
                    type_decl.name.pascal,
                    fields_str.join("\n")
                ))
            }
            TypeKind::Enum { values, .. } => {
                let variants: Vec<String> = values
                    .iter()
                    .map(|v| {
                        let variant_name = Self::escape_rust_keyword(&v.name.pascal);
                        let wire_value = match &v.wire {
                            Literal::String(s) => s.clone(),
                            Literal::I64(n) => n.to_string(),
                            Literal::F64(n) => n.to_string(),
                            Literal::Bool(b) => b.to_string(),
                            other => format!("{other:?}"),
                        };
                        if wire_value == variant_name {
                            format!("    {},", variant_name)
                        } else {
                            format!(
                                "    #[serde(rename = \"{}\")]\n    {},",
                                wire_value, variant_name
                            )
                        }
                    })
                    .collect();

                Ok(format!(
                    "#[derive(Debug, Clone, Serialize, Deserialize)]\npub enum {} {{\n{}\n}}",
                    type_decl.name.pascal,
                    variants.join("\n")
                ))
            }
            TypeKind::Alias { aliased } => {
                let target = self.render_alias_target(aliased, ir, &type_decl.id, boxed_edges, ctx);
                Ok(format!("pub type {} = {};", type_decl.name.pascal, target))
            }
            TypeKind::Union { style, variants } => {
                self.render_union(type_decl, style, variants, ir, boxed_edges, ctx)
            }
        }
    }

    fn render_union(
        &self,
        type_decl: &TypeDecl,
        style: &ir::gen_ir::UnionStyle,
        variants: &[ir::gen_ir::Variant],
        ir: &GenIr,
        boxed_edges: &BoxedEdges,
        ctx: &RenderCtx,
    ) -> Result<String> {
        use ir::gen_ir::UnionStyle;

        match style {
            UnionStyle::AllOf => self.render_allof(type_decl, variants, ir, boxed_edges, ctx),
            UnionStyle::OneOf => {
                self.render_oneof_anyof(type_decl, variants, ir, false, boxed_edges, ctx)
            }
            UnionStyle::AnyOf => {
                self.render_oneof_anyof(type_decl, variants, ir, false, boxed_edges, ctx)
            }
            UnionStyle::Discriminated { tag } => {
                self.render_discriminated(type_decl, variants, tag, ir, boxed_edges, ctx)
            }
        }
    }

    fn render_allof(
        &self,
        type_decl: &TypeDecl,
        variants: &[ir::gen_ir::Variant],
        ir: &GenIr,
        boxed_edges: &BoxedEdges,
        ctx: &RenderCtx,
    ) -> Result<String> {
        // Collect variant names for self/Self conflict detection.
        // Track both original names AND generated names.
        let mut used_names: BTreeSet<String> =
            variants.iter().map(|v| v.name.snake.clone()).collect();

        let mut fields = Vec::new();

        for variant in variants {
            let variant_type =
                self.render_type_ref(&variant.ty, ir, &type_decl.id, boxed_edges, ctx);
            let field_name = if Self::is_self_keyword(&variant.name.snake) {
                let escaped =
                    Self::escape_self_keyword(&variant.name.snake, &used_names).map_err(|e| {
                        Error::GenerationError(format!(
                            "Failed to generate field name for '{}' in allOf type '{}': {}",
                            variant.name.canonical, type_decl.name.pascal, e
                        ))
                    })?;
                // Track the generated name so subsequent self/Self variants don't conflict
                used_names.insert(escaped.clone());
                escaped
            } else {
                Self::escape_rust_keyword(&variant.name.snake)
            };
            fields.push(format!(
                "    #[serde(flatten)]\n    pub {}: {},",
                field_name, variant_type
            ));
        }

        Ok(format!(
            "#[derive(Debug, Clone, Serialize, Deserialize)]\npub struct {} {{\n{}\n}}",
            type_decl.name.pascal,
            fields.join("\n")
        ))
    }

    fn render_oneof_anyof(
        &self,
        type_decl: &TypeDecl,
        variants: &[ir::gen_ir::Variant],
        ir: &GenIr,
        _is_strict: bool,
        boxed_edges: &BoxedEdges,
        ctx: &RenderCtx,
    ) -> Result<String> {
        let mut variant_lines = Vec::new();

        for variant in variants {
            let variant_name = Self::escape_rust_keyword(&variant.name.pascal);
            let variant_type =
                self.render_type_ref(&variant.ty, ir, &type_decl.id, boxed_edges, ctx);
            variant_lines.push(format!("    {}({}),", variant_name, variant_type));
        }

        Ok(format!(
            "#[derive(Debug, Clone, Serialize, Deserialize)]\n#[serde(untagged)]\npub enum {} {{\n{}\n}}",
            type_decl.name.pascal,
            variant_lines.join("\n")
        ))
    }

    fn render_discriminated(
        &self,
        type_decl: &TypeDecl,
        variants: &[ir::gen_ir::Variant],
        tag: &str,
        ir: &GenIr,
        boxed_edges: &BoxedEdges,
        ctx: &RenderCtx,
    ) -> Result<String> {
        let mut variant_lines = Vec::new();

        for variant in variants {
            let variant_name = Self::escape_rust_keyword(&variant.name.pascal);
            let variant_type =
                self.render_type_ref(&variant.ty, ir, &type_decl.id, boxed_edges, ctx);

            if let Some(tag_value) = &variant.tag_value {
                variant_lines.push(format!(
                    "    #[serde(rename = \"{}\")]\n    {}({}),",
                    tag_value, variant_name, variant_type
                ));
            } else {
                variant_lines.push(format!("    {}({}),", variant_name, variant_type));
            }
        }

        Ok(format!(
            "#[derive(Debug, Clone, Serialize, Deserialize)]\n#[serde(tag = \"{}\")]\npub enum {} {{\n{}\n}}",
            tag,
            type_decl.name.pascal,
            variant_lines.join("\n")
        ))
    }

    fn render_type_ref(
        &self,
        type_ref: &ir::gen_ir::TypeRef,
        ir: &GenIr,
        source_type: &StableId,
        boxed_edges: &BoxedEdges,
        ctx: &RenderCtx,
    ) -> String {
        let target = &type_ref.target;

        // Check if this edge needs boxing to break a cycle
        let needs_box = self.needs_boxing(source_type, target, boxed_edges);

        let base = if let Some(type_decl) = ir.types.get(target) {
            let name = type_decl.name.pascal.clone();
            let qualified = ctx.qualify_named(target, &name, source_type);
            if needs_box {
                format!("Box<{}>", qualified)
            } else {
                qualified
            }
        } else {
            self.render_type_id(target)
        };

        let mut result = base;

        for modifier in &type_ref.modifiers {
            result = match modifier {
                ir::gen_ir::TypeMod::List => format!("Vec<{}>", result),
                ir::gen_ir::TypeMod::Set => format!("std::collections::HashSet<{}>", result),
                ir::gen_ir::TypeMod::Map(value_type) => {
                    format!(
                        "std::collections::HashMap<String, {}>",
                        self.render_type_ref(value_type, ir, source_type, boxed_edges, ctx)
                    )
                }
                _ => result,
            };
        }

        if type_ref.optional {
            result = format!("Option<{}>", result);
        }

        result
    }

    fn render_type_id(&self, id: &ir::gen_ir::StableId) -> String {
        match id {
            ir::gen_ir::StableId::Primitive(p) => match p {
                ir::gen_ir::Primitive::String => "String".to_string(),
                ir::gen_ir::Primitive::Bool => "bool".to_string(),
                ir::gen_ir::Primitive::I32 => "i32".to_string(),
                ir::gen_ir::Primitive::I64 => "i64".to_string(),
                ir::gen_ir::Primitive::F32 => "f32".to_string(),
                ir::gen_ir::Primitive::F64 => "f64".to_string(),
                ir::gen_ir::Primitive::Date => "jiff::civil::Date".to_string(),
                ir::gen_ir::Primitive::DateTime => "jiff::Timestamp".to_string(),
                ir::gen_ir::Primitive::Uuid => "uuid::Uuid".to_string(),
                ir::gen_ir::Primitive::Bytes => "bytes::Bytes".to_string(),
                ir::gen_ir::Primitive::Decimal => "rust_decimal::Decimal".to_string(),
                ir::gen_ir::Primitive::Any => "serde_json::Value".to_string(),
            },
            ir::gen_ir::StableId::Named(name) => {
                // Use CanonicalName to ensure consistent pascal case (handles acronyms like FAQItem -> FaqItem)
                CanonicalName::from_string(name).pascal
            }
        }
    }

    fn render_alias_target(
        &self,
        target: &ir::gen_ir::AliasTarget,
        ir: &GenIr,
        source_type: &StableId,
        boxed_edges: &BoxedEdges,
        ctx: &RenderCtx,
    ) -> String {
        use ir::gen_ir::{AliasTarget, Composite, Primitive};
        match target {
            AliasTarget::Primitive(Primitive::String) => "String".to_string(),
            AliasTarget::Primitive(Primitive::Bool) => "bool".to_string(),
            AliasTarget::Primitive(Primitive::I32) => "i32".to_string(),
            AliasTarget::Primitive(Primitive::I64) => "i64".to_string(),
            AliasTarget::Primitive(Primitive::F32) => "f32".to_string(),
            AliasTarget::Primitive(Primitive::F64) => "f64".to_string(),
            AliasTarget::Primitive(Primitive::Date) => "jiff::civil::Date".to_string(),
            AliasTarget::Primitive(Primitive::DateTime) => "jiff::Timestamp".to_string(),
            AliasTarget::Primitive(Primitive::Uuid) => "uuid::Uuid".to_string(),
            AliasTarget::Primitive(Primitive::Bytes) => "bytes::Bytes".to_string(),
            AliasTarget::Primitive(Primitive::Decimal) => "rust_decimal::Decimal".to_string(),
            AliasTarget::Primitive(Primitive::Any) => "serde_json::Value".to_string(),
            AliasTarget::Composite(Composite::List(inner)) => {
                format!(
                    "Vec<{}>",
                    self.render_type_ref(inner, ir, source_type, boxed_edges, ctx)
                )
            }
            AliasTarget::Composite(Composite::Map { value, .. }) => {
                format!(
                    "std::collections::HashMap<String, {}>",
                    self.render_type_ref(value, ir, source_type, boxed_edges, ctx)
                )
            }
            AliasTarget::Composite(Composite::Tuple(types)) => {
                let rendered: Vec<String> = types
                    .iter()
                    .map(|t| self.render_type_ref(t, ir, source_type, boxed_edges, ctx))
                    .collect();
                format!("({})", rendered.join(", "))
            }
            AliasTarget::Reference(type_ref) => {
                self.render_type_ref(type_ref, ir, source_type, boxed_edges, ctx)
            }
        }
    }

    /// Compute unique auth permutations across all operations.
    /// Returns a map from auth-group key to auth group (name + resolved schemes).
    /// The key includes both the scheme ID set and whether anonymous access is
    /// permitted, so optional-auth and required-auth variants of the same
    /// scheme list get distinct extractors.
    fn compute_auth_groups(&self, ir: &GenIr) -> BTreeMap<AuthGroupKey, AuthGroup> {
        let mut scheme_sets: BTreeMap<AuthGroupKey, Vec<ResolvedAuth>> = BTreeMap::new();

        for service in &ir.services {
            for op in &service.operations {
                if op.auth.is_empty() {
                    continue;
                }
                let schemes: BTreeSet<StableId> =
                    op.auth.iter().map(|a| a.scheme.clone()).collect();
                let allows_anonymous = op.auth.iter().any(|a| a.optional);
                let key = AuthGroupKey {
                    schemes,
                    allows_anonymous,
                };
                scheme_sets
                    .entry(key)
                    .or_insert_with(|| resolve_operation_auth(op, &ir.auth_schemes));
            }
        }

        // Drop entries where no schemes actually resolved (e.g. empty security
        // requirements like `[{}]` or references to non-existent schemes).
        scheme_sets.retain(|_, resolved| !resolved.is_empty());

        // Determine whether a simple base name ("Auth") suffices. If only one
        // distinct scheme set exists (regardless of optionality), we can use
        // "Auth" / "OptionalAuth" without further disambiguation.
        let distinct_scheme_sets: BTreeSet<&BTreeSet<StableId>> =
            scheme_sets.keys().map(|k| &k.schemes).collect();
        let use_simple_name = distinct_scheme_sets.len() <= 1;

        // Assign names, disambiguating duplicates with numeric suffixes.
        let mut used_names: BTreeSet<String> = BTreeSet::new();
        scheme_sets
            .into_iter()
            .map(|(key, resolved)| {
                let base_name = if use_simple_name {
                    "Auth".to_string()
                } else {
                    let derived = Self::derive_auth_group_name(&key.schemes, &ir.auth_schemes);
                    if derived.is_empty() {
                        "Auth".to_string()
                    } else {
                        derived
                    }
                };

                let prefixed = if key.allows_anonymous {
                    format!("Optional{}", base_name)
                } else {
                    base_name
                };

                let name = if used_names.contains(&prefixed) {
                    // Disambiguate with numeric suffix
                    (2..)
                        .map(|i| format!("{}{}", prefixed, i))
                        .find(|n| !used_names.contains(n))
                        .unwrap()
                } else {
                    prefixed
                };
                used_names.insert(name.clone());

                let has_bearer = resolved
                    .iter()
                    .any(|a| matches!(a.kind, ResolvedAuthKind::Bearer));
                let has_api_key = resolved.iter().any(|a| {
                    matches!(
                        a.kind,
                        ResolvedAuthKind::ApiKeyHeader { .. }
                            | ResolvedAuthKind::ApiKeyQuery { .. }
                            | ResolvedAuthKind::ApiKeyCookie { .. }
                    )
                });
                let allows_anonymous = key.allows_anonymous;
                (
                    key,
                    AuthGroup {
                        name,
                        has_bearer,
                        has_api_key,
                        allows_anonymous,
                        extractions: resolved,
                    },
                )
            })
            .collect()
    }

    /// Derive a name for an auth group from its scheme names.
    fn derive_auth_group_name(
        scheme_ids: &BTreeSet<StableId>,
        auth_schemes: &[ir::gen_ir::AuthScheme],
    ) -> String {
        let names: Vec<String> = scheme_ids
            .iter()
            .filter_map(|id| {
                auth_schemes
                    .iter()
                    .find(|s| &s.id == id)
                    .map(|s| s.name.pascal.clone())
            })
            .collect();

        if names.len() == 1 {
            names.into_iter().next().unwrap()
        } else {
            names.join("Or")
        }
    }

    /// Generate service modules (one per tag).
    ///
    /// In single-crate mode: everything lands under `src/services/`.
    /// In multi-crate mode: each tag's module goes under
    /// `<tag_crate>/src/services/{tag}.rs` plus a per-crate `services/mod.rs`.
    fn generate_services(
        &self,
        ir: &GenIr,
        vfs: &mut VirtualFS,
        auth_type_map: &BTreeMap<AuthTypeKey, String>,
        ctx: &RenderCtx,
        layout: &Layout,
    ) -> Result<()> {
        for service in &ir.services {
            self.generate_service_module(service, ir, vfs, auth_type_map, ctx, layout)?;
        }

        self.generate_services_mod(ir, vfs, layout)?;

        Ok(())
    }

    /// Generate a complete service module for a tag
    fn generate_service_module(
        &self,
        service: &Service,
        ir: &GenIr,
        vfs: &mut VirtualFS,
        auth_type_map: &BTreeMap<AuthTypeKey, String>,
        ctx: &RenderCtx,
        layout: &Layout,
    ) -> Result<()> {
        let module_name = &service.name.snake;

        // In multi-crate mode the tag's own crate ident is the correct root
        // for `use` paths emitted into this module (doctests, body types).
        // In single-crate mode the whole output is one crate, so the root
        // package name applies.
        let package_ident_owned = match layout {
            Layout::MultiCrate { .. } => layout
                .tag_crate_name(module_name)
                .map(|name| crate_name_to_ident(&name)),
            Layout::SingleCrate => None,
        };
        let package_name: &str = package_ident_owned
            .as_deref()
            .unwrap_or(&ir.api.package_name.snake);

        // RenderCtx's `self_crate` drives doctest qualification; scope it
        // to the tag crate currently being emitted.
        let mut ctx_for_service = ctx.clone();
        ctx_for_service.self_crate = package_name.to_string();

        let generator =
            ServiceModuleGenerator::new(service, package_name, auth_type_map, &ctx_for_service);
        let content = generator.generate();

        let file_path = match layout {
            Layout::SingleCrate => PathBuf::from("src")
                .join("services")
                .join(format!("{}.rs", module_name)),
            Layout::MultiCrate { .. } => {
                // Only emit service modules into their own tag's crate.
                // (A "default" service with no tag goes nowhere in
                // multi-crate mode.)
                if service.name.canonical == "default" {
                    return Ok(());
                }
                let crate_dir = layout.tag_crate_name(module_name).unwrap();
                PathBuf::from(crate_dir)
                    .join("src")
                    .join("services")
                    .join(format!("{}.rs", module_name))
            }
        };
        vfs.add_file(file_path, content);

        Ok(())
    }

    /// Generate services/mod.rs. In single-crate mode one top-level file lists
    /// every tag with feature gates; in multi-crate mode each tag crate gets
    /// its own single-module `services/mod.rs`.
    fn generate_services_mod(
        &self,
        ir: &GenIr,
        vfs: &mut VirtualFS,
        layout: &Layout,
    ) -> Result<()> {
        match layout {
            Layout::SingleCrate => {
                let mut mod_content = String::from("//! Service interfaces organized by tag\n\n");
                for service in &ir.services {
                    let feature_name = service.name.snake.clone();
                    if service.name.canonical == "default" {
                        mod_content.push_str(&format!("pub mod {};\n", service.name.snake));
                    } else {
                        mod_content.push_str(&format!(
                            "#[cfg(feature = \"{}\")]\npub mod {};\n",
                            feature_name, service.name.snake
                        ));
                    }
                }
                vfs.add_file("src/services/mod.rs", mod_content);
            }
            Layout::MultiCrate { .. } => {
                for service in &ir.services {
                    if service.name.canonical == "default" {
                        continue;
                    }
                    let tag = &service.name.snake;
                    let crate_dir = layout.tag_crate_name(tag).unwrap();
                    let content = format!("//! Service interfaces\n\npub mod {tag};\n", tag = tag);
                    vfs.add_file(format!("{}/src/services/mod.rs", crate_dir), content);
                }
            }
        }
        Ok(())
    }

    /// Generate Cargo.toml(s). Single-crate: one at the root with feature
    /// flags. Multi-crate: one per tag crate (depends on the common crate)
    /// plus one for the common crate; no feature flags.
    fn generate_cargo_toml(
        &self,
        ir: &GenIr,
        vfs: &mut VirtualFS,
        layout: &Layout,
        tag_types: &BTreeMap<String, Vec<(&StableId, &TypeDecl)>>,
    ) -> Result<()> {
        let version = sanitize_version(&ir.api.version);

        match layout {
            Layout::SingleCrate => {
                let mut tags: BTreeSet<String> = BTreeSet::new();
                for service in &ir.services {
                    if service.name.canonical != "default" {
                        tags.insert(service.name.snake.clone());
                    }
                }
                let data = CargoTomlData {
                    package_name: &ir.api.package_name.snake,
                    version: &version,
                    tags: tags.iter().cloned().collect(),
                };
                let content = data
                    .render()
                    .map_err(|e| Error::TemplateError(Box::new(e)))?;
                vfs.add_file("Cargo.toml", content);
            }
            Layout::MultiCrate { common_name, .. } => {
                // Common crate Cargo.toml
                vfs.add_file(
                    format!("{}/Cargo.toml", common_name),
                    render_common_cargo_toml(common_name, &version),
                );

                // Per-tag Cargo.toml — one per distinct tag across services
                // and tag_types (a tag may own types but have no service, or
                // vice versa).
                let mut tags: BTreeSet<String> = BTreeSet::new();
                for service in &ir.services {
                    if service.name.canonical != "default" {
                        tags.insert(service.name.snake.clone());
                    }
                }
                for tag in tag_types.keys() {
                    tags.insert(tag.clone());
                }

                for tag in &tags {
                    let crate_name = layout.tag_crate_name(tag).unwrap();
                    vfs.add_file(
                        format!("{}/Cargo.toml", crate_name),
                        render_tag_cargo_toml(&crate_name, &version, common_name),
                    );
                }
            }
        }
        Ok(())
    }

    /// Generate the `shared.rs` auth/context helper module. In multi-crate
    /// mode it's duplicated into each tag crate.
    fn generate_shared_module(
        &self,
        _ir: &GenIr,
        auth_groups: &BTreeMap<AuthGroupKey, AuthGroup>,
        vfs: &mut VirtualFS,
        layout: &Layout,
    ) -> Result<()> {
        let groups: Vec<&AuthGroup> = auth_groups.values().collect();
        let data = SharedTemplate {
            auth_groups: groups,
        };
        let content = data
            .render()
            .map_err(|e| Error::TemplateError(Box::new(e)))?;

        match layout {
            Layout::SingleCrate => {
                vfs.add_file("src/shared.rs", content);
            }
            Layout::MultiCrate { common_name, .. } => {
                // Shared belongs to the common crate: types defined here need
                // to be nominally identical across all tag crates. Emitting
                // per-tag would produce byte-identical but nominally distinct
                // types, defeating downstream interop.
                vfs.add_file(format!("{}/src/shared.rs", common_name), content);
            }
        }
        Ok(())
    }

    /// Generate lib.rs. Single-crate: one root lib.rs. Multi-crate: a lib.rs
    /// per tag crate (common crate's lib.rs is emitted in `generate_types`
    /// alongside shared types, with `pub mod shared`/`pub mod multipart`
    /// declarations appended there).
    fn generate_lib_rs(&self, ir: &GenIr, vfs: &mut VirtualFS, layout: &Layout) -> Result<()> {
        match layout {
            Layout::SingleCrate => {
                let content = "//! Generated Axum API\n\n\
                    pub mod types;\n\
                    pub mod services;\n\
                    pub mod shared;\n\
                    pub mod multipart;\n";
                vfs.add_file("src/lib.rs", content);
            }
            Layout::MultiCrate { .. } => {
                // Tag crates don't own shared/multipart — those live in the
                // common crate so nominal types match across tags.
                let content = "//! Generated Axum API\n\n\
                    pub mod types;\n\
                    pub mod services;\n";
                for service in &ir.services {
                    if service.name.canonical == "default" {
                        continue;
                    }
                    let crate_dir = layout.tag_crate_name(&service.name.snake).unwrap();
                    vfs.add_file(format!("{}/src/lib.rs", crate_dir), content);
                }
            }
        }
        Ok(())
    }

    /// Generate multipart utilities module.
    fn generate_multipart_module(
        &self,
        _ir: &GenIr,
        vfs: &mut VirtualFS,
        layout: &Layout,
    ) -> Result<()> {
        #[derive(Template)]
        #[template(path = "multipart.rs.jinja", escape = "none")]
        struct MultipartModule;

        let content = MultipartModule
            .render()
            .map_err(|e| Error::TemplateError(Box::new(e)))?;

        match layout {
            Layout::SingleCrate => {
                vfs.add_file("src/multipart.rs", content);
            }
            Layout::MultiCrate { common_name, .. } => {
                // Same rationale as `shared`: a `Spooled` in two distinct tag
                // crates would be nominally distinct even though byte-
                // identical. Consolidate in common.
                vfs.add_file(format!("{}/src/multipart.rs", common_name), content);
            }
        }
        Ok(())
    }
}

impl Generator for RustAxumGenerator {
    fn generate(&self, ir: &GenIr, config: &Config) -> Result<VirtualFS> {
        let mut vfs = VirtualFS::new();

        let auth_groups = self.compute_auth_groups(ir);
        let auth_type_map: BTreeMap<AuthTypeKey, String> = auth_groups
            .iter()
            .map(|(k, v)| (k.clone(), v.name.clone()))
            .collect();

        // Decide layout up front so every emission site can branch on it.
        let layout = Layout::from_config(config);

        // Partition types into buckets once; feed both the bucket map into
        // `RenderCtx` (for path qualification) and the tag_types/shared_types
        // slices into the type emitter.
        let (tag_types, shared_types, common_module) = self.partition_types(ir);

        let type_bucket = Self::build_bucket_map(&tag_types, &shared_types);
        let common_ident = layout.common_name().map(crate_name_to_ident);

        let ctx = RenderCtx {
            type_bucket,
            common_ident,
            multi_crate: layout.is_multi_crate(),
            // Default: the root package. Per-service renders override this
            // with the tag crate ident so doctests reference the right crate.
            self_crate: ir.api.package_name.snake.clone(),
        };

        self.generate_types(
            ir,
            &mut vfs,
            &ctx,
            &layout,
            &tag_types,
            &shared_types,
            &common_module,
        )?;
        self.generate_services(ir, &mut vfs, &auth_type_map, &ctx, &layout)?;
        self.generate_cargo_toml(ir, &mut vfs, &layout, &tag_types)?;
        self.generate_shared_module(ir, &auth_groups, &mut vfs, &layout)?;
        self.generate_multipart_module(ir, &mut vfs, &layout)?;
        self.generate_lib_rs(ir, &mut vfs, &layout)?;

        Ok(vfs)
    }

    fn language(&self) -> &str {
        "rust-axum"
    }

    fn validate(&self, ir: &GenIr) -> Result<()> {
        if ir.types.is_empty() && ir.services.is_empty() {
            return Err(Error::ValidationError(
                "IR must contain at least one type or service".to_string(),
            ));
        }
        Ok(())
    }
}

impl Default for RustAxumGenerator {
    fn default() -> Self {
        Self::new()
    }
}

// Template data structures

#[derive(Template)]
#[template(path = "Cargo.toml.jinja", escape = "none")]
struct CargoTomlData<'a> {
    package_name: &'a str,
    version: &'a str,
    tags: Vec<String>,
}

/// Key uniquely identifying an auth group. An operation can have the same set
/// of schemes with either anonymous access permitted or not, and those need
/// distinct generated extractors. Shared with `service_codegen::AuthTypeKey`.
type AuthGroupKey = AuthTypeKey;

/// A unique auth permutation shared across operations.
struct AuthGroup {
    name: String,
    has_bearer: bool,
    has_api_key: bool,
    allows_anonymous: bool,
    extractions: Vec<ResolvedAuth>,
}

#[derive(Template)]
#[template(path = "shared.rs.jinja", escape = "none")]
struct SharedTemplate<'a> {
    auth_groups: Vec<&'a AuthGroup>,
}

fn render_common_cargo_toml(name: &str, version: &str) -> String {
    format!(
        "[package]\n\
         name = \"{name}\"\n\
         version = \"{version}\"\n\
         edition = \"2024\"\n\
         description = \"Generated Axum API — shared types\"\n\
         \n\
         [dependencies]\n\
         axum = {{ version = \"0.8.7\", features = [\"multipart\"] }}\n\
         serde = {{ version = \"1.0\", features = [\"derive\"] }}\n\
         serde_json = \"1.0\"\n\
         bytes = \"1.10\"\n\
         jiff = {{ version = \"0.2\", features = [\"serde\"] }}\n\
         uuid = {{ version = \"1.11\", features = [\"serde\", \"v4\"] }}\n\
         rust_decimal = {{ version = \"1.37\", features = [\"serde\"] }}\n\
         tokio = {{ version = \"1\", features = [\"fs\", \"io-util\"] }}\n\
         tempfile = \"3\"\n",
        name = name,
        version = version,
    )
}

fn render_tag_cargo_toml(name: &str, version: &str, common_name: &str) -> String {
    format!(
        "[package]\n\
         name = \"{name}\"\n\
         version = \"{version}\"\n\
         edition = \"2024\"\n\
         description = \"Generated Axum API — {name}\"\n\
         \n\
         [dependencies]\n\
         {common_name} = {{ path = \"../{common_name}\" }}\n\
         axum = {{ version = \"0.8.7\", features = [\"multipart\"] }}\n\
         serde = {{ version = \"1.0\", features = [\"derive\"] }}\n\
         serde_json = \"1.0\"\n\
         bytes = \"1.10\"\n\
         jiff = {{ version = \"0.2\", features = [\"serde\"] }}\n\
         uuid = {{ version = \"1.11\", features = [\"serde\", \"v4\"] }}\n\
         rust_decimal = {{ version = \"1.37\", features = [\"serde\"] }}\n\
         tokio = {{ version = \"1\", features = [\"fs\", \"io-util\"] }}\n\
         tempfile = \"3\"\n",
        name = name,
        version = version,
        common_name = common_name,
    )
}
