use crate::{
    lint::{Finding, LintCtx, RuleId},
    model::escape_pointer_segment,
};

/// operationId must exist for all operations
pub fn operation_id_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if op.operation_id.is_none() {
            out.push(Finding::new(
                RuleId::OperationIdRequired,
                format!("{}/operationId", op.ptr_base),
                format!(
                    "Operation {} {} is missing operationId",
                    op.method.to_uppercase(),
                    op.path
                ),
            ));
        }
    }
}

/// operationId must be unique across all operations
pub fn operation_id_unique(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for (op_id, locations) in &ctx.indexes.operation_ids {
        if locations.len() > 1 {
            let loc_strs: Vec<String> = locations
                .iter()
                .map(|(path, method)| format!("{} {}", method.to_uppercase(), path))
                .collect();

            for (path, method) in locations {
                let ptr = format!(
                    "/paths/{}/{}/operationId",
                    escape_pointer_segment(path),
                    method
                );
                out.push(Finding::new(
                    RuleId::OperationIdUnique,
                    ptr,
                    format!(
                        "Duplicate operationId '{}' found in: {}",
                        op_id,
                        loc_strs.join(", ")
                    ),
                ));
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_all_have_operation_id() {
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
    post:
      operationId: createPet
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationIdRequired.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationIdRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_missing_operation_id() {
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
    post:
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationIdRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::OperationIdRequired);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation POST /pets is missing operationId"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationIdRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation POST /pets is missing operationId"
        );
    }

    #[test]
    fn test_unique_operation_ids() {
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
    post:
      operationId: createPet
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationIdUnique.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationIdUnique.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_duplicate_operation_ids() {
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
  /users:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OperationIdUnique.as_str()]),
        )
        .unwrap();

        // One diagnostic for each location (2 total)
        assert_eq!(validation.diagnostics.len(), 2);
        assert!(
            validation
                .diagnostics
                .iter()
                .all(|d| d.rule == RuleId::OperationIdUnique)
        );
        assert!(
            validation.diagnostics[0]
                .message
                .contains("Duplicate operationId 'listPets'")
        );
        assert!(validation.diagnostics[0].message.contains("GET /pets"));
        assert!(validation.diagnostics[0].message.contains("GET /users"));

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OperationIdUnique.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 2);
    }
}
