use oas3::spec::ObjectOrReference;

use crate::{
    lint::{Finding, LintCtx, RuleId, Severity},
    model::escape_pointer_segment,
};

/// Operations must have at least one response
pub fn responses_exist(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if !op.has_responses {
            out.push(Finding::new(
                RuleId::ResponsesExist,
                format!("{}/responses", op.ptr_base),
                format!(
                    "Operation {} {} must have at least one response",
                    op.method.to_uppercase(),
                    op.path
                ),
            ));
        }
    }
}

/// Operations should have a 2xx response
pub fn responses_have_2xx(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if op.has_responses && !op.has_2xx_response {
            out.push(
                Finding::new(
                    RuleId::ResponsesHave2xx,
                    format!("{}/responses", op.ptr_base),
                    format!(
                        "Operation {} {} should have a 2xx success response",
                        op.method.to_uppercase(),
                        op.path
                    ),
                )
                .with_severity(Severity::Warning),
            );
        }
    }
}

/// Every response must have a description
pub fn response_description_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(responses) = &operation.responses {
                for (status_code, response) in responses {
                    if let ObjectOrReference::Object(resp) = response
                        && resp
                            .description
                            .as_ref()
                            .is_none_or(|d| d.trim().is_empty())
                    {
                        out.push(Finding::new(
                            RuleId::ResponseDescriptionRequired,
                            format!("{}/responses/{}/description", op_ptr, status_code),
                            format!(
                                "Response {} for {} {} must have a description",
                                status_code,
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

/// Success responses must define schemas for bodies (when content exists)
pub fn response_schema_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(responses) = &operation.responses {
                for (status_code, response) in responses {
                    // Only check 2xx responses
                    if !status_code.starts_with('2') && status_code != "default" {
                        continue;
                    }

                    if let ObjectOrReference::Object(resp) = response {
                        for (media_type_name, media_type) in &resp.content {
                            if media_type.schema.is_none() {
                                out.push(Finding::new(
                                    RuleId::ResponseSchemaRequired,
                                    format!(
                                        "{}/responses/{}/content/{}",
                                        op_ptr,
                                        status_code,
                                        escape_pointer_segment(media_type_name)
                                    ),
                                    format!(
                                        "Response {} media type '{}' must define a schema",
                                        status_code, media_type_name
                                    ),
                                ));
                            }
                        }
                    }
                }
            }
        }
    }
}

/// 204 responses should not have body content
pub fn response_204_no_body(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(responses) = &operation.responses
                && let Some(ObjectOrReference::Object(resp)) = responses.get("204")
                && !resp.content.is_empty()
            {
                out.push(Finding::new(
                    RuleId::Response204NoBody,
                    format!("{}/responses/204/content", op_ptr),
                    format!(
                        "204 No Content response for {} {} should not have body content",
                        method.to_uppercase(),
                        path
                    ),
                ));
            }
        }
    }
}

/// Standard error model should be consistent (check error responses have similar structure)
pub fn response_error_model_consistent(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    // This is a simplified check - we just ensure error responses have content defined
    // A more sophisticated check would compare schema structures
    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            if let Some(responses) = &operation.responses {
                for (status_code, response) in responses {
                    // Check 4xx and 5xx responses
                    if !status_code.starts_with('4') && !status_code.starts_with('5') {
                        continue;
                    }

                    if let ObjectOrReference::Object(resp) = response {
                        // Error responses should have content defined
                        if resp.content.is_empty() {
                            out.push(
                                Finding::new(
                                    RuleId::ResponseErrorModelConsistent,
                                    format!("{}/responses/{}", op_ptr, status_code),
                                    format!(
                                        "Error response {} for {} {} should define a response body with consistent error model",
                                        status_code,
                                        method.to_uppercase(),
                                        path
                                    ),
                                )
                                .with_severity(Severity::Warning),
                            );
                        }
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
    fn test_has_responses() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ResponsesExist.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ResponsesExist.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_no_responses() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      responses: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ResponsesExist.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ResponsesExist);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets must have at least one response"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ResponsesExist.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets must have at least one response"
        );
    }

    #[test]
    fn test_has_2xx() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
        '400':
          description: Bad Request
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ResponsesHave2xx.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ResponsesHave2xx.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_no_2xx() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      responses:
        '400':
          description: Bad Request
        '500':
          description: Server Error
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ResponsesHave2xx.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ResponsesHave2xx);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets should have a 2xx success response"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ResponsesHave2xx.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets should have a 2xx success response"
        );
    }

    #[test]
    fn test_default_counts_as_2xx() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      responses:
        default:
          description: Default response
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ResponsesHave2xx.as_str()]),
        )
        .unwrap();

        // default counts as success
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ResponsesHave2xx.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }
}
