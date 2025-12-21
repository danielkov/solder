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
    use std::collections::BTreeMap;

    use super::*;
    use oas3::spec::{ObjectOrReference, Operation, Parameter, ParameterIn, PathItem};

    fn make_ctx_with_path_params(
        path: &str,
        params: Vec<(&str, Option<bool>)>,
    ) -> (oas3::Spec, crate::lint::Indexes, crate::model::SpanDb) {
        let mut spec = oas3::Spec {
            openapi: "3.1.0".to_string(),
            info: oas3::spec::Info {
                title: "".to_string(),
                version: "1.0.0".to_string(),
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

        let mut operation = Operation {
            operation_id: Some("testOp".to_string()),
            parameters: Vec::new(),
            ..Operation::default()
        };

        for (name, required) in params {
            let param = Parameter {
                name: name.to_string(),
                location: ParameterIn::Path,
                required,
                description: None,
                deprecated: None,
                allow_empty_value: None,
                style: None,
                explode: None,
                allow_reserved: None,
                schema: None,
                example: None,
                examples: BTreeMap::new(),
                content: None,
                extensions: BTreeMap::new(),
            };
            operation.parameters.push(ObjectOrReference::Object(param));
        }

        let path_item = PathItem {
            get: Some(operation),
            ..PathItem::default()
        };
        spec.paths
            .as_mut()
            .unwrap()
            .insert(path.to_string(), path_item);

        let indexes = crate::lint::Indexes::build(&spec);
        let span_db = crate::model::SpanDb::new();
        (spec, indexes, span_db)
    }

    #[test]
    fn test_declared_params() {
        let (spec, indexes, span_db) =
            make_ctx_with_path_params("/pets/{petId}", vec![("petId", Some(true))]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        path_params_declared(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_undeclared_params() {
        let (spec, indexes, span_db) = make_ctx_with_path_params("/pets/{petId}", vec![]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        path_params_declared(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::PathParamsDeclared);
    }

    #[test]
    fn test_required_true() {
        let (spec, indexes, span_db) =
            make_ctx_with_path_params("/pets/{petId}", vec![("petId", Some(true))]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        path_params_required(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_required_false() {
        let (spec, indexes, span_db) =
            make_ctx_with_path_params("/pets/{petId}", vec![("petId", Some(false))]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        path_params_required(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::PathParamsRequired);
    }

    #[test]
    fn test_required_missing() {
        let (spec, indexes, span_db) =
            make_ctx_with_path_params("/pets/{petId}", vec![("petId", None)]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        path_params_required(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::PathParamsRequired);
    }
}
