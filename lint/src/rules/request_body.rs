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

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_request_body_with_valid_content() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: object
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodyContentRequired.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodyContentRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_request_body_empty_content() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content: {}
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodyContentRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::RequestBodyContentRequired
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Request body for POST /pets must define at least one media type"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodyContentRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Request body for POST /pets must define at least one media type"
        );
    }

    #[test]
    fn test_json_media_type_standard() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: object
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodyJsonMediaType.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodyJsonMediaType.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_json_media_type_non_standard() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          text/json:
            schema:
              type: object
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodyJsonMediaType.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::RequestBodyJsonMediaType
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Media type 'text/json' should be 'application/json' or 'application/*+json'"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodyJsonMediaType.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Media type 'text/json' should be 'application/json' or 'application/*+json'"
        );
    }

    #[test]
    fn test_schema_required_present() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodySchemaRequired.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodySchemaRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_schema_required_missing() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json: {}
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodySchemaRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::RequestBodySchemaRequired
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Request body media type 'application/json' for POST /pets must define a schema"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodySchemaRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Request body media type 'application/json' for POST /pets must define a schema"
        );
    }

    #[test]
    fn test_examples_present() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: object
            examples:
              cat:
                value:
                  name: Fluffy
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodyExamplesPresent.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodyExamplesPresent.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_examples_missing() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: object
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::RequestBodyExamplesPresent.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::RequestBodyExamplesPresent
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Request body media type 'application/json' should have example(s)"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::RequestBodyExamplesPresent.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Request body media type 'application/json' should have example(s)"
        );
    }
}
