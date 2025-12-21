use oas3::spec::SecurityScheme;
use rustc_hash::FxHashSet;

use crate::{
    lint::{Finding, LintCtx, RuleId},
    model::escape_pointer_segment,
};

/// Define components.securitySchemes for every referenced scheme
pub fn security_schemes_defined(ctx: &LintCtx, out: &mut Vec<Finding>) {
    // Collect all defined security scheme names
    let defined_schemes: FxHashSet<String> = ctx
        .spec
        .components
        .as_ref()
        .map(|c| c.security_schemes.keys().cloned().collect())
        .unwrap_or_default();

    let mut referenced_schemes: FxHashSet<String> = FxHashSet::default();

    // Check global security requirements
    for requirement in &ctx.spec.security {
        for (scheme_name, _) in requirement.0.iter() {
            referenced_schemes.insert(scheme_name.clone());
        }
    }

    // Check operation-level security requirements
    if let Some(paths) = &ctx.spec.paths {
        for path_item in paths.values() {
            for (_, operation) in iter_operations(path_item) {
                for requirement in &operation.security {
                    for (scheme_name, _) in requirement.0.iter() {
                        referenced_schemes.insert(scheme_name.clone());
                    }
                }
            }
        }
    }

    // Report undefined schemes
    for scheme_name in referenced_schemes {
        if !defined_schemes.contains(&scheme_name) {
            out.push(Finding::new(
                RuleId::SecuritySchemesDefined,
                "/security",
                format!(
                    "Security scheme '{}' is referenced but not defined in components/securitySchemes",
                    scheme_name
                ),
            ));
        }
    }
}

/// Every operation should declare security (or explicitly opt out with empty array)
pub fn security_declared(ctx: &LintCtx, out: &mut Vec<Finding>) {
    // Check if global security is defined in the source
    let has_global_security = ctx.source.contains("\nsecurity:");

    if has_global_security {
        // If global security is defined, operations inherit it
        return;
    }

    // Check each operation for security definition
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, _operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            // Check if operation has security in source (simple heuristic)
            let op_pattern = format!("{}:", method);
            if let Some(op_start) = ctx.source.find(&op_pattern) {
                // Look for security: within this operation section
                let op_section = &ctx.source[op_start..];
                let next_method = [
                    "get:", "post:", "put:", "delete:", "patch:", "options:", "head:", "trace:",
                ]
                .iter()
                .filter(|m| **m != op_pattern)
                .filter_map(|m| op_section.find(m))
                .min();

                let section_end = next_method.unwrap_or(op_section.len());
                let op_section = &op_section[..section_end];

                if !op_section.contains("security:") {
                    out.push(Finding::new(
                        RuleId::SecurityDeclared,
                        format!("{}/security", op_ptr),
                        format!(
                            "Operation {} {} has no security defined; use security: [] to explicitly mark as public",
                            method.to_uppercase(),
                            path
                        ),
                    ));
                }
            }
        }
    }
}

/// API keys should not be passed via query parameters
pub fn security_no_api_key_in_query(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(components) = &ctx.spec.components else {
        return;
    };

    for (name, scheme) in &components.security_schemes {
        if let oas3::spec::ObjectOrReference::Object(SecurityScheme::ApiKey { location, .. }) =
            scheme
            && location == "query"
        {
            out.push(Finding::new(
                RuleId::SecurityNoApiKeyInQuery,
                format!("/components/securitySchemes/{}", name),
                format!(
                    "Security scheme '{}' uses API key in query parameter; prefer header for security",
                    name
                ),
            ));
        }
    }
}

/// OAuth2 flows should be complete with scopes defined
pub fn security_oauth2_complete(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(components) = &ctx.spec.components else {
        return;
    };

    for (name, scheme) in &components.security_schemes {
        if let oas3::spec::ObjectOrReference::Object(SecurityScheme::OAuth2 { flows, .. }) = scheme
        {
            let scheme_ptr = format!("/components/securitySchemes/{}", name);

            // Check implicit flow
            if let Some(implicit) = &flows.implicit
                && implicit.scopes.is_empty()
            {
                out.push(Finding::new(
                    RuleId::SecurityOAuth2Complete,
                    format!("{}/flows/implicit/scopes", scheme_ptr),
                    format!("OAuth2 implicit flow in '{}' should define scopes", name),
                ));
            }

            // Check authorization code flow
            if let Some(auth_code) = &flows.authorization_code
                && auth_code.scopes.is_empty()
            {
                out.push(Finding::new(
                    RuleId::SecurityOAuth2Complete,
                    format!("{}/flows/authorizationCode/scopes", scheme_ptr),
                    format!(
                        "OAuth2 authorization code flow in '{}' should define scopes",
                        name
                    ),
                ));
            }

            // Check client credentials flow
            if let Some(client_creds) = &flows.client_credentials
                && client_creds.scopes.is_empty()
            {
                out.push(Finding::new(
                    RuleId::SecurityOAuth2Complete,
                    format!("{}/flows/clientCredentials/scopes", scheme_ptr),
                    format!(
                        "OAuth2 client credentials flow in '{}' should define scopes",
                        name
                    ),
                ));
            }

            // Check password flow
            if let Some(password) = &flows.password
                && password.scopes.is_empty()
            {
                out.push(Finding::new(
                    RuleId::SecurityOAuth2Complete,
                    format!("{}/flows/password/scopes", scheme_ptr),
                    format!("OAuth2 password flow in '{}' should define scopes", name),
                ));
            }

            // Check that at least one flow is defined
            let has_flow = flows.implicit.is_some()
                || flows.authorization_code.is_some()
                || flows.client_credentials.is_some()
                || flows.password.is_some();

            if !has_flow {
                out.push(Finding::new(
                    RuleId::SecurityOAuth2Complete,
                    format!("{}/flows", scheme_ptr),
                    format!(
                        "OAuth2 security scheme '{}' must define at least one flow",
                        name
                    ),
                ));
            }
        }
    }
}

fn iter_operations(
    path_item: &oas3::spec::PathItem,
) -> impl Iterator<Item = (&'static str, &oas3::spec::Operation)> {
    let methods: [(&'static str, Option<&oas3::spec::Operation>); 8] = [
        ("get", path_item.get.as_ref()),
        ("put", path_item.put.as_ref()),
        ("post", path_item.post.as_ref()),
        ("delete", path_item.delete.as_ref()),
        ("options", path_item.options.as_ref()),
        ("head", path_item.head.as_ref()),
        ("patch", path_item.patch.as_ref()),
        ("trace", path_item.trace.as_ref()),
    ];

    methods
        .into_iter()
        .filter_map(|(method, op)| op.map(|o| (method, o)))
}
