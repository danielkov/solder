use crate::lint::{Finding, LintCtx, RuleId};

/// Server URLs must be non-empty
pub fn server_url_non_empty(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for (i, server) in ctx.spec.servers.iter().enumerate() {
        if server.url.trim().is_empty() {
            out.push(Finding::new(
                RuleId::ServerUrlNonEmpty,
                format!("/servers/{}/url", i),
                format!("Server {} has an empty URL", i),
            ));
        }
    }
}

/// Server URLs must use HTTPS in production (allow localhost exceptions)
pub fn servers_https_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    for (i, server) in ctx.spec.servers.iter().enumerate() {
        let url = server.url.trim().to_lowercase();

        // Skip empty URLs (handled by another rule)
        if url.is_empty() {
            continue;
        }

        // Allow localhost and 127.0.0.1 on HTTP
        let is_localhost = url.contains("localhost") || url.contains("127.0.0.1");

        // Check for HTTP (not HTTPS)
        if url.starts_with("http://") && !is_localhost {
            out.push(Finding::new(
                RuleId::ServersHttpsRequired,
                format!("/servers/{}/url", i),
                format!(
                    "Server URL '{}' uses HTTP; production servers should use HTTPS",
                    server.url
                ),
            ));
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::lint::RuleId;
    use crate::testutil::yaml_to_json;
    use crate::{RuleSet, lint_with_ruleset};

    #[test]
    fn test_valid_https_urls() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
servers:
  - url: https://api.example.com
  - url: https://staging.example.com
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[
                RuleId::ServerUrlNonEmpty.as_str(),
                RuleId::ServersHttpsRequired.as_str(),
            ]),
        )
        .unwrap();

        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[
                RuleId::ServerUrlNonEmpty.as_str(),
                RuleId::ServersHttpsRequired.as_str(),
            ]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_empty_url() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
servers:
  - url: https://api.example.com
  - url: ""
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ServerUrlNonEmpty.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ServerUrlNonEmpty);
        assert_eq!(
            validation.diagnostics[0].message,
            "Server 1 has an empty URL"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ServerUrlNonEmpty.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Server 1 has an empty URL"
        );
    }

    #[test]
    fn test_http_url_production() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
servers:
  - url: http://api.example.com
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ServersHttpsRequired.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ServersHttpsRequired);
        assert_eq!(
            validation.diagnostics[0].message,
            "Server URL 'http://api.example.com' uses HTTP; production servers should use HTTPS"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ServersHttpsRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Server URL 'http://api.example.com' uses HTTP; production servers should use HTTPS"
        );
    }

    #[test]
    fn test_http_localhost_allowed() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
servers:
  - url: http://localhost:3000
  - url: http://127.0.0.1:8080
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ServersHttpsRequired.as_str()]),
        )
        .unwrap();

        // Localhost should be allowed on HTTP
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ServersHttpsRequired.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_mixed_http_https() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
servers:
  - url: https://api.example.com
  - url: http://staging.example.com
  - url: http://localhost:3000
paths: {}
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ServersHttpsRequired.as_str()]),
        )
        .unwrap();

        // Should only flag the non-localhost HTTP URL
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ServersHttpsRequired);
        assert_eq!(
            validation.diagnostics[0].message,
            "Server URL 'http://staging.example.com' uses HTTP; production servers should use HTTPS"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ServersHttpsRequired.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Server URL 'http://staging.example.com' uses HTTP; production servers should use HTTPS"
        );
    }
}
