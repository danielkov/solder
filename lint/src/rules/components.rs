use oas3::spec::{ObjectOrReference, ObjectSchema};

use crate::{
    lint::{Finding, LintCtx, RuleId, Severity},
    model::escape_pointer_segment,
};

/// Reuse shared schemas via components/schemas (warn about complex inline schemas)
pub fn component_reuse_schemas(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(paths) = &ctx.spec.paths else {
        return;
    };

    for (path, path_item) in paths {
        let path_ptr = format!("/paths/{}", escape_pointer_segment(path));

        for (method, operation) in iter_operations(path_item) {
            let op_ptr = format!("{}/{}", path_ptr, method);

            // Check request body for complex inline schemas
            if let Some(ObjectOrReference::Object(rb)) = &operation.request_body {
                for (media_type_name, media_type) in &rb.content {
                    if let Some(ObjectOrReference::Object(schema)) = &media_type.schema
                        && is_complex_schema(schema)
                    {
                        out.push(Finding::new(
                                    RuleId::ComponentReuseSchemas,
                                    format!(
                                        "{}/requestBody/content/{}/schema",
                                        op_ptr,
                                        escape_pointer_segment(media_type_name)
                                    ),
                                    "Complex inline schema in request body should be moved to components/schemas",
                                ));
                    }
                }
            }

            // Check responses for complex inline schemas
            if let Some(responses) = &operation.responses {
                for (status_code, response) in responses {
                    if let ObjectOrReference::Object(resp) = response {
                        for (media_type_name, media_type) in &resp.content {
                            if let Some(ObjectOrReference::Object(schema)) = &media_type.schema
                                && is_complex_schema(schema)
                            {
                                out.push(Finding::new(
                                        RuleId::ComponentReuseSchemas,
                                        format!(
                                            "{}/responses/{}/content/{}/schema",
                                            op_ptr,
                                            status_code,
                                            escape_pointer_segment(media_type_name)
                                        ),
                                        "Complex inline schema in response should be moved to components/schemas",
                                    ));
                            }
                        }
                    }
                }
            }
        }
    }
}

/// No unused components
pub fn component_no_unused(ctx: &LintCtx, out: &mut Vec<Finding>) {
    let Some(components) = &ctx.spec.components else {
        return;
    };

    let used_refs = ctx.used_refs();

    // Check for unused schemas
    for name in components.schemas.keys() {
        let ref_path = format!("#/components/schemas/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/schemas/{}", name),
                    format!("Schema '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }

    // Check for unused parameters
    for name in components.parameters.keys() {
        let ref_path = format!("#/components/parameters/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/parameters/{}", name),
                    format!("Parameter '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }

    // Check for unused responses
    for name in components.responses.keys() {
        let ref_path = format!("#/components/responses/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/responses/{}", name),
                    format!("Response '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }

    // Check for unused request bodies
    for name in components.request_bodies.keys() {
        let ref_path = format!("#/components/requestBodies/{}", name);
        if !used_refs.contains(&ref_path) {
            out.push(
                Finding::new(
                    RuleId::ComponentNoUnused,
                    format!("/components/requestBodies/{}", name),
                    format!("RequestBody '{}' is defined but never referenced", name),
                )
                .with_severity(Severity::Info),
            );
        }
    }
}

/// Check if a schema is complex enough to warrant moving to components
fn is_complex_schema(schema: &ObjectSchema) -> bool {
    // Consider complex if:
    // - Has more than 3 properties
    // - Has nested objects
    // - Uses composition (allOf, oneOf, anyOf)

    let property_count = schema.properties.len();
    let uses_composition =
        !schema.all_of.is_empty() || !schema.one_of.is_empty() || !schema.any_of.is_empty();

    property_count > 3 || uses_composition
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
    fn test_component_reuse_schemas_complex_request_body() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                id:
                  type: string
                name:
                  type: string
                species:
                  type: string
                age:
                  type: integer
      responses:
        '200':
          description: OK
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentReuseSchemas);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::ComponentReuseSchemas
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Complex inline schema in request body should be moved to components/schemas"
        );

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::ComponentReuseSchemas
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Complex inline schema in request body should be moved to components/schemas"
        );
    }

    #[test]
    fn test_component_reuse_schemas_complex_response() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: getPets
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  name:
                    type: string
                  species:
                    type: string
                  age:
                    type: integer
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentReuseSchemas);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::ComponentReuseSchemas
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Complex inline schema in response should be moved to components/schemas"
        );

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::ComponentReuseSchemas
        );
        assert_eq!(
            validation.diagnostics[0].message,
            "Complex inline schema in response should be moved to components/schemas"
        );
    }

    #[test]
    fn test_component_reuse_schemas_simple_inline_ok() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                id:
                  type: string
                name:
                  type: string
      responses:
        '200':
          description: OK
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentReuseSchemas);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert!(validation.diagnostics.is_empty());

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_component_reuse_schemas_composition() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              allOf:
                - type: object
                  properties:
                    id:
                      type: string
      responses:
        '200':
          description: OK
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentReuseSchemas);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::ComponentReuseSchemas
        );

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].rule,
            RuleId::ComponentReuseSchemas
        );
    }

    #[test]
    fn test_component_no_unused_has_unused() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: getPets
      responses:
        '200':
          description: OK
components:
  schemas:
    Pet:
      type: object
      properties:
        name:
          type: string
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentNoUnused);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Schema 'Pet' is defined but never referenced"
        );

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Schema 'Pet' is defined but never referenced"
        );
    }

    #[test]
    fn test_component_no_unused_all_used() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: getPets
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
components:
  schemas:
    Pet:
      type: object
      properties:
        name:
          type: string
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentNoUnused);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert!(validation.diagnostics.is_empty());

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_component_no_unused_parameters() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: getPets
      responses:
        '200':
          description: OK
components:
  parameters:
    LimitParam:
      name: limit
      in: query
      schema:
        type: integer
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentNoUnused);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Parameter 'LimitParam' is defined but never referenced"
        );

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Parameter 'LimitParam' is defined but never referenced"
        );
    }

    #[test]
    fn test_component_no_unused_responses() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    get:
      operationId: getPets
      responses:
        '200':
          description: OK
components:
  responses:
    ErrorResponse:
      description: Error response
      content:
        application/json:
          schema:
            type: object
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentNoUnused);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Response 'ErrorResponse' is defined but never referenced"
        );

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Response 'ErrorResponse' is defined but never referenced"
        );
    }

    #[test]
    fn test_component_no_unused_request_bodies() {
        let spec_yaml = r#"
openapi: 3.0.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      responses:
        '200':
          description: OK
components:
  requestBodies:
    PetBody:
      content:
        application/json:
          schema:
            type: object
"#;

        let mut ruleset = RuleSet::new();
        ruleset.enable(RuleId::ComponentNoUnused);

        let validation = lint_with_ruleset(spec_yaml, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "RequestBody 'PetBody' is defined but never referenced"
        );

        // Test with JSON as well
        let spec_json = yaml_to_json(spec_yaml);
        let validation = lint_with_ruleset(&spec_json, ruleset).unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "RequestBody 'PetBody' is defined but never referenced"
        );
    }

    #[test]
    fn test_component_no_unused_all_used_2() {
        let yaml = r#"
openapi: 3.1.0
info:
  title: Test API
  version: 1.0.0
paths:
  /pets:
    post:
      operationId: createPet
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
      responses:
        '201':
          description: Created
components:
  schemas:
    Pet:
      type: object
      properties:
        name:
          type: string
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ComponentNoUnused.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());

        // Should also pass with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ComponentNoUnused.as_str()]),
        )
        .unwrap();
        assert!(validation.diagnostics.is_empty());
    }

    #[test]
    fn test_component_no_unused_has_unused_2() {
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
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
components:
  schemas:
    Pet:
      type: object
      properties:
        name:
          type: string
    UnusedSchema:
      type: object
"#;
        let validation = lint_with_ruleset(
            yaml,
            RuleSet::from_slice(&[RuleId::ComponentNoUnused.as_str()]),
        )
        .unwrap();

        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(validation.diagnostics[0].rule, RuleId::ComponentNoUnused);
        assert_eq!(
            validation.diagnostics[0].message,
            "Schema 'UnusedSchema' is defined but never referenced"
        );

        // Should also fail with JSON input
        let json = yaml_to_json(yaml);
        let validation = lint_with_ruleset(
            &json,
            RuleSet::from_slice(&[RuleId::ComponentNoUnused.as_str()]),
        )
        .unwrap();
        assert_eq!(validation.diagnostics.len(), 1);
        assert_eq!(
            validation.diagnostics[0].message,
            "Schema 'UnusedSchema' is defined but never referenced"
        );
    }
}
