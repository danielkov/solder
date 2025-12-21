use crate::lint::{Finding, LintCtx, RuleId};

/// Tags used by operations should be declared at top level
pub fn tags_declared(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for tag in &ctx.indexes.used_tags {
        if !ctx.indexes.declared_tags.contains(tag) {
            // Find the first operation using this tag to point to
            for op in &ctx.indexes.ops {
                if op.tags.contains(tag) {
                    out.push(Finding::new(
                        RuleId::TagsDeclared,
                        format!("{}/tags", op.ptr_base),
                        format!("Tag '{}' is used but not declared in top-level tags", tag),
                    ));
                    break; // Only report once per undeclared tag
                }
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use oas3::spec::{Operation, PathItem, Tag};
    use std::collections::BTreeMap;

    fn make_tag(name: &str) -> Tag {
        Tag {
            name: name.to_string(),
            description: None,
            extensions: BTreeMap::new(),
        }
    }

    fn make_ctx_with_tags(
        declared: Vec<&str>,
        used: Vec<&str>,
    ) -> (oas3::Spec, crate::lint::Indexes, crate::model::SpanDb) {
        let tags: Vec<Tag> = declared.iter().map(|t| make_tag(t)).collect();

        let operation = Operation {
            operation_id: Some("testOp".to_string()),
            tags: used.into_iter().map(String::from).collect(),
            ..Operation::default()
        };

        let path_item = PathItem {
            get: Some(operation),
            ..PathItem::default()
        };

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
            tags,
            external_docs: None,
            servers: Vec::new(),
            webhooks: BTreeMap::new(),
            extensions: BTreeMap::new(),
            security: Vec::new(),
        };
        spec.paths
            .as_mut()
            .unwrap()
            .insert("/test".to_string(), path_item);

        let indexes = crate::lint::Indexes::build(&spec);
        let span_db = crate::model::SpanDb::new();
        (spec, indexes, span_db)
    }

    #[test]
    fn test_all_tags_declared() {
        let (spec, indexes, span_db) = make_ctx_with_tags(vec!["pets", "users"], vec!["pets"]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        tags_declared(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_undeclared_tag() {
        let (spec, indexes, span_db) = make_ctx_with_tags(vec!["pets"], vec!["pets", "orders"]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        tags_declared(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::TagsDeclared);
        assert!(findings[0].message.contains("orders"));
    }
}
