//! Fixture-based tests for the multi-crate layout.
//!
//! Builds a two-tag IR with one shared type and one per-tag type, then runs
//! the rust-axum generator in multi-crate mode and asserts on file tree
//! shape, Cargo.toml contents, and rewritten imports.

use codegen::{Config, Generator, VirtualFS};
use ir::gen_ir::*;
use rust_axum::RustAxumGenerator;
use std::collections::{BTreeMap, BTreeSet};
use std::path::Path;

fn name(s: &str) -> CanonicalName {
    CanonicalName::from_string(s)
}

fn string_ref() -> TypeRef {
    TypeRef {
        target: StableId::primitive(Primitive::String),
        optional: false,
        nullable: false,
        by_ref: false,
        modifiers: vec![],
    }
}

fn named_ref(id: &str) -> TypeRef {
    TypeRef {
        target: StableId::new(id),
        optional: false,
        nullable: false,
        by_ref: false,
        modifiers: vec![],
    }
}

fn simple_struct(id: &str, fields: &[(&str, TypeRef)]) -> TypeDecl {
    let struct_fields: Vec<Field> = fields
        .iter()
        .map(|(field_name, ty)| Field {
            name: name(field_name),
            docs: Docs::default(),
            ty: ty.clone(),
            default: None,
            deprecated: false,
            const_value: None,
            wire_name: field_name.to_string(),
        })
        .collect();
    TypeDecl {
        id: StableId::new(id),
        name: name(id),
        docs: Docs::default(),
        kind: TypeKind::Struct {
            fields: struct_fields,
            additional: Additional::Forbidden,
            discriminator: None,
        },
        origin: None,
        tags: BTreeSet::new(),
    }
}

fn simple_service(tag: &str, op_id: &str, path: &str, response_ty: &str) -> Service {
    Service {
        id: StableId::new(tag),
        name: name(tag),
        docs: Docs::default(),
        server_set: None,
        operations: vec![Operation {
            id: StableId::new(op_id),
            name: name(op_id),
            docs: Docs::default(),
            deprecated: false,
            http: HttpShape {
                method: HttpMethod::Get,
                path_template: path.to_string(),
                segments: vec![],
                query: vec![],
                headers: vec![],
                cookies: vec![],
                path_params: vec![],
                body: None,
                consumes: vec![],
                produces: vec!["application/json".to_string()],
            },
            success: Some(Payload {
                status: StatusSpec::Code(200),
                ty: Some(named_ref(response_ty)),
                content_type: Some("application/json".to_string()),
                headers: vec![],
                docs: Docs::default(),
            }),
            alt_success: vec![],
            errors: ErrorUse::None,
            auth: vec![],
            pagination: None,
            idempotent: true,
            retryable_statuses: BTreeSet::new(),
        }],
    }
}

/// Two-tag IR: service "events" returns Event{id, shared: Meta}, service
/// "orders" returns Order{id, shared: Meta}. "Meta" is shared across both
/// tags, "Event" is events-only, "Order" is orders-only.
fn build_two_tag_ir() -> GenIr {
    let mut types = BTreeMap::new();
    let meta = simple_struct("Meta", &[("requestId", string_ref())]);
    let event = simple_struct(
        "Event",
        &[("id", string_ref()), ("meta", named_ref("Meta"))],
    );
    let order = simple_struct(
        "Order",
        &[("id", string_ref()), ("meta", named_ref("Meta"))],
    );
    types.insert(meta.id.clone(), meta);
    types.insert(event.id.clone(), event);
    types.insert(order.id.clone(), order);

    GenIr {
        api: ApiMeta {
            title: "Fixture API".to_string(),
            version: "1.2.3".to_string(),
            package_name: name("fixture-api"),
            docs: Docs::default(),
        },
        types,
        services: vec![
            simple_service("events", "GetEvent", "/events", "Event"),
            simple_service("orders", "GetOrder", "/orders", "Order"),
        ],
        auth_schemes: vec![],
        errors: vec![],
        server_sets: vec![],
    }
}

fn multi_crate_config() -> Config {
    let mut lang_options: BTreeMap<String, serde_json::Value> = BTreeMap::new();
    lang_options.insert(
        "rust-axum".to_string(),
        serde_json::json!({
            "layout": "multi-crate",
            "crate_name": "fixture-api-{tag}",
            "common_name": "fixture-api-common",
        }),
    );
    Config {
        service_style: codegen::ServiceStyle::PerService,
        include_docs: true,
        lang_options,
    }
}

#[test]
fn multi_crate_emits_one_dir_per_tag_plus_common() {
    let ir = build_two_tag_ir();
    let cfg = multi_crate_config();
    let vfs = RustAxumGenerator::new().generate(&ir, &cfg).unwrap();

    // Common crate.
    assert!(vfs.contains(Path::new("fixture-api-common/Cargo.toml")));
    assert!(vfs.contains(Path::new("fixture-api-common/src/lib.rs")));

    // `shared`/`multipart` live in the common crate only — nominal types
    // must match across tag crates, so tag crates cannot own their own
    // copies.
    assert!(vfs.contains(Path::new("fixture-api-common/src/shared.rs")));
    assert!(vfs.contains(Path::new("fixture-api-common/src/multipart.rs")));

    // Per-tag crates.
    for tag in ["events", "orders"] {
        let root = format!("fixture-api-{}", tag);
        assert!(
            vfs.contains(Path::new(&format!("{}/Cargo.toml", root))),
            "missing Cargo.toml for {}",
            root
        );
        assert!(vfs.contains(Path::new(&format!("{}/src/lib.rs", root))));
        assert!(vfs.contains(Path::new(&format!("{}/src/types.rs", root))));
        assert!(vfs.contains(Path::new(&format!("{}/src/services/{}.rs", root, tag))));
        assert!(vfs.contains(Path::new(&format!("{}/src/services/mod.rs", root))));
        // Tag crates MUST NOT contain their own `shared.rs` or `multipart.rs`
        // — otherwise types would be nominally distinct per tag.
        assert!(
            !vfs.contains(Path::new(&format!("{}/src/shared.rs", root))),
            "{} must not contain shared.rs (belongs in common)",
            root
        );
        assert!(
            !vfs.contains(Path::new(&format!("{}/src/multipart.rs", root))),
            "{} must not contain multipart.rs (belongs in common)",
            root
        );
    }

    // No single-crate root artifacts should leak.
    assert!(!vfs.contains(Path::new("Cargo.toml")));
    assert!(!vfs.contains(Path::new("src/lib.rs")));
    assert!(!vfs.contains(Path::new("src/types/mod.rs")));
}

#[test]
fn tag_cargo_toml_depends_on_common_crate() {
    let ir = build_two_tag_ir();
    let cfg = multi_crate_config();
    let vfs = RustAxumGenerator::new().generate(&ir, &cfg).unwrap();

    let cargo = read_text(&vfs, "fixture-api-events/Cargo.toml");
    assert!(cargo.contains("name = \"fixture-api-events\""));
    assert!(cargo.contains("version = \"1.2.3\""));
    assert!(cargo.contains("fixture-api-common = { path = \"../fixture-api-common\" }"));
    assert!(cargo.contains("axum ="));
    assert!(!cargo.contains("[features]"));

    let common_cargo = read_text(&vfs, "fixture-api-common/Cargo.toml");
    assert!(common_cargo.contains("name = \"fixture-api-common\""));
    // Common crate now owns shared.rs (RequestContext, auth extractors) and
    // multipart.rs, so it needs axum.
    assert!(common_cargo.contains("axum ="));
    assert!(!common_cargo.contains("[features]"));
}

#[test]
fn shared_types_land_in_common_and_cross_crate_imports_are_rewritten() {
    let ir = build_two_tag_ir();
    let cfg = multi_crate_config();
    let vfs = RustAxumGenerator::new().generate(&ir, &cfg).unwrap();

    let common_lib = read_text(&vfs, "fixture-api-common/src/lib.rs");
    assert!(
        common_lib.contains("pub struct Meta"),
        "expected Meta in common crate:\n{}",
        common_lib
    );
    // Features must not leak into the common crate.
    assert!(!common_lib.contains("#[cfg(feature"));
    assert!(!common_lib.contains("#[cfg(any(feature"));

    // Events crate should import Meta from the common crate, not from
    // `crate::types::`.
    let events_types = read_text(&vfs, "fixture-api-events/src/types.rs");
    assert!(events_types.contains("pub struct Event"));
    assert!(
        events_types.contains("fixture_api_common::Meta")
            || events_types.contains("use fixture_api_common::*;"),
        "expected cross-crate Meta reference in events types.rs:\n{}",
        events_types
    );
    assert!(!events_types.contains("crate::types::Meta"));

    // Event (tag-local) stays referenced via crate::types::Event in the
    // service module.
    let events_svc = read_text(&vfs, "fixture-api-events/src/services/events.rs");
    assert!(events_svc.contains("crate::types::Event"));
    assert!(!events_svc.contains("crate::types::Meta"));
}

#[test]
fn tag_service_imports_shared_from_common_crate() {
    let ir = build_two_tag_ir();
    let cfg = multi_crate_config();
    let vfs = RustAxumGenerator::new().generate(&ir, &cfg).unwrap();

    let events_svc = read_text(&vfs, "fixture-api-events/src/services/events.rs");
    // The import line must come from the common crate, not `crate::shared`.
    assert!(
        events_svc.contains("use fixture_api_common::{RequestContext"),
        "expected common-crate shared import in events service:\n{}",
        events_svc
    );
    assert!(
        !events_svc.contains("use crate::shared::"),
        "tag service must not import from crate::shared in multi-crate mode:\n{}",
        events_svc
    );
}

#[test]
fn common_lib_exposes_shared_and_multipart_modules() {
    let ir = build_two_tag_ir();
    let cfg = multi_crate_config();
    let vfs = RustAxumGenerator::new().generate(&ir, &cfg).unwrap();

    let common_lib = read_text(&vfs, "fixture-api-common/src/lib.rs");
    assert!(
        common_lib.contains("pub mod shared;"),
        "common lib.rs must declare shared module:\n{}",
        common_lib
    );
    assert!(
        common_lib.contains("pub use shared::*;"),
        "common lib.rs must re-export shared at crate root:\n{}",
        common_lib
    );
    assert!(
        common_lib.contains("pub mod multipart;"),
        "common lib.rs must declare multipart module:\n{}",
        common_lib
    );
}

#[test]
fn tag_cargo_toml_still_depends_on_common_crate_path() {
    // Guards against regressions in the path dependency when shared moved.
    let ir = build_two_tag_ir();
    let cfg = multi_crate_config();
    let vfs = RustAxumGenerator::new().generate(&ir, &cfg).unwrap();

    for tag in ["events", "orders"] {
        let cargo = read_text(&vfs, &format!("fixture-api-{}/Cargo.toml", tag));
        assert!(
            cargo.contains("fixture-api-common = { path = \"../fixture-api-common\" }"),
            "tag {} Cargo.toml missing common path dep:\n{}",
            tag,
            cargo
        );
    }
}

#[test]
fn single_crate_still_emits_src_shared_rs() {
    // Regression guard: single-crate behaviour must be unchanged.
    let ir = build_two_tag_ir();
    let cfg = Config {
        service_style: codegen::ServiceStyle::PerService,
        include_docs: true,
        lang_options: BTreeMap::new(),
    };
    let vfs = RustAxumGenerator::new().generate(&ir, &cfg).unwrap();

    assert!(vfs.contains(Path::new("src/shared.rs")));
    assert!(vfs.contains(Path::new("src/multipart.rs")));
    assert!(vfs.contains(Path::new("src/lib.rs")));

    let svc = read_text(&vfs, "src/services/events.rs");
    assert!(
        svc.contains("use crate::shared::{RequestContext"),
        "single-crate service must import from crate::shared:\n{}",
        svc
    );
}

fn read_text(vfs: &VirtualFS, path: &str) -> String {
    vfs.get_file_str(Path::new(path))
        .expect("file present")
        .expect("utf-8")
        .to_string()
}
