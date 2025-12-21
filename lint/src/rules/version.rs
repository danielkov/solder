use crate::lint::{Finding, LintCtx, RuleId};

/// OpenAPI version must be 3.1.x
pub fn openapi_version_31(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let version = &ctx.spec.openapi;

    if !version.starts_with("3.1") {
        out.push(Finding::new(
            RuleId::OpenApiVersion31,
            "/openapi",
            format!("OpenAPI version must be 3.1.x, found '{}'", version),
        ));
    }
}

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_valid_version_310() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_valid_version_311() {
        let yaml = r#"
openapi: 3.1.1
info:
  title: Test API
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_invalid_version_30() {
        let yaml = r#"
openapi: 3.0.3
info:
  title: Test API
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::OpenApiVersion31);
        assert_eq!(
            validation.diagnostics[0].message,
            "OpenAPI version must be 3.1.x, found '3.0.3'"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "OpenAPI version must be 3.1.x, found '3.0.3'"
        );
    }

    #[test]
    fn test_invalid_version_20() {
        let yaml = r#"
openapi: 2.0
info:
  title: Test API
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::OpenApiVersion31);
        assert_eq!(
            validation.diagnostics[0].message,
            "OpenAPI version must be 3.1.x, found '2.0'"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::OpenApiVersion31.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "OpenAPI version must be 3.1.x, found '2.0'"
        );
    }
}
