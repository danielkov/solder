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
    use super::*;
    use std::collections::BTreeMap;

    fn make_ctx_with_version(
        version: &str,
    ) -> (oas3::Spec, crate::lint::Indexes, crate::model::SpanDb) {
        let spec = oas3::Spec {
            openapi: version.to_string(),
            info: oas3::spec::Info {
                title: "Test".to_string(),
                version: "1.0".to_string(),
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
    fn test_valid_version() {
        let (spec, indexes, span_db) = make_ctx_with_version("3.1.0");
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");
        let mut findings = Vec::new();
        openapi_version_31(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_invalid_version() {
        let (spec, indexes, span_db) = make_ctx_with_version("3.0.3");
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");
        let mut findings = Vec::new();
        openapi_version_31(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::OpenApiVersion31);
    }
}
