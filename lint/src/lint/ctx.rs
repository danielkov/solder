use super::Indexes;
use crate::model::SpanDb;

/// Context passed to lint rules, providing read-only access to
/// the parsed spec and shared indexes.
pub struct LintCtx<'a> {
    /// The parsed OpenAPI specification
    pub spec: &'a oas3::Spec,
    /// Pre-computed indexes for efficient rule execution
    pub indexes: &'a Indexes,
    /// Span database for source locations
    pub span_db: &'a SpanDb,
    /// The original source text
    pub source: &'a str,
}

impl<'a> LintCtx<'a> {
    pub fn new(
        spec: &'a oas3::Spec,
        indexes: &'a Indexes,
        span_db: &'a SpanDb,
        source: &'a str,
    ) -> Self {
        Self {
            spec,
            indexes,
            span_db,
            source,
        }
    }
}
