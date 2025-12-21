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
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_all_tags_declared() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
tags:
  - name: pets
  - name: users
paths:
  /pets:
    get:
      operationId: listPets
      tags:
        - pets
      responses:
        '200':
          description: Success
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()])).unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation =
            lint_with_ruleset(&json, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()]))
                .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_undeclared_tag() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
tags:
  - name: pets
paths:
  /orders:
    get:
      operationId: listOrders
      tags:
        - orders
      responses:
        '200':
          description: Success
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()])).unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::TagsDeclared);
        assert_eq!(
            validation.diagnostics[0].message,
            "Tag 'orders' is used but not declared in top-level tags"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation =
            lint_with_ruleset(&json, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()]))
                .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Tag 'orders' is used but not declared in top-level tags"
        );
    }

    #[test]
    fn test_multiple_undeclared_tags() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
tags:
  - name: pets
paths:
  /orders:
    get:
      operationId: listOrders
      tags:
        - orders
        - shipping
      responses:
        '200':
          description: Success
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()])).unwrap();

        // Should report both undeclared tags
        assert_eq!(validation.diagnostics.len(), 2);
        assert!(
            validation
                .diagnostics
                .iter()
                .all(|d| d.rule == RuleId::TagsDeclared)
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation =
            lint_with_ruleset(&json, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()]))
                .unwrap();
        assert_eq!(validation.diagnostics.len(), 2);
    }

    #[test]
    fn test_no_tags_used() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
tags:
  - name: pets
  - name: users
paths:
  /pets:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()])).unwrap();

        // Operations without tags is okay
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation =
            lint_with_ruleset(&json, RuleSet::from_slice(&[RuleId::TagsDeclared.as_str()]))
                .unwrap();
        assert!(validation.diagnostics.is_empty());
    }
}
