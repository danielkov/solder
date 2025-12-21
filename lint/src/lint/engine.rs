use super::LintCtx;
use crate::model::{ByteSpan, LineIndex, Range, SpanDb};
use crate::rules;

/// Unique identifier for each lint rule
#[derive(Clone, Copy, Debug, Eq, PartialEq, Hash, PartialOrd, Ord)]
#[repr(u8)]
pub enum RuleId {
    // === Baseline validation (OAS-VAL) ===
    /// OpenAPI version must be 3.1.x
    OpenApiVersion31,

    // === Document metadata (DOC) ===
    /// info.title must be present and non-empty
    InfoTitleRequired,
    /// info.version must be present and non-empty
    InfoVersionRequired,
    /// info.description should be present and meaningful
    InfoDescriptionPresent,
    /// contact and license should be present for public APIs
    InfoContactLicensePresent,
    /// servers must use HTTPS in production
    ServersHttpsRequired,
    /// paths must not be empty
    PathsNotEmpty,
    /// Server URLs must be non-empty
    ServerUrlNonEmpty,
    /// Tags used by operations should be declared
    TagsDeclared,

    // === Paths (PATH) ===
    /// Path template params must be declared as parameters
    PathParamsDeclared,
    /// Path params must have required: true
    PathParamsRequired,
    /// No unused path parameters
    PathParamsUnused,
    /// No ambiguous or duplicate path templating
    PathTemplatingAmbiguous,
    /// Path style should be normalized (no trailing slash, etc.)
    PathStyleNormalized,
    /// Avoid verbs in resource paths
    PathNoVerbs,

    // === Operations (OP) ===
    /// operationId must exist
    OperationIdRequired,
    /// operationId must be unique
    OperationIdUnique,
    /// Operations should have summary and description
    OperationSummaryRequired,
    /// Operations must have at least one response
    ResponsesExist,
    /// Operations should have a 2xx response
    ResponsesHave2xx,
    /// GET/DELETE should not have request body
    OperationMethodSemantics,
    /// deprecated: true must include replacement note
    OperationDeprecatedNote,

    // === Parameters (PAR) ===
    /// Parameter names should be consistent case
    ParamNamingConsistent,
    /// Query parameters must declare schema and type
    ParamSchemaRequired,
    /// Enum parameters should list allowed values
    ParamEnumDocumented,
    /// Date/time formats must be explicit
    ParamDateTimeFormat,

    // === Request bodies (REQ) ===
    /// requestBody must define content with at least one media type
    RequestBodyContentRequired,
    /// JSON bodies should use application/json
    RequestBodyJsonMediaType,
    /// Each media type must provide a schema
    RequestBodySchemaRequired,
    /// Request bodies should have examples
    RequestBodyExamplesPresent,

    // === Responses (RES) ===
    /// Every response must have a description
    ResponseDescriptionRequired,
    /// Success responses must define schemas for bodies
    ResponseSchemaRequired,
    /// 204 responses should not have body content
    Response204NoBody,
    /// Standard error model should be consistent
    ResponseErrorModelConsistent,

    // === Schema quality (SCH) ===
    /// Every schema should have type
    SchemaTypeRequired,
    /// Objects should define properties
    SchemaObjectPropertiesRequired,
    /// additionalProperties policy should be explicit
    SchemaAdditionalPropertiesExplicit,
    /// Enums must define type and have unique values
    SchemaEnumValid,
    /// Arrays must define items
    SchemaArrayItemsRequired,
    /// readOnly/writeOnly should be used correctly
    SchemaReadWriteOnlyCorrect,
    /// Schema/property names should follow conventions
    SchemaNamingConventions,
    /// No "any" schemas unless explicitly approved
    SchemaNoAny,

    // === Components (CMP) ===
    /// Reuse shared schemas via components/schemas
    ComponentReuseSchemas,
    /// No unused components
    ComponentNoUnused,

    // === Security (SEC) ===
    /// Define components.securitySchemes for every referenced scheme
    SecuritySchemesDefined,
    /// Every operation should declare security
    SecurityDeclared,
    /// API keys should not be passed via query parameters
    SecurityNoApiKeyInQuery,
    /// OAuth2 flows should be complete with scopes
    SecurityOAuth2Complete,
}

impl RuleId {
    /// Get the string identifier for this rule
    pub fn as_str(&self) -> &'static str {
        match self {
            // Baseline validation
            RuleId::OpenApiVersion31 => "openapi-version-31",
            // Document metadata
            RuleId::InfoTitleRequired => "info-title-required",
            RuleId::InfoVersionRequired => "info-version-required",
            RuleId::InfoDescriptionPresent => "info-description-present",
            RuleId::InfoContactLicensePresent => "info-contact-license-present",
            RuleId::ServersHttpsRequired => "servers-https-required",
            RuleId::PathsNotEmpty => "paths-not-empty",
            RuleId::ServerUrlNonEmpty => "server-url-non-empty",
            RuleId::TagsDeclared => "tags-declared",
            // Paths
            RuleId::PathParamsDeclared => "path-params-declared",
            RuleId::PathParamsRequired => "path-params-required",
            RuleId::PathParamsUnused => "path-params-unused",
            RuleId::PathTemplatingAmbiguous => "path-templating-ambiguous",
            RuleId::PathStyleNormalized => "path-style-normalized",
            RuleId::PathNoVerbs => "path-no-verbs",
            // Operations
            RuleId::OperationIdRequired => "operation-id-required",
            RuleId::OperationIdUnique => "operation-id-unique",
            RuleId::OperationSummaryRequired => "operation-summary-required",
            RuleId::ResponsesExist => "responses-exist",
            RuleId::ResponsesHave2xx => "responses-have-2xx",
            RuleId::OperationMethodSemantics => "operation-method-semantics",
            RuleId::OperationDeprecatedNote => "operation-deprecated-note",
            // Parameters
            RuleId::ParamNamingConsistent => "param-naming-consistent",
            RuleId::ParamSchemaRequired => "param-schema-required",
            RuleId::ParamEnumDocumented => "param-enum-documented",
            RuleId::ParamDateTimeFormat => "param-date-time-format",
            // Request bodies
            RuleId::RequestBodyContentRequired => "request-body-content-required",
            RuleId::RequestBodyJsonMediaType => "request-body-json-media-type",
            RuleId::RequestBodySchemaRequired => "request-body-schema-required",
            RuleId::RequestBodyExamplesPresent => "request-body-examples-present",
            // Responses
            RuleId::ResponseDescriptionRequired => "response-description-required",
            RuleId::ResponseSchemaRequired => "response-schema-required",
            RuleId::Response204NoBody => "response-204-no-body",
            RuleId::ResponseErrorModelConsistent => "response-error-model-consistent",
            // Schemas
            RuleId::SchemaTypeRequired => "schema-type-required",
            RuleId::SchemaObjectPropertiesRequired => "schema-object-properties-required",
            RuleId::SchemaAdditionalPropertiesExplicit => "schema-additional-properties-explicit",
            RuleId::SchemaEnumValid => "schema-enum-valid",
            RuleId::SchemaArrayItemsRequired => "schema-array-items-required",
            RuleId::SchemaReadWriteOnlyCorrect => "schema-read-write-only-correct",
            RuleId::SchemaNamingConventions => "schema-naming-conventions",
            RuleId::SchemaNoAny => "schema-no-any",
            // Components
            RuleId::ComponentReuseSchemas => "component-reuse-schemas",
            RuleId::ComponentNoUnused => "component-no-unused",
            // Security
            RuleId::SecuritySchemesDefined => "security-schemes-defined",
            RuleId::SecurityDeclared => "security-declared",
            RuleId::SecurityNoApiKeyInQuery => "security-no-api-key-in-query",
            RuleId::SecurityOAuth2Complete => "security-oauth2-complete",
        }
    }

    /// Parse a rule ID from string
    pub fn parse(s: &str) -> Option<RuleId> {
        match s {
            // Baseline validation
            "openapi-version-31" => Some(RuleId::OpenApiVersion31),
            // Document metadata
            "info-title-required" => Some(RuleId::InfoTitleRequired),
            "info-version-required" => Some(RuleId::InfoVersionRequired),
            "info-description-present" => Some(RuleId::InfoDescriptionPresent),
            "info-contact-license-present" => Some(RuleId::InfoContactLicensePresent),
            "servers-https-required" => Some(RuleId::ServersHttpsRequired),
            "paths-not-empty" => Some(RuleId::PathsNotEmpty),
            "server-url-non-empty" => Some(RuleId::ServerUrlNonEmpty),
            "tags-declared" => Some(RuleId::TagsDeclared),
            // Paths
            "path-params-declared" => Some(RuleId::PathParamsDeclared),
            "path-params-required" => Some(RuleId::PathParamsRequired),
            "path-params-unused" => Some(RuleId::PathParamsUnused),
            "path-templating-ambiguous" => Some(RuleId::PathTemplatingAmbiguous),
            "path-style-normalized" => Some(RuleId::PathStyleNormalized),
            "path-no-verbs" => Some(RuleId::PathNoVerbs),
            // Operations
            "operation-id-required" => Some(RuleId::OperationIdRequired),
            "operation-id-unique" => Some(RuleId::OperationIdUnique),
            "operation-summary-required" => Some(RuleId::OperationSummaryRequired),
            "responses-exist" => Some(RuleId::ResponsesExist),
            "responses-have-2xx" => Some(RuleId::ResponsesHave2xx),
            "operation-method-semantics" => Some(RuleId::OperationMethodSemantics),
            "operation-deprecated-note" => Some(RuleId::OperationDeprecatedNote),
            // Parameters
            "param-naming-consistent" => Some(RuleId::ParamNamingConsistent),
            "param-schema-required" => Some(RuleId::ParamSchemaRequired),
            "param-enum-documented" => Some(RuleId::ParamEnumDocumented),
            "param-date-time-format" => Some(RuleId::ParamDateTimeFormat),
            // Request bodies
            "request-body-content-required" => Some(RuleId::RequestBodyContentRequired),
            "request-body-json-media-type" => Some(RuleId::RequestBodyJsonMediaType),
            "request-body-schema-required" => Some(RuleId::RequestBodySchemaRequired),
            "request-body-examples-present" => Some(RuleId::RequestBodyExamplesPresent),
            // Responses
            "response-description-required" => Some(RuleId::ResponseDescriptionRequired),
            "response-schema-required" => Some(RuleId::ResponseSchemaRequired),
            "response-204-no-body" => Some(RuleId::Response204NoBody),
            "response-error-model-consistent" => Some(RuleId::ResponseErrorModelConsistent),
            // Schemas
            "schema-type-required" => Some(RuleId::SchemaTypeRequired),
            "schema-object-properties-required" => Some(RuleId::SchemaObjectPropertiesRequired),
            "schema-additional-properties-explicit" => {
                Some(RuleId::SchemaAdditionalPropertiesExplicit)
            }
            "schema-enum-valid" => Some(RuleId::SchemaEnumValid),
            "schema-array-items-required" => Some(RuleId::SchemaArrayItemsRequired),
            "schema-read-write-only-correct" => Some(RuleId::SchemaReadWriteOnlyCorrect),
            "schema-naming-conventions" => Some(RuleId::SchemaNamingConventions),
            "schema-no-any" => Some(RuleId::SchemaNoAny),
            // Components
            "component-reuse-schemas" => Some(RuleId::ComponentReuseSchemas),
            "component-no-unused" => Some(RuleId::ComponentNoUnused),
            // Security
            "security-schemes-defined" => Some(RuleId::SecuritySchemesDefined),
            "security-declared" => Some(RuleId::SecurityDeclared),
            "security-no-api-key-in-query" => Some(RuleId::SecurityNoApiKeyInQuery),
            "security-oauth2-complete" => Some(RuleId::SecurityOAuth2Complete),
            _ => None,
        }
    }

    /// Get all available rule IDs
    pub fn all() -> &'static [RuleId] {
        &[
            // Baseline validation
            RuleId::OpenApiVersion31,
            // Document metadata
            RuleId::InfoTitleRequired,
            RuleId::InfoVersionRequired,
            RuleId::InfoDescriptionPresent,
            RuleId::InfoContactLicensePresent,
            RuleId::ServersHttpsRequired,
            RuleId::PathsNotEmpty,
            RuleId::ServerUrlNonEmpty,
            RuleId::TagsDeclared,
            // Paths
            RuleId::PathParamsDeclared,
            RuleId::PathParamsRequired,
            RuleId::PathParamsUnused,
            RuleId::PathTemplatingAmbiguous,
            RuleId::PathStyleNormalized,
            RuleId::PathNoVerbs,
            // Operations
            RuleId::OperationIdRequired,
            RuleId::OperationIdUnique,
            RuleId::OperationSummaryRequired,
            RuleId::ResponsesExist,
            RuleId::ResponsesHave2xx,
            RuleId::OperationMethodSemantics,
            RuleId::OperationDeprecatedNote,
            // Parameters
            RuleId::ParamNamingConsistent,
            RuleId::ParamSchemaRequired,
            RuleId::ParamEnumDocumented,
            RuleId::ParamDateTimeFormat,
            // Request bodies
            RuleId::RequestBodyContentRequired,
            RuleId::RequestBodyJsonMediaType,
            RuleId::RequestBodySchemaRequired,
            RuleId::RequestBodyExamplesPresent,
            // Responses
            RuleId::ResponseDescriptionRequired,
            RuleId::ResponseSchemaRequired,
            RuleId::Response204NoBody,
            RuleId::ResponseErrorModelConsistent,
            // Schemas
            RuleId::SchemaTypeRequired,
            RuleId::SchemaObjectPropertiesRequired,
            RuleId::SchemaAdditionalPropertiesExplicit,
            RuleId::SchemaEnumValid,
            RuleId::SchemaArrayItemsRequired,
            RuleId::SchemaReadWriteOnlyCorrect,
            RuleId::SchemaNamingConventions,
            RuleId::SchemaNoAny,
            // Components
            RuleId::ComponentReuseSchemas,
            RuleId::ComponentNoUnused,
            // Security
            RuleId::SecuritySchemesDefined,
            RuleId::SecurityDeclared,
            RuleId::SecurityNoApiKeyInQuery,
            RuleId::SecurityOAuth2Complete,
        ]
    }

    /// Get the default severity for this rule
    pub fn default_severity(&self) -> Severity {
        match self {
            // Baseline validation - errors
            RuleId::OpenApiVersion31 => Severity::Error,
            // Document metadata
            RuleId::InfoTitleRequired => Severity::Error,
            RuleId::InfoVersionRequired => Severity::Error,
            RuleId::InfoDescriptionPresent => Severity::Warning,
            RuleId::InfoContactLicensePresent => Severity::Warning,
            RuleId::ServersHttpsRequired => Severity::Error,
            RuleId::PathsNotEmpty => Severity::Warning,
            RuleId::ServerUrlNonEmpty => Severity::Warning,
            RuleId::TagsDeclared => Severity::Warning,
            // Paths
            RuleId::PathParamsDeclared => Severity::Error,
            RuleId::PathParamsRequired => Severity::Error,
            RuleId::PathParamsUnused => Severity::Error,
            RuleId::PathTemplatingAmbiguous => Severity::Error,
            RuleId::PathStyleNormalized => Severity::Warning,
            RuleId::PathNoVerbs => Severity::Warning,
            // Operations
            RuleId::OperationIdRequired => Severity::Warning,
            RuleId::OperationIdUnique => Severity::Error,
            RuleId::OperationSummaryRequired => Severity::Warning,
            RuleId::ResponsesExist => Severity::Error,
            RuleId::ResponsesHave2xx => Severity::Warning,
            RuleId::OperationMethodSemantics => Severity::Warning,
            RuleId::OperationDeprecatedNote => Severity::Warning,
            // Parameters
            RuleId::ParamNamingConsistent => Severity::Warning,
            RuleId::ParamSchemaRequired => Severity::Error,
            RuleId::ParamEnumDocumented => Severity::Warning,
            RuleId::ParamDateTimeFormat => Severity::Warning,
            // Request bodies
            RuleId::RequestBodyContentRequired => Severity::Error,
            RuleId::RequestBodyJsonMediaType => Severity::Warning,
            RuleId::RequestBodySchemaRequired => Severity::Error,
            RuleId::RequestBodyExamplesPresent => Severity::Warning,
            // Responses
            RuleId::ResponseDescriptionRequired => Severity::Error,
            RuleId::ResponseSchemaRequired => Severity::Error,
            RuleId::Response204NoBody => Severity::Warning,
            RuleId::ResponseErrorModelConsistent => Severity::Warning,
            // Schemas
            RuleId::SchemaTypeRequired => Severity::Warning,
            RuleId::SchemaObjectPropertiesRequired => Severity::Warning,
            RuleId::SchemaAdditionalPropertiesExplicit => Severity::Warning,
            RuleId::SchemaEnumValid => Severity::Error,
            RuleId::SchemaArrayItemsRequired => Severity::Error,
            RuleId::SchemaReadWriteOnlyCorrect => Severity::Warning,
            RuleId::SchemaNamingConventions => Severity::Warning,
            RuleId::SchemaNoAny => Severity::Warning,
            // Components
            RuleId::ComponentReuseSchemas => Severity::Warning,
            RuleId::ComponentNoUnused => Severity::Info,
            // Security
            RuleId::SecuritySchemesDefined => Severity::Error,
            RuleId::SecurityDeclared => Severity::Warning,
            RuleId::SecurityNoApiKeyInQuery => Severity::Error,
            RuleId::SecurityOAuth2Complete => Severity::Error,
        }
    }
}

/// Severity level for diagnostics
#[derive(Clone, Copy, Debug, Eq, PartialEq, Hash, PartialOrd, Ord)]
pub enum Severity {
    Error,
    Warning,
    Info,
    Hint,
}

/// A semantic finding from a lint rule (before span resolution)
#[derive(Debug, Clone)]
pub struct Finding {
    pub rule: RuleId,
    pub severity: Severity,
    pub message: String,
    pub ptr: String,
    pub fix: Option<FixPlan>,
}

impl Finding {
    pub fn new(rule: RuleId, ptr: impl Into<String>, message: impl Into<String>) -> Self {
        Self {
            severity: rule.default_severity(),
            rule,
            message: message.into(),
            ptr: ptr.into(),
            fix: None,
        }
    }

    pub fn with_severity(mut self, severity: Severity) -> Self {
        self.severity = severity;
        self
    }

    pub fn with_fix(mut self, fix: FixPlan) -> Self {
        self.fix = Some(fix);
        self
    }
}

/// A planned fix for a finding
#[derive(Debug, Clone)]
pub struct FixPlan {
    pub description: String,
    pub edits: Vec<TextEdit>,
}

/// A text edit for auto-fix (LSP-style)
#[derive(Debug, Clone)]
pub struct TextEdit {
    pub start_byte: u32,
    pub end_byte: u32,
    pub replacement: String,
}

/// A final diagnostic with resolved source location
#[derive(Debug, Clone)]
pub struct Diagnostic {
    pub rule: RuleId,
    pub severity: Severity,
    pub message: String,
    pub range: Range,
    pub byte_span: ByteSpan,
    pub fixes: Vec<TextEdit>,
    /// True if the location is approximate due to YAML alias
    pub is_alias_location: bool,
}

/// Bitset for enabled rules
#[derive(Clone, Copy, Debug, Default)]
pub struct RuleSet(u128);

impl RuleSet {
    pub fn new() -> Self {
        Self(0)
    }

    pub fn all() -> Self {
        let mut set = Self::new();
        for rule in RuleId::all() {
            set.enable(*rule);
        }
        set
    }

    pub fn enable(&mut self, rule: RuleId) {
        self.0 |= 1 << (rule as u8);
    }

    pub fn disable(&mut self, rule: RuleId) {
        self.0 &= !(1 << (rule as u8));
    }

    pub fn is_enabled(&self, rule: RuleId) -> bool {
        (self.0 & (1 << (rule as u8))) != 0
    }

    pub fn from_slice(rules: &[&str]) -> Self {
        let mut set = Self::new();
        for rule_str in rules {
            if let Some(rule) = RuleId::parse(rule_str) {
                set.enable(rule);
            }
        }
        set
    }
}

/// Run all enabled rules and collect findings
pub fn run_rules(ctx: &LintCtx, enabled: RuleSet) -> Vec<Finding> {
    let mut findings = Vec::new();

    // Run rules in a fixed order for determinism
    for rule in RuleId::all() {
        if enabled.is_enabled(*rule) {
            run_rule(*rule, ctx, &mut findings);
        }
    }

    findings
}

/// Dispatch to the appropriate rule implementation
fn run_rule(rule: RuleId, ctx: &LintCtx, out: &mut Vec<Finding>) {
    match rule {
        // Baseline validation
        RuleId::OpenApiVersion31 => rules::openapi_version_31(ctx, out),
        // Document metadata
        RuleId::InfoTitleRequired => rules::info_title_required(ctx, out),
        RuleId::InfoVersionRequired => rules::info_version_required(ctx, out),
        RuleId::InfoDescriptionPresent => rules::info_description_present(ctx, out),
        RuleId::InfoContactLicensePresent => rules::info_contact_license_present(ctx, out),
        RuleId::ServersHttpsRequired => rules::servers_https_required(ctx, out),
        RuleId::PathsNotEmpty => rules::paths_not_empty(ctx, out),
        RuleId::ServerUrlNonEmpty => rules::server_url_non_empty(ctx, out),
        RuleId::TagsDeclared => rules::tags_declared(ctx, out),
        // Paths
        RuleId::PathParamsDeclared => rules::path_params_declared(ctx, out),
        RuleId::PathParamsRequired => rules::path_params_required(ctx, out),
        RuleId::PathParamsUnused => rules::path_params_unused(ctx, out),
        RuleId::PathTemplatingAmbiguous => rules::path_templating_ambiguous(ctx, out),
        RuleId::PathStyleNormalized => rules::path_style_normalized(ctx, out),
        RuleId::PathNoVerbs => rules::path_no_verbs(ctx, out),
        // Operations
        RuleId::OperationIdRequired => rules::operation_id_required(ctx, out),
        RuleId::OperationIdUnique => rules::operation_id_unique(ctx, out),
        RuleId::OperationSummaryRequired => rules::operation_summary_required(ctx, out),
        RuleId::ResponsesExist => rules::responses_exist(ctx, out),
        RuleId::ResponsesHave2xx => rules::responses_have_2xx(ctx, out),
        RuleId::OperationMethodSemantics => rules::operation_method_semantics(ctx, out),
        RuleId::OperationDeprecatedNote => rules::operation_deprecated_note(ctx, out),
        // Parameters
        RuleId::ParamNamingConsistent => rules::param_naming_consistent(ctx, out),
        RuleId::ParamSchemaRequired => rules::param_schema_required(ctx, out),
        RuleId::ParamEnumDocumented => rules::param_enum_documented(ctx, out),
        RuleId::ParamDateTimeFormat => rules::param_date_time_format(ctx, out),
        // Request bodies
        RuleId::RequestBodyContentRequired => rules::request_body_content_required(ctx, out),
        RuleId::RequestBodyJsonMediaType => rules::request_body_json_media_type(ctx, out),
        RuleId::RequestBodySchemaRequired => rules::request_body_schema_required(ctx, out),
        RuleId::RequestBodyExamplesPresent => rules::request_body_examples_present(ctx, out),
        // Responses
        RuleId::ResponseDescriptionRequired => rules::response_description_required(ctx, out),
        RuleId::ResponseSchemaRequired => rules::response_schema_required(ctx, out),
        RuleId::Response204NoBody => rules::response_204_no_body(ctx, out),
        RuleId::ResponseErrorModelConsistent => rules::response_error_model_consistent(ctx, out),
        // Schemas
        RuleId::SchemaTypeRequired => rules::schema_type_required(ctx, out),
        RuleId::SchemaObjectPropertiesRequired => {
            rules::schema_object_properties_required(ctx, out)
        }
        RuleId::SchemaAdditionalPropertiesExplicit => {
            rules::schema_additional_properties_explicit(ctx, out)
        }
        RuleId::SchemaEnumValid => rules::schema_enum_valid(ctx, out),
        RuleId::SchemaArrayItemsRequired => rules::schema_array_items_required(ctx, out),
        RuleId::SchemaReadWriteOnlyCorrect => rules::schema_read_write_only_correct(ctx, out),
        RuleId::SchemaNamingConventions => rules::schema_naming_conventions(ctx, out),
        RuleId::SchemaNoAny => rules::schema_no_any(ctx, out),
        // Components
        RuleId::ComponentReuseSchemas => rules::component_reuse_schemas(ctx, out),
        RuleId::ComponentNoUnused => rules::component_no_unused(ctx, out),
        // Security
        RuleId::SecuritySchemesDefined => rules::security_schemes_defined(ctx, out),
        RuleId::SecurityDeclared => rules::security_declared(ctx, out),
        RuleId::SecurityNoApiKeyInQuery => rules::security_no_api_key_in_query(ctx, out),
        RuleId::SecurityOAuth2Complete => rules::security_oauth2_complete(ctx, out),
    }
}

/// Resolve findings to diagnostics with source locations
pub fn resolve_diagnostics(
    findings: Vec<Finding>,
    span_db: &SpanDb,
    line_index: &LineIndex,
) -> Vec<Diagnostic> {
    let mut diagnostics: Vec<Diagnostic> = findings
        .into_iter()
        .filter_map(|f| {
            let (byte_span, is_alias) = span_db.resolve_value_span(&f.ptr)?;
            let range = line_index.range(byte_span);

            Some(Diagnostic {
                rule: f.rule,
                severity: f.severity,
                message: f.message,
                range,
                byte_span,
                fixes: f.fix.map(|fp| fp.edits).unwrap_or_default(),
                is_alias_location: is_alias,
            })
        })
        .collect();

    // Sort for deterministic output: by position, then rule, then message
    diagnostics.sort_by(|a, b| {
        a.byte_span
            .start
            .cmp(&b.byte_span.start)
            .then_with(|| a.rule.cmp(&b.rule))
            .then_with(|| a.message.cmp(&b.message))
    });

    diagnostics
}
