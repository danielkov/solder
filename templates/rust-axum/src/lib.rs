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
    Additional, AliasTarget, CanonicalName, Composite, ErrorUse, Service, StableId, TypeDecl,
    TypeKind, TypeMod, TypeRef,
};
use service_codegen::ServiceModuleGenerator;
use std::collections::BTreeSet;
use std::path::PathBuf;

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

    /// Generate types in a single file with feature flags.
    /// Only generates types that are actually referenced from services/operations.
    /// Feature flags are computed from which services reference each type (not from type_decl.tags).
    fn generate_types(&self, ir: &GenIr, _config: &Config, vfs: &mut VirtualFS) -> Result<()> {
        // Allow unused imports when no features are enabled (all types are feature-gated)
        let mut content = String::from(
            "//! API types\n\n#[allow(unused_imports)]\nuse serde::{Deserialize, Serialize};\n\n",
        );

        // Collect the authoritative set of referenced types with their service tags
        // This is our source of truth for both which types to generate AND their feature flags
        let referenced_types = self.collect_referenced_types(ir);

        // Collect type IDs used in multipart request bodies (these will be generated in service modules)
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

        // Generate only referenced types (iterate over referenced set, not ir.types)
        for (type_id, service_tags) in &referenced_types {
            // Skip multipart request types (generated inline in service modules)
            if multipart_request_types.contains(type_id) {
                continue;
            }

            // Look up the type declaration
            let Some(type_decl) = ir.types.get(type_id) else {
                continue;
            };

            // Use service tags collected during traversal for feature flags
            // This ensures types referenced only by specific services get proper flags
            let features = service_tags;

            // Add feature flag if type is referenced by specific services (not default)
            if !features.is_empty() {
                let feature_list: Vec<String> = features
                    .iter()
                    .map(|f| format!("feature = \"{}\"", f))
                    .collect();
                if feature_list.len() > 1 {
                    content.push_str(&format!("#[cfg(any({}))]\n", feature_list.join(", ")));
                } else {
                    content.push_str(&format!("#[cfg({})]\n", feature_list[0]));
                }
            }

            let rendered = self.render_type(type_decl, ir)?;
            content.push_str(&rendered);
            content.push_str("\n\n");
        }

        vfs.add_file("src/types.rs", content);
        Ok(())
    }

    /// Escape Rust keywords with r# prefix
    fn escape_rust_keyword(name: &str) -> String {
        match name {
            "as" | "break" | "const" | "continue" | "crate" | "else" | "enum" | "extern"
            | "false" | "fn" | "for" | "if" | "impl" | "in" | "let" | "loop" | "match" | "mod"
            | "move" | "mut" | "pub" | "ref" | "return" | "self" | "Self" | "static" | "struct"
            | "super" | "trait" | "true" | "type" | "unsafe" | "use" | "where" | "while"
            | "async" | "await" | "dyn" | "abstract" | "become" | "box" | "do" | "final"
            | "macro" | "override" | "priv" | "typeof" | "unsized" | "virtual" | "yield"
            | "try" => format!("r#{}", name),
            _ => name.to_string(),
        }
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
    fn render_type(&self, type_decl: &TypeDecl, ir: &GenIr) -> Result<String> {
        use ir::gen_ir::TypeKind;

        match &type_decl.kind {
            TypeKind::Struct { fields, .. } => {
                let fields_str: Vec<String> = fields
                    .iter()
                    .map(|f| {
                        let (field_name, needs_rename) =
                            Self::make_valid_field_name(&f.name.canonical, &f.name.snake);
                        let type_str = self.render_type_ref(&f.ty, ir);
                        if needs_rename {
                            format!(
                                "    #[serde(rename = \"{}\")]\n    pub {}: {},",
                                f.name.canonical, field_name, type_str
                            )
                        } else {
                            format!("    pub {}: {},", field_name, type_str)
                        }
                    })
                    .collect();

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
                        format!("    {},", variant_name)
                    })
                    .collect();

                Ok(format!(
                    "#[derive(Debug, Clone, Serialize, Deserialize)]\npub enum {} {{\n{}\n}}",
                    type_decl.name.pascal,
                    variants.join("\n")
                ))
            }
            TypeKind::Alias { aliased } => {
                let target = self.render_alias_target(aliased, ir);
                Ok(format!("pub type {} = {};", type_decl.name.pascal, target))
            }
            TypeKind::Union { style, variants } => {
                self.render_union(type_decl, style, variants, ir)
            }
        }
    }

    fn render_union(
        &self,
        type_decl: &TypeDecl,
        style: &ir::gen_ir::UnionStyle,
        variants: &[ir::gen_ir::Variant],
        ir: &GenIr,
    ) -> Result<String> {
        use ir::gen_ir::UnionStyle;

        match style {
            UnionStyle::AllOf => self.render_allof(type_decl, variants, ir),
            UnionStyle::OneOf => self.render_oneof_anyof(type_decl, variants, ir, false),
            UnionStyle::AnyOf => self.render_oneof_anyof(type_decl, variants, ir, false),
            UnionStyle::Discriminated { tag } => {
                self.render_discriminated(type_decl, variants, tag, ir)
            }
        }
    }

    fn render_allof(
        &self,
        type_decl: &TypeDecl,
        variants: &[ir::gen_ir::Variant],
        ir: &GenIr,
    ) -> Result<String> {
        let mut fields = Vec::new();

        for variant in variants {
            let variant_type = self.render_type_ref(&variant.ty, ir);
            let field_name = Self::escape_rust_keyword(&variant.name.snake);
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
    ) -> Result<String> {
        let mut variant_lines = Vec::new();

        for variant in variants {
            let variant_name = Self::escape_rust_keyword(&variant.name.pascal);
            let variant_type = self.render_type_ref(&variant.ty, ir);
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
    ) -> Result<String> {
        let mut variant_lines = Vec::new();

        for variant in variants {
            let variant_name = Self::escape_rust_keyword(&variant.name.pascal);
            let variant_type = self.render_type_ref(&variant.ty, ir);

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

    fn render_type_ref(&self, type_ref: &ir::gen_ir::TypeRef, ir: &GenIr) -> String {
        let base = if let Some(type_decl) = ir.types.get(&type_ref.target) {
            type_decl.name.pascal.clone()
        } else {
            self.render_type_id(&type_ref.target)
        };

        let mut result = base;

        for modifier in &type_ref.modifiers {
            result = match modifier {
                ir::gen_ir::TypeMod::List => format!("Vec<{}>", result),
                ir::gen_ir::TypeMod::Set => format!("std::collections::HashSet<{}>", result),
                ir::gen_ir::TypeMod::Map(value_type) => {
                    format!(
                        "std::collections::HashMap<String, {}>",
                        self.render_type_ref(value_type, ir)
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

    fn render_alias_target(&self, target: &ir::gen_ir::AliasTarget, ir: &GenIr) -> String {
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
                format!("Vec<{}>", self.render_type_ref(inner, ir))
            }
            AliasTarget::Composite(Composite::Map { value, .. }) => {
                format!(
                    "std::collections::HashMap<String, {}>",
                    self.render_type_ref(value, ir)
                )
            }
            AliasTarget::Composite(Composite::Tuple(types)) => {
                let rendered: Vec<String> =
                    types.iter().map(|t| self.render_type_ref(t, ir)).collect();
                format!("({})", rendered.join(", "))
            }
            AliasTarget::Reference(type_ref) => self.render_type_ref(type_ref, ir),
        }
    }

    /// Generate service modules (one per tag)
    fn generate_services(&self, ir: &GenIr, _config: &Config, vfs: &mut VirtualFS) -> Result<()> {
        for service in &ir.services {
            self.generate_service_module(service, ir, vfs)?;
        }

        self.generate_services_mod(ir, vfs)?;

        Ok(())
    }

    /// Generate a complete service module for a tag
    fn generate_service_module(
        &self,
        service: &Service,
        ir: &GenIr,
        vfs: &mut VirtualFS,
    ) -> Result<()> {
        let module_name = &service.name.snake;

        let generator =
            ServiceModuleGenerator::new(service, &ir.auth_schemes, &ir.api.package_name.snake);
        let content = generator.generate();

        let file_path = PathBuf::from("src")
            .join("services")
            .join(format!("{}.rs", module_name));
        vfs.add_file(file_path, content);

        Ok(())
    }

    /// Generate services/mod.rs
    fn generate_services_mod(&self, ir: &GenIr, vfs: &mut VirtualFS) -> Result<()> {
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
        Ok(())
    }

    /// Generate Cargo.toml with feature flags
    fn generate_cargo_toml(&self, ir: &GenIr, vfs: &mut VirtualFS) -> Result<()> {
        let mut tags: BTreeSet<String> = BTreeSet::new();
        for service in &ir.services {
            if service.name.canonical != "default" {
                tags.insert(service.name.snake.clone());
            }
        }

        let data = CargoTomlData {
            package_name: &ir.api.package_name.snake,
            version: &ir.api.version,
            tags: tags.iter().cloned().collect(),
        };

        let content = data
            .render()
            .map_err(|e| Error::TemplateError(Box::new(e)))?;

        vfs.add_file("Cargo.toml", content);
        Ok(())
    }

    /// Generate shared types / utilities module
    fn generate_shared_module(&self, vfs: &mut VirtualFS) -> Result<()> {
        let data = Shared;
        let content = data
            .render()
            .map_err(|e| Error::TemplateError(Box::new(e)))?;
        vfs.add_file("src/shared.rs", content);
        Ok(())
    }

    /// Generate lib.rs
    fn generate_lib_rs(&self, vfs: &mut VirtualFS) -> Result<()> {
        let mut content = String::from("//! Generated Axum API\n\n");
        content.push_str("pub mod types;\n");
        content.push_str("pub mod services;\n");
        content.push_str("pub mod shared;\n");
        content.push_str("pub mod multipart;\n");

        vfs.add_file("src/lib.rs", content);
        Ok(())
    }

    /// Generate multipart utilities module
    fn generate_multipart_module(&self, vfs: &mut VirtualFS) -> Result<()> {
        #[derive(Template)]
        #[template(path = "multipart.rs.jinja", escape = "none")]
        struct MultipartModule;

        let content = MultipartModule
            .render()
            .map_err(|e| Error::TemplateError(Box::new(e)))?;
        vfs.add_file("src/multipart.rs", content);
        Ok(())
    }
}

impl Generator for RustAxumGenerator {
    fn generate(&self, ir: &GenIr, config: &Config) -> Result<VirtualFS> {
        let mut vfs = VirtualFS::new();

        self.generate_types(ir, config, &mut vfs)?;
        self.generate_services(ir, config, &mut vfs)?;
        self.generate_cargo_toml(ir, &mut vfs)?;
        self.generate_shared_module(&mut vfs)?;
        self.generate_multipart_module(&mut vfs)?;
        self.generate_lib_rs(&mut vfs)?;

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

#[derive(Template)]
#[template(path = "shared.rs.jinja", escape = "none")]
struct Shared;
