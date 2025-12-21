use crate::lint::{Finding, LintCtx, RuleId};

/// info.title must be present and non-empty
pub fn info_title_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if ctx.spec.info.title.trim().is_empty() {
        out.push(Finding::new(
            RuleId::InfoTitleRequired,
            "/info/title",
            "info.title must be present and non-empty",
        ));
    }
}

/// info.version must be present and non-empty
pub fn info_version_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if ctx.spec.info.version.trim().is_empty() {
        out.push(Finding::new(
            RuleId::InfoVersionRequired,
            "/info/version",
            "info.version must be present and non-empty",
        ));
    }
}

/// info.description should be present and meaningful
pub fn info_description_present(ctx: &LintCtx, out: &mut Vec<Finding>) {
    match &ctx.spec.info.description {
        None => {
            out.push(Finding::new(
                RuleId::InfoDescriptionPresent,
                "/info",
                "info.description should be present",
            ));
        }
        Some(desc) if desc.trim().is_empty() || desc.trim().len() < 10 => {
            out.push(Finding::new(
                RuleId::InfoDescriptionPresent,
                "/info/description",
                "info.description should be meaningful (at least 10 characters)",
            ));
        }
        _ => {}
    }
}

/// contact and license should be present for public APIs
pub fn info_contact_license_present(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if ctx.spec.info.contact.is_none() {
        out.push(Finding::new(
            RuleId::InfoContactLicensePresent,
            "/info",
            "info.contact should be present for public APIs",
        ));
    }
    if ctx.spec.info.license.is_none() {
        out.push(Finding::new(
            RuleId::InfoContactLicensePresent,
            "/info",
            "info.license should be present for public APIs",
        ));
    }
}

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_valid_info() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[
                RuleId::InfoTitleRequired.as_str(),
                RuleId::InfoVersionRequired.as_str(),
            ]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[
                RuleId::InfoTitleRequired.as_str(),
                RuleId::InfoVersionRequired.as_str(),
            ]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_empty_title() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: ""
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::InfoTitleRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::InfoTitleRequired);
        assert_eq!(
            validation.diagnostics[0].message,
            "info.title must be present and non-empty"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::InfoTitleRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "info.title must be present and non-empty"
        );
    }

    #[test]
    fn test_empty_version() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: My API
  version: ""
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::InfoVersionRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::InfoVersionRequired);
        assert_eq!(
            validation.diagnostics[0].message,
            "info.version must be present and non-empty"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::InfoVersionRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "info.version must be present and non-empty"
        );
    }

    #[test]
    fn test_description_present_with_good_description() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0
  description: This is a comprehensive API for managing resources
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::InfoDescriptionPresent.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::InfoDescriptionPresent.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_description_missing() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::InfoDescriptionPresent.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::InfoDescriptionPresent
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "info.description should be present"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::InfoDescriptionPresent.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "info.description should be present"
        );
    }

    #[test]
    fn test_description_too_short() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0
  description: "Short"
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::InfoDescriptionPresent.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::InfoDescriptionPresent
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "info.description should be meaningful (at least 10 characters)"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::InfoDescriptionPresent.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "info.description should be meaningful (at least 10 characters)"
        );
    }

    #[test]
    fn test_contact_license_missing() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::InfoContactLicensePresent.as_str()]),
        )
        .unwrap();

        // Should report both missing contact and license
        assert_eq!(validation.diagnostics.len(), 2);
        assert!(
            validation
                .diagnostics
                .iter()
                .all(|d| d.rule == RuleId::InfoContactLicensePresent)
        );
        assert!(
            validation
                .diagnostics
                .iter()
                .any(|d| d.message.contains("contact"))
        );
        assert!(
            validation
                .diagnostics
                .iter()
                .any(|d| d.message.contains("license"))
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::InfoContactLicensePresent.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 2);
    }

    #[test]
    fn test_contact_license_present() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0
  contact:
    name: API Support
    email: support@example.com
  license:
    name: MIT
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::InfoContactLicensePresent.as_str()]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::InfoContactLicensePresent.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }
}
