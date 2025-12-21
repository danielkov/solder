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
    // Check if global security is defined in the source using span_db
    let has_global_security = ctx.span_db.value_spans.contains_key("/security")
        || ctx.span_db.key_spans.contains_key("/security");

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
            let security_ptr = format!("{}/security", op_ptr);

            // Check if operation has security field in source using span_db
            let has_security = ctx.span_db.value_spans.contains_key(&security_ptr)
                || ctx.span_db.key_spans.contains_key(&security_ptr);

            if !has_security {
                out.push(Finding::new(
                    RuleId::SecurityDeclared,
                    security_ptr,
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

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_security_declared_with_global_security() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
security:
  - api_key: []
paths:
  /pets:
    get:
      operationId: listPets
      responses:
        '200':
          description: Success
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();

        // Should pass because global security is defined and operations inherit it
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_security_declared_operation_level() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      security:
        - api_key: []
      responses:
        '200':
          description: Success
  /public:
    get:
      operationId: getPublic
      security: []
      responses:
        '200':
          description: Success
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();

        // Should pass - both operations have explicit security
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_security_declared_missing_in_operation() {
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
    post:
      operationId: createPet
      security: []
      responses:
        '201':
          description: Created
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();

        // Should fail - GET /pets has no security declaration
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::SecurityDeclared);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets has no security defined; use security: [] to explicitly mark as public"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets has no security defined; use security: [] to explicitly mark as public"
        );
    }

    #[test]
    fn test_security_declared_multiple_operations_missing() {
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
    post:
      operationId: createPet
      responses:
        '201':
          description: Created
  /users:
    get:
      operationId: listUsers
      security: []
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();

        // Should fail for GET /pets and POST /pets (both missing security)
        assert_eq!(validation.diagnostics.len(), 2);
        assert!(
            validation
                .diagnostics
                .iter()
                .all(|d| d.rule == RuleId::SecurityDeclared)
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets has no security defined; use security: [] to explicitly mark as public"
        );
        assert_eq!(
            validation.diagnostics[1].message,
            "Operation POST /pets has no security defined; use security: [] to explicitly mark as public"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityDeclared.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 2);
        assert_eq!(
            validation.diagnostics[0].message,
            "Operation GET /pets has no security defined; use security: [] to explicitly mark as public"
        );
    }

    #[test]
    fn test_security_schemes_defined_all_valid() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
security:
  - api_key: []
  - bearer: []
paths:
  /pets:
    get:
      operationId: listPets
      security:
        - oauth2: [read:pets]
      responses:
        '200':
          description: Success
components:
  securitySchemes:
    api_key:
      type: apiKey
      in: header
      name: X-API-Key
    bearer:
      type: http
      scheme: bearer
    oauth2:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.com/oauth/authorize
          tokenUrl: https://example.com/oauth/token
          scopes:
            read:pets: Read pets
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecuritySchemesDefined.as_str()]),
        )
        .unwrap();

        // All referenced schemes are defined
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecuritySchemesDefined.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_security_schemes_defined_undefined_global() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
security:
  - undefined_scheme: []
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecuritySchemesDefined.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::SecuritySchemesDefined
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Security scheme 'undefined_scheme' is referenced but not defined in components/securitySchemes"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecuritySchemesDefined.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Security scheme 'undefined_scheme' is referenced but not defined in components/securitySchemes"
        );
    }

    #[test]
    fn test_security_schemes_defined_undefined_operation() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: listPets
      security:
        - missing_scheme: []
      responses:
        '200':
          description: Success
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecuritySchemesDefined.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::SecuritySchemesDefined
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Security scheme 'missing_scheme' is referenced but not defined in components/securitySchemes"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecuritySchemesDefined.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Security scheme 'missing_scheme' is referenced but not defined in components/securitySchemes"
        );
    }

    #[test]
    fn test_security_no_api_key_in_query_valid() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths: {}
components:
  securitySchemes:
    api_key_header:
      type: apiKey
      in: header
      name: X-API-Key
    bearer:
      type: http
      scheme: bearer
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityNoApiKeyInQuery.as_str()]),
        )
        .unwrap();

        // No API keys in query params
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityNoApiKeyInQuery.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_security_no_api_key_in_query_invalid() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths: {}
components:
  securitySchemes:
    api_key_query:
      type: apiKey
      in: query
      name: api_key
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityNoApiKeyInQuery.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::SecurityNoApiKeyInQuery
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Security scheme 'api_key_query' uses API key in query parameter; prefer header for security"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityNoApiKeyInQuery.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Security scheme 'api_key_query' uses API key in query parameter; prefer header for security"
        );
    }

    #[test]
    fn test_security_oauth2_complete_valid() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths: {}
components:
  securitySchemes:
    oauth2:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.com/oauth/authorize
          tokenUrl: https://example.com/oauth/token
          scopes:
            read:pets: Read pets
            write:pets: Write pets
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityOAuth2Complete.as_str()]),
        )
        .unwrap();

        // OAuth2 has scopes defined
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityOAuth2Complete.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_security_oauth2_complete_missing_scopes() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths: {}
components:
  securitySchemes:
    oauth2:
      type: oauth2
      flows:
        authorizationCode:
          authorizationUrl: https://example.com/oauth/authorize
          tokenUrl: https://example.com/oauth/token
          scopes: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityOAuth2Complete.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::SecurityOAuth2Complete
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "OAuth2 authorization code flow in 'oauth2' should define scopes"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityOAuth2Complete.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "OAuth2 authorization code flow in 'oauth2' should define scopes"
        );
    }

    #[test]
    fn test_security_oauth2_complete_no_flows() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths: {}
components:
  securitySchemes:
    oauth2:
      type: oauth2
      flows: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::SecurityOAuth2Complete.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::SecurityOAuth2Complete
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "OAuth2 security scheme 'oauth2' must define at least one flow"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::SecurityOAuth2Complete.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "OAuth2 security scheme 'oauth2' must define at least one flow"
        );
    }
}
