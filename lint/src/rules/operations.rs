use crate::lint::{Finding, LintCtx, RuleId};

/// Operations should have summary
pub fn operation_summary_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if let Some(operation) = get_operation(ctx, &op.path, op.method)
            && operation
                .summary
                .as_ref()
                .is_none_or(|s| s.trim().is_empty())
        {
            out.push(Finding::new(
                RuleId::OperationSummaryRequired,
                format!("{}/summary", op.ptr_base),
                format!(
                    "Operation {} {} should have a summary",
                    op.method.to_uppercase(),
                    op.path
                ),
            ));
        }
    }
}

/// GET/DELETE should not define a request body
pub fn operation_method_semantics(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if let Some(operation) = get_operation(ctx, &op.path, op.method) {
            // GET and DELETE should not have request body
            if (op.method == "get" || op.method == "delete") && operation.request_body.is_some() {
                out.push(Finding::new(
                    RuleId::OperationMethodSemantics,
                    format!("{}/requestBody", op.ptr_base),
                    format!(
                        "{} {} should not define a request body; {} requests should be idempotent",
                        op.method.to_uppercase(),
                        op.path,
                        op.method.to_uppercase()
                    ),
                ));
            }
        }
    }
}

/// deprecated: true must include replacement note in description
pub fn operation_deprecated_note(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if let Some(operation) = get_operation(ctx, &op.path, op.method)
            && operation.deprecated.unwrap_or(false)
        {
            // Check if description mentions alternatives
            let desc = operation.description.as_deref().unwrap_or("");
            let has_replacement_note = desc.to_lowercase().contains("deprecated")
                || desc.to_lowercase().contains("use ")
                || desc.to_lowercase().contains("replaced")
                || desc.to_lowercase().contains("instead")
                || desc.to_lowercase().contains("alternative");

            if !has_replacement_note {
                out.push(Finding::new(
                    RuleId::OperationDeprecatedNote,
                    format!("{}/deprecated", op.ptr_base),
                    format!(
                        "Deprecated operation {} {} should document the replacement in description",
                        op.method.to_uppercase(),
                        op.path
                    ),
                ));
            }
        }
    }
}

/// Helper to get an operation from the spec
fn get_operation<'a>(
    ctx: &'a LintCtx,
    path: &str,
    method: &str,
) -> Option<&'a oas3::spec::Operation> {
    let paths = ctx.spec.paths.as_ref()?;
    let path_item = paths.get(path)?;

    match method {
        "get" => path_item.get.as_ref(),
        "put" => path_item.put.as_ref(),
        "post" => path_item.post.as_ref(),
        "delete" => path_item.delete.as_ref(),
        "options" => path_item.options.as_ref(),
        "head" => path_item.head.as_ref(),
        "patch" => path_item.patch.as_ref(),
        "trace" => path_item.trace.as_ref(),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_operation_summary_required_present() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      summary: List pets
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationSummaryRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationSummaryRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_operation_summary_required_missing() {
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
            RuleSet::from_slice(&[RuleId::OperationSummaryRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::OperationSummaryRequired
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets should have a summary"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationSummaryRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets should have a summary"
        );
    }

    #[test]
    fn test_operation_method_semantics_get_no_body() {
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
            RuleSet::from_slice(&[RuleId::OperationMethodSemantics.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationMethodSemantics.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_operation_method_semantics_get_with_body() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      requestBody:
        content:
          application/json:
            schema:
              type: object
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationMethodSemantics.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::OperationMethodSemantics
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "GET /pets should not define a request body; GET requests should be idempotent"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationMethodSemantics.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "GET /pets should not define a request body; GET requests should be idempotent"
        );
    }

    #[test]
    fn test_operation_method_semantics_delete_with_body() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{id}:
    delete:
      operationId: deletePet
      requestBody:
        content:
          application/json:
            schema:
              type: object
      responses:
        '204':
          description: Deleted
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationMethodSemantics.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::OperationMethodSemantics
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "DELETE /pets/{id} should not define a request body; DELETE requests should be idempotent"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationMethodSemantics.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "DELETE /pets/{id} should not define a request body; DELETE requests should be idempotent"
        );
    }

    #[test]
    fn test_operation_deprecated_note_present() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      deprecated: true
      description: "Deprecated: Use /animals instead"
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationDeprecatedNote.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationDeprecatedNote.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_operation_deprecated_note_missing() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      deprecated: true
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationDeprecatedNote.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::OperationDeprecatedNote
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Deprecated operation GET /pets should document the replacement in description"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationDeprecatedNote.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Deprecated operation GET /pets should document the replacement in description"
        );
    }
}
