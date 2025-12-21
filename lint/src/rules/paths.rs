use rustc_hash::FxHashSet;

use crate::{
    lint::{Finding, LintCtx, RuleId},
    model::escape_pointer_segment,
};

/// paths must not be empty
pub fn paths_not_empty(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let is_empty = ctx.spec.paths.as_ref().is_none_or(|paths| paths.is_empty());
    if is_empty {
        out.push(Finding::new(
            RuleId::PathsNotEmpty,
            "/paths",
            "paths must not be empty",
        ));
    }
}

/// No unused path parameters (declared but not in template)
pub fn path_params_unused(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        // Get template params for this path
        let template_params: FxHashSet<&str> = ctx
            .indexes
            .path_template_params
            .get(&op.path)
            .map(|set| set.iter().map(|s| s.as_str()).collect())
            .unwrap_or_default();

        // Check each declared path param exists in template
        for param in &op.path_params {
            if !template_params.contains(param.name.as_str()) {
                out.push(Finding::new(
                    RuleId::PathParamsUnused,
                    param.ptr.clone(),
                    format!(
                        "Path parameter '{}' is declared but not used in path template '{}'",
                        param.name, op.path
                    ),
                ));
            }
        }
    }
}

/// No ambiguous or duplicate path templating
pub fn path_templating_ambiguous(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    // Normalize paths by replacing template params with a placeholder
    let mut normalized_paths: Vec<(String, &str)> = Vec::new();

    for path in paths.keys() {
        let normalized = normalize_path_template(path);
        normalized_paths.push((normalized, path));
    }

    // Check for duplicates
    normalized_paths.sort_by(|a, b| a.0.cmp(&b.0));

    for window in normalized_paths.windows(2) {
        if window[0].0 == window[1].0 {
            out.push(Finding::new(
                RuleId::PathTemplatingAmbiguous,
                format!("/paths/{}", escape_pointer_segment(window[1].1)),
                format!(
                    "Path '{}' is ambiguous with '{}' (they have the same structure)",
                    window[1].1, window[0].1
                ),
            ));
        }
    }
}

/// Path style should be normalized (no trailing slash, no //, no spaces, lowercase)
pub fn path_style_normalized(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for path in paths.keys() {
        let ptr = format!("/paths/{}", escape_pointer_segment(path));

        // No trailing slash (except for root "/")
        if path != "/" && path.ends_with('/') {
            out.push(Finding::new(
                RuleId::PathStyleNormalized,
                &ptr,
                format!("Path '{}' should not have a trailing slash", path),
            ));
        }

        // No double slashes
        if path.contains("//") {
            out.push(Finding::new(
                RuleId::PathStyleNormalized,
                &ptr,
                format!("Path '{}' should not contain '//'", path),
            ));
        }

        // No spaces in path
        if path.contains(' ') {
            out.push(Finding::new(
                RuleId::PathStyleNormalized,
                &ptr,
                format!("Path '{}' should not contain spaces", path),
            ));
        }

        // Avoid file extensions
        if path.ends_with(".json") || path.ends_with(".xml") || path.ends_with(".html") {
            out.push(Finding::new(
                RuleId::PathStyleNormalized,
                &ptr,
                format!(
                    "Path '{}' should not include file extensions; use content negotiation instead",
                    path
                ),
            ));
        }
    }
}

/// Common verbs that should be avoided in REST paths
const PATH_VERBS: &[&str] = &[
    "get", "post", "put", "delete", "patch", "create", "update", "remove", "list", "fetch", "add",
    "edit", "modify", "insert", "set", "read", "write", "find", "search", "query",
];

/// Avoid verbs in resource paths (prefer nouns)
pub fn path_no_verbs(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for path in paths.keys() {
        // Extract path segments (excluding template params)
        let segments: Vec<&str> = path
            .split('/')
            .filter(|s| !s.is_empty() && !s.starts_with('{'))
            .collect();

        for segment in segments {
            let lower = segment.to_lowercase();
            if PATH_VERBS.contains(&lower.as_str()) {
                out.push(Finding::new(
                    RuleId::PathNoVerbs,
                    format!("/paths/{}", escape_pointer_segment(path)),
                    format!(
                        "Path '{}' contains verb '{}'; prefer nouns for resource paths",
                        path, segment
                    ),
                ));
            }
        }
    }
}

/// Normalize a path template by replacing {param} with a placeholder
fn normalize_path_template(path: &str) -> String {
    let mut result = String::new();
    let mut in_param = false;

    for c in path.chars() {
        match c {
            '{' => {
                in_param = true;
                result.push_str("{*}");
            }
            '}' => {
                in_param = false;
            }
            _ if !in_param => {
                result.push(c);
            }
            _ => {}
        }
    }

    result
}

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_paths_not_empty_with_paths() {
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
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::PathsNotEmpty.as_str()]))
                .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathsNotEmpty.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_paths_not_empty_empty() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths: {}
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::PathsNotEmpty.as_str()]))
                .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathsNotEmpty);
        assert_eq!(validation.diagnostics[0].message, "paths must not be empty");

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathsNotEmpty.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].message, "paths must not be empty");
    }

    #[test]
    fn test_path_style_normalized_trailing_slash() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathStyleNormalized.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathStyleNormalized);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets/' should not have a trailing slash"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathStyleNormalized.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets/' should not have a trailing slash"
        );
    }

    #[test]
    fn test_path_style_normalized_double_slash() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets//list:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathStyleNormalized.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathStyleNormalized);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets//list' should not contain '//'"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathStyleNormalized.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets//list' should not contain '//'"
        );
    }

    #[test]
    fn test_path_style_normalized_file_extension() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets.json:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathStyleNormalized.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathStyleNormalized);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets.json' should not include file extensions; use content negotiation instead"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathStyleNormalized.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets.json' should not include file extensions; use content negotiation instead"
        );
    }

    #[test]
    fn test_path_no_verbs_good() {
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
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::PathNoVerbs.as_str()])).unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation =
            lint_with_ruleset(&json, RuleSet::from_slice(&[RuleId::PathNoVerbs.as_str()])).unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_path_no_verbs_bad() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/create:
    post:
      operationId: createPet
      responses:
        '201':
          description: Created
"#;
        let validation =
            lint_with_ruleset(yaml, RuleSet::from_slice(&[RuleId::PathNoVerbs.as_str()])).unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathNoVerbs);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets/create' contains verb 'create'; prefer nouns for resource paths"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation =
            lint_with_ruleset(&json, RuleSet::from_slice(&[RuleId::PathNoVerbs.as_str()])).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path '/pets/create' contains verb 'create'; prefer nouns for resource paths"
        );
    }

    #[test]
    fn test_path_templating_ambiguous() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{id}:
    get:
      operationId: getPet
      responses:
        '200':
          description: Success
  /pets/{petId}:
    get:
      operationId: getPetById
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::PathTemplatingAmbiguous.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::PathTemplatingAmbiguous
        );
        assert!(
            validation.diagnostics[0]
                .message
                .contains("is ambiguous with")
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathTemplatingAmbiguous.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
    }

    #[test]
    fn test_path_params_unused_good() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{id}:
    get:
      operationId: getPet
      parameters:
        - name: id
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
            RuleSet::from_slice(&[RuleId::PathParamsUnused.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathParamsUnused.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_path_params_unused_bad() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets/{id}:
    get:
      operationId: getPet
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
        - name: unused
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
            RuleSet::from_slice(&[RuleId::PathParamsUnused.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::PathParamsUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter 'unused' is declared but not used in path template '/pets/{id}'"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::PathParamsUnused.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Path parameter 'unused' is declared but not used in path template '/pets/{id}'"
        );
    }
}
