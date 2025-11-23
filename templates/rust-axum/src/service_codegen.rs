//! Service module code generation

use askama::Template;
use ir::gen_ir::{AuthKind, AuthScheme, HttpMethod, Operation, Service};

/// Escape Rust keywords with r# prefix
fn escape_keyword(name: &str) -> String {
    match name {
        "as" | "break" | "const" | "continue" | "crate" | "else" | "enum" | "extern" | "false"
        | "fn" | "for" | "if" | "impl" | "in" | "let" | "loop" | "match" | "mod" | "move"
        | "mut" | "pub" | "ref" | "return" | "self" | "Self" | "static" | "struct" | "super"
        | "trait" | "true" | "type" | "unsafe" | "use" | "where" | "while" | "async" | "await"
        | "dyn" | "abstract" | "become" | "box" | "do" | "final" | "macro" | "override"
        | "priv" | "typeof" | "unsized" | "virtual" | "yield" | "try" => format!("r#{}", name),
        _ => name.to_string(),
    }
}

mod filters {
    pub fn escape_rust_keyword(name: &str, _: &dyn askama::Values) -> askama::Result<String> {
        Ok(super::escape_keyword(name))
    }
}

/// Wrapper for operations with preprocessed data for templates
#[derive(Debug, Clone)]
struct OperationTemplate<'a> {
    operation: &'a Operation,
    method_fn: &'static str,
}

impl<'a> OperationTemplate<'a> {
    fn new(operation: &'a Operation) -> Self {
        let method_fn = match operation.http.method {
            HttpMethod::Get => "get",
            HttpMethod::Post => "post",
            HttpMethod::Put => "put",
            HttpMethod::Delete => "delete",
            HttpMethod::Patch => "patch",
            HttpMethod::Head => "head",
            HttpMethod::Options => "options",
            HttpMethod::Trace => "trace",
        };
        Self {
            operation,
            method_fn,
        }
    }
}

/// Template data for service module generation
#[derive(Template)]
#[template(path = "service_module.rs.jinja", escape = "none")]
struct ServiceModuleTemplate<'a> {
    trait_name: &'a str,
    module_name: &'a str,
    package_name: &'a str,
    has_bearer_auth: bool,
    has_api_key_auth: bool,
    operations: Vec<OperationTemplate<'a>>,
    methods: Vec<&'static str>,
}

pub struct ServiceModuleGenerator<'a> {
    service: &'a Service,
    auth_schemes: &'a [AuthScheme],
    package_name: &'a str,
}

impl<'a> ServiceModuleGenerator<'a> {
    pub fn new(
        service: &'a Service,
        auth_schemes: &'a [AuthScheme],
        package_name: &'a str,
    ) -> Self {
        Self {
            service,
            auth_schemes,
            package_name,
        }
    }

    pub fn generate(&self) -> String {
        // Determine which auth wrappers to generate
        let mut has_bearer_auth = false;
        let mut has_api_key_auth = false;

        for scheme in self.auth_schemes {
            match &scheme.kind {
                AuthKind::Http { scheme: s, .. } if s == "bearer" => {
                    has_bearer_auth = true;
                }
                AuthKind::ApiKey { .. } => {
                    has_api_key_auth = true;
                }
                _ => {}
            }
        }

        // Wrap operations with preprocessed data
        let operations: Vec<OperationTemplate> = self
            .service
            .operations
            .iter()
            .map(OperationTemplate::new)
            .collect();

        // Collect unique HTTP methods used
        let mut methods: Vec<&'static str> = operations
            .iter()
            .map(|op| op.method_fn)
            .collect::<std::collections::HashSet<_>>()
            .into_iter()
            .collect();
        methods.sort();

        let template = ServiceModuleTemplate {
            trait_name: &self.service.name.pascal,
            module_name: &self.service.name.snake,
            package_name: self.package_name,
            has_bearer_auth,
            has_api_key_auth,
            operations,
            methods,
        };

        template
            .render()
            .unwrap_or_else(|e| panic!("Failed to render service module template: {}", e))
    }
}
