0. Baseline validation rules (hard fail)

These are non-negotiable: fail fast before any style/design linting.

OAS-VAL-001 — Document parses and validates against the declared OpenAPI version (error)

Validate as OpenAPI 3.x.

For 3.1 specifically, ensure JSON Schema dialect handling is correct (3.1 aligns with JSON Schema 2020-12 semantics).
OpenAPI Initiative Publications
+1

OAS-VAL-002 — No unresolved $ref pointers (error)

Detect missing local refs and missing external refs (and optionally enforce a “no external refs” policy unless explicitly allowed).

OAS-VAL-003 — No illegal sibling keywords next to $ref (policy-dependent) (error/warn)

Many toolchains still expect $ref to be “standalone”; decide whether to enforce “no siblings” for maximum interoperability.

OAS-VAL-004 — Keys are unique where required and maps are well-formed (error)

e.g., unique operationId, unique schema names in components, unique parameters by (name,in).

1. Document metadata and platform hygiene

DOC-001 — info.title and info.version are present and non-empty (error)
DOC-002 — info.description is present and meaningful (warn)
DOC-003 — contact and license are present (for public APIs) (warn)
DOC-004 — servers exists and uses HTTPS in production (error/warn)

Fail if any production server URL is http:// (allow localhost exceptions).

DOC-005 — Entry document naming convention (info)

Recommend openapi.yaml/openapi.json.
swagger.io

DOC-006 — Tags are defined globally and reused (warn)

If an operation uses a tag, it must exist in root tags[].

2. Paths and path templating correctness

PATH-001 — Path templating matches declared parameters (error)

Every {param} segment MUST correspond to a path parameter on the PathItem or Operation.
OpenAPI Initiative Publications
+1

PATH-002 — Every in: path parameter is required: true (error)
PATH-003 — No unused path parameters (error)

Parameter declared but not present in the path template.

PATH-004 — No ambiguous or duplicate templating (error)

Same path with differing template names that collide structurally (e.g., /users/{id} and /users/{userId}).

PATH-005 — Normalise path style (warn)

No trailing slash (except root), no //, no spaces, no uppercase, avoid file extensions (e.g., .json).

PATH-006 — Avoid verbs in resource paths (warn)

Prefer nouns; if you allow “actions”, constrain them (e.g., POST /users/{id}:activate or POST /users/{id}/activation—pick one convention and enforce it).

3. Operations: completeness, consistency, and HTTP semantics

OP-001 — Every operation has operationId (error)
OP-002 — operationId is unique across the document (error)
OP-003 — Every operation has summary (and ideally description) (warn)

This aligns with documentation-focused rulesets (Spectral’s documentation ruleset exists specifically to enforce “you’re documenting enough”).
GitHub

OP-004 — Every operation has at least one response (error)
OP-005 — 2xx response is defined for success (error)

Define the expected status code for each method (see below).

OP-006 — Enforce method semantics (warn/error depending on strictness)

GET/DELETE should not define a request body (policy choice; some clients break).

POST used for creation or non-idempotent actions.

PUT should be idempotent and typically target a specific resource URI.

PATCH should define a patch media type policy (see request bodies section).
(General REST best-practice guidance supports keeping consistent semantics and evolvability.)
Microsoft Learn
+1

OP-007 — Enforce canonical success codes per method (warn)

GET: 200 (or 206 if partial content is a supported pattern)

POST create: 201 (and Location header)

PUT/PATCH: 200 or 204

DELETE: 204 (or 200 with body, but be consistent)

OP-008 — deprecated: true must include a replacement note (warn)

Require description to mention alternative endpoint/version.

4. Parameters (path/query/header/cookie) rules

PAR-001 — Parameter names are consistent case (warn)

Pick one: camelCase for query params, X-Header-Case for headers, etc.

PAR-002 — Query parameters must declare schema and type (error)
PAR-003 — No “free-form” query params unless explicitly allowed (warn)

Ban additionalProperties: true for query objects unless you have a strong reason.

PAR-004 — Enum parameters must list allowed values and document meaning (warn)
PAR-005 — Date/time formats must be explicit (format: date / date-time) (warn)

PAR-006 — Pagination params must follow one approved scheme (warn/error)

Enforce either offset/limit or cursor pagination, not both, unless an API-wide policy says otherwise. Pagination consistency is a widely recommended API design concern.
opensource.zalando.com
+1

PAR-007 — Sorting/filtering conventions are consistent (warn)

Example: sort=field,-field2, filtering as filter[field]=value or a consistent alternative—choose and enforce.

PAR-008 — Headers use correct location and casing (warn)

Disallow “API keys in query parameters” if you support API key auth (see security rules).

5. Request bodies and content negotiation

REQ-001 — requestBody defines content with at least one media type (error)
REQ-002 — JSON bodies use application/json (or application/\*+json) (warn)
REQ-003 — Each media type provides a schema (error)
REQ-004 — Provide examples (either example or examples) for request bodies (warn)

Especially for public APIs; this overlaps with documentation rulesets.
GitHub

REQ-005 — PATCH policy is consistent (warn)

If you use JSON Merge Patch: enforce application/merge-patch+json.

If you use JSON Patch: enforce application/json-patch+json.

If you use partial resource: enforce the expected schema constraints.

REQ-006 — Form/multipart rules (if used) (warn/error)

If multipart/form-data, ensure each part is defined and binary file parts use appropriate schema (type: string, format: binary).

6. Responses: structure, errors, and headers

RES-001 — Every response has a description (error)
RES-002 — Success responses define schemas for bodies (when body exists) (error)
RES-003 — No undocumented empty bodies (warn)

If you return 204, ensure no body content is declared.

RES-004 — Standard error model is consistent (warn/error)

Enforce a single error envelope across the API (e.g., { code, message, details, traceId } or RFC7807-style Problem Details—your choice). Consistency is a core guideline theme.
opensource.zalando.com
+1

RES-005 — Define common error statuses for operations (warn)

Typically: 400, 401, 403, 404, 409, 422, 429, 5xx.

You can tune by operation type.

RES-006 — Rate limiting headers documented if 429 is used (warn)

e.g., Retry-After, plus your chosen limit headers.

RES-007 — Location header required on 201 create (warn)

7. Schema quality rules (JSON Schema / OpenAPI Schema Objects)

OpenAPI 3.1’s schema objects align closely with JSON Schema 2020-12, so schema linting has real payoff.
OpenAPI Initiative Publications
+1

SCH-001 — Every schema has type (unless it’s a $ref, oneOf/allOf/anyOf, or boolean schema) (warn)
SCH-002 — Objects define properties (or explicitly allow additional properties) (warn)
SCH-003 — additionalProperties policy is explicit for objects (warn)

Enforce additionalProperties: false by default if you want strict contracts.

SCH-004 — Required fields are meaningful and consistent with nullable / unions (warn)
SCH-005 — Enums define type and have unique values (error)
SCH-006 — String constraints use minLength, maxLength, pattern where appropriate (info/warn)
SCH-007 — Numeric constraints use minimum/maximum, and multipleOf if relevant (info/warn)

SCH-008 — Arrays define items (error)
SCH-009 — Arrays define maxItems for unbounded lists (policy) (warn)

Especially for non-paginated responses—pairs with pagination rules.

SCH-010 — Use readOnly / writeOnly correctly (warn)

e.g., readOnly fields should not be required in request schemas (and vice versa).

SCH-011 — Composition rules are disciplined (warn)

If oneOf is used, enforce discriminator usage when the API expects polymorphism.

Avoid ambiguous overlaps in oneOf branches (hard to validate/serialize).

SCH-012 — Schema names and property names follow conventions (warn)

e.g., components schemas are PascalCase, properties are camelCase (or your standard).

SCH-013 — No “any” schemas unless explicitly approved (warn/error)

Flag schemas with no constraints (e.g., {}) or additionalProperties: true without justification.

8. Components, reuse, and maintainability rules

CMP-001 — Reuse shared schemas via components/schemas (no repeated inline complex schemas) (warn)

Define what counts as “complex” (e.g., object with >N properties).

CMP-002 — Shared parameters and responses are componentised (info/warn)

e.g., X-Request-Id header, standard errors, pagination params.

CMP-003 — Component keys are unique and stable (error)

No accidental duplicates via merging tooling.

CMP-004 — No unused components (info)

Helps keep specs lean.

9. Security rules

SEC-001 — Define components.securitySchemes for every referenced scheme (error)
SEC-002 — Every operation declares security or explicitly opts out (warn/error)

Require explicit security: [] for public endpoints so “public” is a deliberate choice.

SEC-003 — Production servers must be HTTPS when security is used (error)

SEC-004 — API keys are not passed via query parameters (error)

Prefer headers. (Even when permitted by spec, it’s generally discouraged operationally.)

SEC-005 — OAuth2 flows are complete and scopes are defined (error)
SEC-006 — Scope usage is consistent (warn)

If an operation requires OAuth2, require at least one scope (unless your policy allows scope-less tokens).

10. Documentation and “DX” rules (high leverage)

This is where you can materially improve usability. Spectral explicitly provides a documentation-focused ruleset concept you can emulate: enforce the presence and quality of descriptions/examples so docs render well.
GitHub

DOCX-001 — summary and description minimum length thresholds (warn)
DOCX-002 — Every parameter has description (warn)
DOCX-003 — Every request/response body has examples (warn)
DOCX-004 — Examples validate against schemas (error)
DOCX-005 — Tag descriptions exist for public APIs (warn)
DOCX-006 — externalDocs present for auth / pagination / errors (policy) (info/warn)

11. Consistency rules across the API surface

CON-001 — Naming consistency for IDs (warn)

Pick one of: id, {resource}Id, or UUID-like; enforce across schemas and paths.

CON-002 — Consistent pagination envelope (warn)

If cursor-based: nextCursor and hasMore, etc.

If offset: total, limit, offset, etc.
(Consistency is a core theme in design guidelines.)
opensource.zalando.com
+1

CON-003 — Consistent date/time representation (warn)

Always date-time in RFC3339, always UTC or explicitly offset; enforce format and description.

CON-004 — Consistent error envelope (warn/error)

Same structure and same fields everywhere.

CON-005 — Consistent operationId style (warn)

e.g., listUsers, getUser, createUser, updateUser, deleteUser.

12. Evolution and backward-compatibility rules (optional but valuable)

These are easiest if your linter can diff “current vs previous” specs.

EVO-001 — No breaking changes without version bump (error)

Breaking changes include: removing endpoints, removing response fields, narrowing types, changing requiredness, changing enum sets, etc.

EVO-002 — Deprecations require timelines (warn)

If deprecated: true, require a deprecation date and removal date in description or an extension field.

EVO-003 — Additive changes are allowed but must be documented (info/warn)

13. Interoperability / “toolchain-safe OpenAPI” rules (pragmatic)

These are not “spec correctness”, but they prevent downstream generator/doc tooling pain.

INT-001 — Avoid complex oneOf/anyOf without discriminator (warn)
INT-002 — Avoid allOf stacking that produces ambiguous required fields (warn)
INT-003 — Avoid deep recursion/cycles unless explicitly supported (warn)
INT-004 — Constrain format to known values (warn)

Flag unknown formats unless allowlisted.

Recommended severity profile (so this is usable day-to-day)

Errors (block CI): validation, $ref resolution, path templating correctness, required path params, missing schemas for bodies, missing response descriptions, security scheme resolution.

Warnings (fail PR after grace period): operationId uniqueness, missing summaries/descriptions, inconsistent pagination/error envelope, lack of examples, HTTPS enforcement.

Info (non-blocking): unused components, naming conventions, suggested metadata.

Rulesets:

Implement as separate rule sets so teams can adopt incrementally:

- oas-core (VAL/PATH/OP/RES hard correctness)
- security
- docs (DX rules)
- style (naming and conventions)
- evolution (diff-based breaking change checks)
