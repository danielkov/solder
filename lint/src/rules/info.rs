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
    use std::collections::BTreeMap;

    use super::*;

    fn make_ctx_with_info(
        title: &str,
        version: &str,
    ) -> (oas3::Spec, crate::lint::Indexes, crate::model::SpanDb) {
        let spec = oas3::Spec {
            openapi: "3.1.0".to_string(),
            info: oas3::spec::Info {
                title: title.to_string(),
                version: version.to_string(),
                summary: None,
                description: None,
                terms_of_service: None,
                contact: None,
                license: None,
                extensions: BTreeMap::new(),
            },
            paths: Some(BTreeMap::new()),
            components: None,
            tags: Vec::new(),
            external_docs: None,
            servers: Vec::new(),
            webhooks: BTreeMap::new(),
            extensions: BTreeMap::new(),
            security: Vec::new(),
        };
        let indexes = crate::lint::Indexes::build(&spec);
        let span_db = crate::model::SpanDb::new();
        (spec, indexes, span_db)
    }

    #[test]
    fn test_valid_info() {
        let (spec, indexes, span_db) = make_ctx_with_info("My API", "1.0.0");
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        info_title_required(&ctx, &mut findings);
        info_version_required(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_empty_title() {
        let (spec, indexes, span_db) = make_ctx_with_info("", "1.0.0");
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        info_title_required(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::InfoTitleRequired);
    }

    #[test]
    fn test_empty_version() {
        let (spec, indexes, span_db) = make_ctx_with_info("My API", "");
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        info_version_required(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::InfoVersionRequired);
    }
}
