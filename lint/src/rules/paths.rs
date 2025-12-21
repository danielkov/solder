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
