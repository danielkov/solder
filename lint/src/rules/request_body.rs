use oas3::spec::ObjectOrReference;

use crate::{
    lint::{Finding, LintCtx, RuleId},
    model::escape_pointer_segment,
};

/// requestBody must define content with at least one media type
pub fn request_body_content_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(ref request_body) = operation.request_body {
                match request_body {
                    ObjectOrReference::Object(rb) => {
                        if rb.content.is_empty() {
                            out.push(Finding::new(
                                RuleId::RequestBodyContentRequired,
                                format!("{}/requestBody/content", op_ptr),
                                format!(
                                    "Request body for {} {} must define at least one media type",
                                    method.to_uppercase(),
                                    path
                                ),
                            ));
                        }
                    }
                    ObjectOrReference::Ref { .. } => {
                        // Reference - skip, will be checked at definition
                    }
                }
            }
        }
    }
}

/// JSON bodies should use application/json (or application/*+json)
pub fn request_body_json_media_type(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(ObjectOrReference::Object(rb)) = &operation.request_body {
                for media_type in rb.content.keys() {
                    // Check for non-standard JSON media types
                    let mt = media_type.to_lowercase();
                    if mt.contains("json") && mt != "application/json" && !mt.ends_with("+json") {
                        out.push(Finding::new(
                            RuleId::RequestBodyJsonMediaType,
                            format!("{}/requestBody/content/{}", op_ptr, media_type),
                            format!(
                                "Media type '{}' should be 'application/json' or 'application/*+json'",
                                media_type
                            ),
                        ));
                    }
                }
            }
        }
    }
}

/// Each media type must provide a schema
pub fn request_body_schema_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(ObjectOrReference::Object(rb)) = &operation.request_body {
                for (media_type_name, media_type) in &rb.content {
                    if media_type.schema.is_none() {
                        out.push(Finding::new(
                            RuleId::RequestBodySchemaRequired,
                            format!(
                                "{}/requestBody/content/{}",
                                op_ptr,
                                escape_pointer_segment(media_type_name)
                            ),
                            format!(
                                "Request body media type '{}' for {} {} must define a schema",
                                media_type_name,
                                method.to_uppercase(),
                                path
                            ),
                        ));
                    }
                }
            }
        }
    }
}

/// Request bodies should have examples
pub fn request_body_examples_present(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(ObjectOrReference::Object(rb)) = &operation.request_body {
                for (media_type_name, media_type) in &rb.content {
                    // Check if examples exist (MediaType has examples field)
                    let has_example = media_type.examples.is_some();

                    if !has_example {
                        out.push(Finding::new(
                            RuleId::RequestBodyExamplesPresent,
                            format!(
                                "{}/requestBody/content/{}",
                                op_ptr,
                                escape_pointer_segment(media_type_name)
                            ),
                            format!(
                                "Request body media type '{}' should have example(s)",
                                media_type_name
                            ),
                        ));
                    }
                }
            }
        }
    }
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
