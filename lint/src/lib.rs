//! OpenAPI 3.1 linter library
//!
//! A fast, deterministic linter for OpenAPI 3.1.x specifications with
//! IDE-grade diagnostics including source locations.
//!
//! # Example
//!
//! ```
//! use lint::{lint, lint_all};
//!
//! let spec = r#"
//! openapi: "3.1.0"
//! info:
//!   title: My API
//!   version: "1.0"
//! paths:
//!   /pets:
//!     get:
//!       operationId: listPets
//!       responses:
//!         "200":
//!           description: OK
//! "#;
//!
//! // Run all rules
//! let result = lint_all(spec).unwrap();
//! if result.has_errors() {
//!     for diag in result.errors() {
//!         eprintln!(
//!             "{}:{}: [{}] {}",
//!             diag.range.start.line + 1,
//!             diag.range.start.col + 1,
//!             diag.rule.as_str(),
//!             diag.message
//!         );
//!     }
//! }
//!
//! // Or run specific rules
//! let result = lint(spec, &["operation-id-required", "responses-exist"]).unwrap();
//! ```

mod api;
mod lint;
mod model;
mod parse;
mod rules;

pub use api::{Validation, available_rules, lint, lint_all, lint_with_ruleset};
pub use lint::{Diagnostic, Finding, FixPlan, RuleId, RuleSet, Severity, TextEdit};
pub use model::{ByteSpan, LineCol, Range};

use thiserror::Error;

/// Errors that can occur during linting
#[derive(Debug, Error)]
pub enum LintError {
    /// Failed to parse YAML
    #[error("YAML parse error: {0}")]
    YamlParse(String),

    /// Failed to parse as valid OpenAPI
    #[error("OpenAPI parse error: {0}")]
    OpenApiParse(String),
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_public_api() {
        let spec = r#"
openapi: "3.1.0"
info:
  title: Test
  version: "1.0"
paths:
  /test:
    get:
      operationId: test
      responses:
        "200":
          description: OK
"#;

        let result = lint_all(spec).unwrap();
        assert!(result.is_valid());
    }

    #[test]
    fn test_rule_id_roundtrip() {
        for rule in RuleId::all() {
            let s = rule.as_str();
            let parsed = RuleId::parse(s).unwrap();
            assert_eq!(*rule, parsed);
        }
    }
}
