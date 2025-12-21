use crate::lint::{Finding, FixPlan, LintCtx, RuleId, TextEdit};

/// Path template params must be declared as parameters
pub fn path_params_declared(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        // Get template params for this path
        if let Some(template_params) = ctx.indexes.path_template_params.get(&op.path) {
            // Get declared path params for this operation
            let declared: std::collections::HashSet<_> =
                op.path_params.iter().map(|p| p.name.as_str()).collect();

            // Check each template param is declared
            for template_param in template_params {
                if !declared.contains(template_param.as_str()) {
                    out.push(Finding::new(
                        RuleId::PathParamsDeclared,
                        format!("{}/parameters", op.ptr_base),
                        format!(
                            "Path parameter '{{{}}}' in {} is not declared in parameters",
                            template_param, op.path
                        ),
                    ));
                }
            }
        }
    }
}

/// Path params must have required: true
pub fn path_params_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        for param in &op.path_params {
            match param.required {
                Some(false) => {
                    // Explicit required: false - this is fixable
                    let ptr = format!("{}/required", param.ptr);

                    // Try to create a fix if we can find the span
                    let fix = if let Some((span, _)) = ctx.span_db.resolve_value_span(&ptr) {
                        Some(FixPlan {
                            description: "Change required to true".to_string(),
                            edits: vec![TextEdit {
                                start_byte: span.start,
                                end_byte: span.end,
                                replacement: "true".to_string(),
                            }],
                        })
                    } else {
                        None
                    };

                    let mut finding = Finding::new(
                        RuleId::PathParamsRequired,
                        ptr,
                        format!("Path parameter '{}' must have required: true", param.name),
                    );

                    if let Some(f) = fix {
                        finding = finding.with_fix(f);
                    }

                    out.push(finding);
                }
                None => {
                    // Missing required field - not auto-fixable without insertion
                    out.push(Finding::new(
                        RuleId::PathParamsRequired,
                        param.ptr.clone(),
                        format!("Path parameter '{}' is missing required: true", param.name),
                    ));
                }
                Some(true) => {
                    // Correct - no finding
                }
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
    fn test_declared_params() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{petId}:
    get:
      operationId: getPet
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathParamsDeclared.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathParamsDeclared.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_undeclared_params() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{petId}:
    get:
      operationId: getPet
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathParamsDeclared.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathParamsDeclared);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter '{petId}' in /pets/{petId} is not declared in parameters"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathParamsDeclared.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter '{petId}' in /pets/{petId} is not declared in parameters"
        );
    }

    #[test]
    fn test_required_true() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{petId}:
    get:
      operationId: getPet
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathParamsRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathParamsRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_required_false() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{petId}:
    get:
      operationId: getPet
      parameters:
        - name: petId
          in: path
          required: false
          schema:
            type: string
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathParamsRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathParamsRequired);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter 'petId' must have required: true"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathParamsRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter 'petId' must have required: true"
        );
    }

    #[test]
    fn test_required_missing() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{petId}:
    get:
      operationId: getPet
      parameters:
        - name: petId
          in: path
          schema:
            type: string
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathParamsRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathParamsRequired);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter 'petId' is missing required: true"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathParamsRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter 'petId' is missing required: true"
        );
    }
}
