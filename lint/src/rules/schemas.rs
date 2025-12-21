use oas3::spec::{ObjectOrReference, ObjectSchema};
use rustc_hash::FxHashSet;

use crate::lint::{Finding, LintCtx, RuleId};

/// Every schema should have type (unless it's a $ref, oneOf/allOf/anyOf, or boolean schema)
pub fn schema_type_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            if let ObjectOrReference::Object(s) = schema {
                check_schema_type(s, &format!("/components/schemas/{}", name), out);
            }
        }
    }
}

fn check_schema_type(schema: &ObjectSchema, ptr: &str, out: &mut Vec<Finding>) {
    // Skip if it uses composition (oneOf, allOf, anyOf)
    let uses_composition =
        !schema.one_of.is_empty() || !schema.all_of.is_empty() || !schema.any_of.is_empty();

    if uses_composition {
        return;
    }

    // Check if type is defined
    if schema.schema_type.is_none() {
        out.push(Finding::new(
            RuleId::SchemaTypeRequired,
            format!("{}/type", ptr),
            format!("Schema at {} should define a type", ptr),
        ));
    }
}

/// Objects should define properties (or explicitly allow additional properties)
pub fn schema_object_properties_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            if let ObjectOrReference::Object(s) = schema {
                check_object_properties(s, &format!("/components/schemas/{}", name), out);
            }
        }
    }
}

fn check_object_properties(schema: &ObjectSchema, ptr: &str, out: &mut Vec<Finding>) {
    // Check if it's an object type
    let is_object = schema
        .schema_type
        .as_ref()
        .is_some_and(|t| t.contains(oas3::spec::SchemaType::Object));

    if !is_object {
        return;
    }

    // Skip if using composition
    if !schema.one_of.is_empty() || !schema.all_of.is_empty() || !schema.any_of.is_empty() {
        return;
    }

    // Check if properties are defined or additionalProperties is explicitly set
    let has_properties = !schema.properties.is_empty();
    let has_additional_props = schema.additional_properties.is_some();

    if !has_properties && !has_additional_props {
        out.push(Finding::new(
            RuleId::SchemaObjectPropertiesRequired,
            ptr,
            format!(
                "Object schema at {} should define properties or additionalProperties",
                ptr
            ),
        ));
    }
}

/// additionalProperties policy should be explicit for objects
pub fn schema_additional_properties_explicit(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            if let ObjectOrReference::Object(s) = schema {
                check_additional_properties(s, &format!("/components/schemas/{}", name), out);
            }
        }
    }
}

fn check_additional_properties(schema: &ObjectSchema, ptr: &str, out: &mut Vec<Finding>) {
    let is_object = schema
        .schema_type
        .as_ref()
        .is_some_and(|t| t.contains(oas3::spec::SchemaType::Object));

    if !is_object {
        return;
    }

    // Skip if using composition
    if !schema.one_of.is_empty() || !schema.all_of.is_empty() || !schema.any_of.is_empty() {
        return;
    }

    // Only check if there are properties but no additionalProperties
    if !schema.properties.is_empty() && schema.additional_properties.is_none() {
        out.push(Finding::new(
            RuleId::SchemaAdditionalPropertiesExplicit,
            ptr,
            format!(
                "Object schema at {} should explicitly set additionalProperties",
                ptr
            ),
        ));
    }
}

/// Enums must define type and have unique values
pub fn schema_enum_valid(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            if let ObjectOrReference::Object(s) = schema {
                check_enum_valid(s, &format!("/components/schemas/{}", name), out);
            }
        }
    }
}

fn check_enum_valid(schema: &ObjectSchema, ptr: &str, out: &mut Vec<Finding>) {
    let enum_values = &schema.enum_values;

    if enum_values.is_empty() {
        return;
    }

    // Check for type
    if schema.schema_type.is_none() {
        out.push(Finding::new(
            RuleId::SchemaEnumValid,
            format!("{}/type", ptr),
            format!("Enum schema at {} must define a type", ptr),
        ));
    }

    // Check for unique values
    let mut seen: FxHashSet<String> = FxHashSet::default();
    for value in enum_values {
        let value_str = format!("{:?}", value);
        if seen.contains(&value_str) {
            out.push(Finding::new(
                RuleId::SchemaEnumValid,
                format!("{}/enum", ptr),
                format!("Enum at {} has duplicate value: {}", ptr, value_str),
            ));
        }
        seen.insert(value_str);
    }
}

/// Arrays must define items
pub fn schema_array_items_required(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            if let ObjectOrReference::Object(s) = schema {
                check_array_items(s, &format!("/components/schemas/{}", name), out);
            }
        }
    }
}

fn check_array_items(schema: &ObjectSchema, ptr: &str, out: &mut Vec<Finding>) {
    let is_array = schema
        .schema_type
        .as_ref()
        .is_some_and(|t| t.contains(oas3::spec::SchemaType::Array));

    if is_array && schema.items.is_none() {
        out.push(Finding::new(
            RuleId::SchemaArrayItemsRequired,
            format!("{}/items", ptr),
            format!("Array schema at {} must define items", ptr),
        ));
    }
}

/// readOnly/writeOnly should be used correctly
pub fn schema_read_write_only_correct(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            if let ObjectOrReference::Object(s) = schema {
                check_read_write_only(s, &format!("/components/schemas/{}", name), out);
            }
        }
    }
}

fn check_read_write_only(schema: &ObjectSchema, ptr: &str, out: &mut Vec<Finding>) {
    // Check properties for readOnly/writeOnly conflicts
    for (prop_name, prop) in &schema.properties {
        if let ObjectOrReference::Object(prop_schema) = prop {
            let is_read_only = prop_schema.read_only.unwrap_or(false);
            let is_write_only = prop_schema.write_only.unwrap_or(false);

            if is_read_only && is_write_only {
                out.push(Finding::new(
                    RuleId::SchemaReadWriteOnlyCorrect,
                    format!("{}/properties/{}", ptr, prop_name),
                    format!(
                        "Property '{}' cannot be both readOnly and writeOnly",
                        prop_name
                    ),
                ));
            }

            // Check if readOnly property is in required list (potential issue for requests)
            if is_read_only && schema.required.contains(&prop_name.clone()) {
                out.push(Finding::new(
                        RuleId::SchemaReadWriteOnlyCorrect,
                        format!("{}/properties/{}", ptr, prop_name),
                        format!(
                            "readOnly property '{}' should not be in required list (affects request validation)",
                            prop_name
                        ),
                    ));
            }
        }
    }
}

/// Schema/property names should follow conventions (PascalCase for schemas, camelCase for properties)
pub fn schema_naming_conventions(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            // Check schema name is PascalCase
            if !is_pascal_case(name) {
                out.push(Finding::new(
                    RuleId::SchemaNamingConventions,
                    format!("/components/schemas/{}", name),
                    format!("Schema name '{}' should be PascalCase", name),
                ));
            }

            // Check property names
            if let ObjectOrReference::Object(s) = schema {
                for prop_name in s.properties.keys() {
                    if !is_camel_case(prop_name) && !is_snake_case(prop_name) {
                        out.push(Finding::new(
                            RuleId::SchemaNamingConventions,
                            format!("/components/schemas/{}/properties/{}", name, prop_name),
                            format!(
                                "Property name '{}' should be camelCase or snake_case",
                                prop_name
                            ),
                        ));
                    }
                }
            }
        }
    }
}

/// No "any" schemas (empty {} or just additionalProperties: true)
pub fn schema_no_any(ctx: &LintCtx, out: &mut Vec<Finding>) {
    if let Some(components) = &ctx.spec.components {
        for (name, schema) in &components.schemas {
            if let ObjectOrReference::Object(s) = schema {
                check_any_schema(s, &format!("/components/schemas/{}", name), out);
            }
        }
    }
}

fn check_any_schema(schema: &ObjectSchema, ptr: &str, out: &mut Vec<Finding>) {
    // Check for empty schema (no type, no properties, no composition)
    let is_empty = schema.schema_type.is_none()
        && schema.properties.is_empty()
        && schema.one_of.is_empty()
        && schema.all_of.is_empty()
        && schema.any_of.is_empty()
        && schema.enum_values.is_empty()
        && schema.items.is_none();

    if is_empty {
        out.push(Finding::new(
            RuleId::SchemaNoAny,
            ptr,
            format!(
                "Schema at {} has no constraints (accepts any value); add type or other constraints",
                ptr
            ),
        ));
    }
}

fn is_pascal_case(s: &str) -> bool {
    if s.is_empty() {
        return false;
    }
    let first = s.chars().next().unwrap();
    first.is_uppercase() && !s.contains('_') && !s.contains('-')
}

fn is_camel_case(s: &str) -> bool {
    if s.is_empty() {
        return false;
    }
    let first = s.chars().next().unwrap();
    first.is_lowercase() && !s.contains('_') && !s.contains('-')
}

fn is_snake_case(s: &str) -> bool {
    if s.is_empty() {
        return false;
    }
    s.chars()
        .all(|c| c.is_lowercase() || c == '_' || c.is_ascii_digit())
}
