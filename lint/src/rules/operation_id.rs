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
    use std::collections::BTreeMap;

    use super::*;
    use oas3::spec::Operation;

    fn make_ctx_with_ops(
        ops: Vec<(&str, &str, Option<&str>)>,
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

        for (path, method, op_id) in ops {
            let operation = Operation {
                operation_id: op_id.map(String::from),
                ..Operation::default()
            };

            let path_item = spec
                .paths
                .as_mut()
                .unwrap()
                .entry(path.to_string())
                .or_default();
            match method {
                "get" => path_item.get = Some(operation),
                "post" => path_item.post = Some(operation),
                "put" => path_item.put = Some(operation),
                "delete" => path_item.delete = Some(operation),
                _ => {}
            }
        }

        let indexes = crate::lint::Indexes::build(&spec);
        let span_db = crate::model::SpanDb::new();
        (spec, indexes, span_db)
    }

    #[test]
    fn test_all_have_operation_id() {
        let (spec, indexes, span_db) = make_ctx_with_ops(vec![
            ("/pets", "get", Some("listPets")),
            ("/pets", "post", Some("createPet")),
        ]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        operation_id_required(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_missing_operation_id() {
        let (spec, indexes, span_db) = make_ctx_with_ops(vec![
            ("/pets", "get", Some("listPets")),
            ("/pets", "post", None),
        ]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        operation_id_required(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::OperationIdRequired);
    }

    #[test]
    fn test_unique_operation_ids() {
        let (spec, indexes, span_db) = make_ctx_with_ops(vec![
            ("/pets", "get", Some("listPets")),
            ("/pets", "post", Some("createPet")),
        ]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        operation_id_unique(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_duplicate_operation_ids() {
        let (spec, indexes, span_db) = make_ctx_with_ops(vec![
            ("/pets", "get", Some("listPets")),
            ("/users", "get", Some("listPets")),
        ]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        operation_id_unique(&ctx, &mut findings);
        assert_eq!(findings.len(), 2); // One for each location
        assert!(findings.iter().all(|f| f.rule == RuleId::OperationIdUnique));
    }
}
