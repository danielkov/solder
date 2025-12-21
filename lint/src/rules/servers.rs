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
    use super::*;
    use oas3::spec::Server;
    use std::collections::BTreeMap;

    fn make_server(url: &str) -> Server {
        Server {
            url: url.to_string(),
            description: None,
            variables: BTreeMap::new(),
            extensions: BTreeMap::new(),
        }
    }

    fn make_ctx_with_servers(
        urls: Vec<&str>,
    ) -> (oas3::Spec, crate::lint::Indexes, crate::model::SpanDb) {
        let servers: Vec<Server> = urls.iter().map(|u| make_server(u)).collect();

        let spec = oas3::Spec {
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
            servers,
            webhooks: BTreeMap::new(),
            extensions: BTreeMap::new(),
            security: Vec::new(),
        };

        let indexes = crate::lint::Indexes::build(&spec);
        let span_db = crate::model::SpanDb::new();
        (spec, indexes, span_db)
    }

    #[test]
    fn test_valid_urls() {
        let (spec, indexes, span_db) = make_ctx_with_servers(vec![
            "https://api.example.com",
            "https://staging.example.com",
        ]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        server_url_non_empty(&ctx, &mut findings);
        assert!(findings.is_empty());
    }

    #[test]
    fn test_empty_url() {
        let (spec, indexes, span_db) = make_ctx_with_servers(vec!["https://api.example.com", ""]);
        let ctx = LintCtx::new(&spec, &indexes, &span_db, "");

        let mut findings = Vec::new();
        server_url_non_empty(&ctx, &mut findings);
        assert_eq!(findings.len(), 1);
        assert_eq!(findings[0].rule, RuleId::ServerUrlNonEmpty);
        assert!(findings[0].ptr.contains("/servers/1"));
    }
}
