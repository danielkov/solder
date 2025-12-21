use crate::lint::{Finding, LintCtx, RuleId};

/// Operations should have summary
pub fn operation_summary_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if let Some(operation) = get_operation(ctx, &op.path, op.method)
            && operation
                .summary
                .as_ref()
                .is_none_or(|s| s.trim().is_empty())
        {
            out.push(Finding::new(
                RuleId::OperationSummaryRequired,
                format!("{}/summary", op.ptr_base),
                format!(
                    "Operation {} {} should have a summary",
                    op.method.to_uppercase(),
                    op.path
                ),
            ));
        }
    }
}

/// GET/DELETE should not define a request body
pub fn operation_method_semantics(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if let Some(operation) = get_operation(ctx, &op.path, op.method) {
            // GET and DELETE should not have request body
            if (op.method == "get" || op.method == "delete") && operation.request_body.is_some() {
                out.push(Finding::new(
                    RuleId::OperationMethodSemantics,
                    format!("{}/requestBody", op.ptr_base),
                    format!(
                        "{} {} should not define a request body; {} requests should be idempotent",
                        op.method.to_uppercase(),
                        op.path,
                        op.method.to_uppercase()
                    ),
                ));
            }
        }
    }
}

/// deprecated: true must include replacement note in description
pub fn operation_deprecated_note(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for op in &ctx.indexes.ops {
        if let Some(operation) = get_operation(ctx, &op.path, op.method)
            && operation.deprecated.unwrap_or(false)
        {
            // Check if description mentions alternatives
            let desc = operation.description.as_deref().unwrap_or("");
            let has_replacement_note = desc.to_lowercase().contains("deprecated")
                || desc.to_lowercase().contains("use ")
                || desc.to_lowercase().contains("replaced")
                || desc.to_lowercase().contains("instead")
                || desc.to_lowercase().contains("alternative");

            if !has_replacement_note {
                out.push(Finding::new(
                    RuleId::OperationDeprecatedNote,
                    format!("{}/deprecated", op.ptr_base),
                    format!(
                        "Deprecated operation {} {} should document the replacement in description",
                        op.method.to_uppercase(),
                        op.path
                    ),
                ));
            }
        }
    }
}

/// Helper to get an operation from the spec
fn get_operation<'a>(
    ctx: &'a LintCtx,
    path: &str,
    method: &str,
) -> Option<&'a oas3::spec::Operation> {
    let paths = ctx.spec.paths.as_ref()?;
    let path_item = paths.get(path)?;

    match method {
        "get" => path_item.get.as_ref(),
        "put" => path_item.put.as_ref(),
        "post" => path_item.post.as_ref(),
        "delete" => path_item.delete.as_ref(),
        "options" => path_item.options.as_ref(),
        "head" => path_item.head.as_ref(),
        "patch" => path_item.patch.as_ref(),
        "trace" => path_item.trace.as_ref(),
        _ => None,
    }
}
