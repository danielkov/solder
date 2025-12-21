use oas3::spec::{ObjectOrReference, ObjectSchema};
use rustc_hash::FxHashSet;

use crate::{
    lint::{Finding, LintCtx, RuleId, Severity},
    model::escape_pointer_segment,
};

/// Reuse shared schemas via components/schemas (warn about complex inline schemas)
pub fn component_reuse_schemas(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            // Check request body for complex inline schemas
            if let Some(ObjectOrReference::Object(rb)) = &operation.request_body {
                for (media_type_name, media_type) in &rb.content {
                    if let Some(ObjectOrReference::Object(schema)) = &media_type.schema
                        && is_complex_schema(schema)
                    {
                        out.push(Finding::new(
                                    RuleId::ComponentReuseSchemas,
                                    format!(
                                        "{}/requestBody/content/{}/schema",
                                        op_ptr,
                                        escape_pointer_segment(media_type_name)
                                    ),
                                    "Complex inline schema in request body should be moved to components/schemas",
                                ));
                    }
                }
            }

            // Check responses for complex inline schemas
            if let Some(responses) = &operation.responses {
                for (status_code, response) in responses {
                    if let ObjectOrReference::Object(resp) = response {
                        for (media_type_name, media_type) in &resp.content {
                            if let Some(ObjectOrReference::Object(schema)) = &media_type.schema
                                && is_complex_schema(schema)
                            {
                                out.push(Finding::new(
                                        RuleId::ComponentReuseSchemas,
                                        format!(
                                            "{}/responses/{}/content/{}/schema",
                                            op_ptr,
                                            status_code,
                                            escape_pointer_segment(media_type_name)
                                        ),
                                        "Complex inline schema in response should be moved to components/schemas",
                                    ));
                            }
                        }
                    }
                }
            }
        }
    }
}

/// No unused components
pub fn component_no_unused(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(components) = &ctx.spec.components else {
        return;
    };

    // Collect all $ref references in the spec
    let used_refs = collect_all_refs(ctx);

    // Check for unused schemas
    for name in components.schemas.keys() {
        let ref_path = format!("#/components/schemas/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/schemas/{}", name),
                    format!("Schema '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }

    // Check for unused parameters
    for name in components.parameters.keys() {
        let ref_path = format!("#/components/parameters/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/parameters/{}", name),
                    format!("Parameter '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }

    // Check for unused responses
    for name in components.responses.keys() {
        let ref_path = format!("#/components/responses/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/responses/{}", name),
                    format!("Response '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }

    // Check for unused request bodies
    for name in components.request_bodies.keys() {
        let ref_path = format!("#/components/requestBodies/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/requestBodies/{}", name),
                    format!("RequestBody '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }
}

/// Check if a schema is complex enough to warrant moving to components
fn is_complex_schema(schema: &ObjectSchema) -> bool {
    // Consider complex if:
    // - Has more than 3 properties
    // - Has nested objects
    // - Uses composition (allOf, oneOf, anyOf)

    let property_count = schema.properties.len();
    let uses_composition =
        !schema.all_of.is_empty() || !schema.one_of.is_empty() || !schema.any_of.is_empty();

    property_count > 3 || uses_composition
}

/// Collect all $ref paths used in the specification
fn collect_all_refs(ctx: &LintCtx) -> FxHashSet<String> {
    let mut refs = FxHashSet::default();

    // Walk through the source text looking for $ref patterns
    // This is a simple string-based approach that works without serde_json
    let source = ctx.source;
    let mut pos = 0;
    while let Some(idx) = source[pos..].find("$ref") {
        let start = pos + idx;
        // Find the value after "$ref": "..."
        if let Some(quote_start) = source[start..].find('"') {
            let value_start = start + quote_start + 1;
            if let Some(quote_end) = source[value_start..].find('"') {
                let ref_value = &source[value_start..value_start + quote_end];
                if ref_value.starts_with('#') {
                    refs.insert(ref_value.to_string());
                }
                pos = value_start + quote_end;
                continue;
            }
        }
        pos = start + 4;
    }

    refs
}

fn iter_operations(
    path_item: &oas3::spec::PathItem,
) -> impl Iterator<Item = (&'static str, &oas3::spec::Operation)> {
    let methods: [(&'static str, Option<&oas3::spec::Operation>); 8] = [
        ("get", path_item.get.as_ref()),
        ("put", path_item.put.as_ref()),
        ("post", path_item.post.as_ref()),
        ("delete", path_item.delete.as_ref()),
        ("options", path_item.options.as_ref()),
        ("head", path_item.head.as_ref()),
        ("patch", path_item.patch.as_ref()),
        ("trace", path_item.trace.as_ref()),
    ];

    methods
        .into_iter()
        .filter_map(|(method, op)| op.map(|o| (method, o)))
}
