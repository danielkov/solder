//! Emit GenIR types as TypeScript AST modules.

use codegen::GenIr;
use ir::gen_ir::{
    AliasTarget, Composite, Literal, Primitive, StableId, TypeDecl, TypeKind, TypeMod, TypeRef,
};

use crate::ast::*;
use crate::imports::ImportCollector;

/// Emit a single type declaration as a complete module.
pub fn emit_type(type_decl: &TypeDecl, ir: &GenIr) -> Module {
    match &type_decl.kind {
        TypeKind::Struct { fields, .. } => emit_struct(type_decl, fields, ir),
        TypeKind::Enum { values, .. } => emit_enum(type_decl, values, ir),
        TypeKind::Union { variants, .. } => emit_union(type_decl, variants, ir),
        TypeKind::Alias { aliased } => emit_alias(type_decl, aliased, ir),
    }
}

/// Emit the types/index.ts re-export file.
pub fn emit_type_index(type_names: &[String]) -> Module {
    let mut items = Vec::new();

    items.push(Item::Comment(
        "Generated types from OpenAPI specification".into(),
    ));
    items.push(Item::BlankLine);
    items.push(Item::ReExport("./errors".into()));

    for name in type_names {
        items.push(Item::ReExport(format!("./{}", name)));
        items.push(Item::NamedReExport {
            names: vec![format!("{}Schema", name)],
            source: format!("./{}", name),
        });
    }

    Module {
        imports: Vec::new(),
        items,
    }
}

/// Emit the errors.ts module.
pub fn emit_errors() -> Module {
    let members = vec![
        ClassMember::Field(ClassField::new("status").readonly().typed(TsType::number())),
        ClassMember::Field(ClassField::new("body").readonly().typed(TsType::string())),
        ClassMember::BlankLine,
        ClassMember::Constructor(ConstructorDecl {
            params: vec![
                Param::new("status", TsType::number()),
                Param::new("body", TsType::string()),
            ],
            body: vec![
                Expr::call(
                    "super",
                    vec![Expr::TemplateLit(vec![
                        TemplPart::Str("Unexpected error ".into()),
                        TemplPart::Expr(Expr::id("status")),
                        TemplPart::Str(": ".into()),
                        TemplPart::Expr(Expr::id("body")),
                    ])],
                )
                .into_stmt(),
                Stmt::assign(Expr::this_dot("name"), Expr::str("UnexpectedError")),
                Stmt::assign(Expr::this_dot("status"), Expr::id("status")),
                Stmt::assign(Expr::this_dot("body"), Expr::id("body")),
            ],
        }),
    ];

    let class = ClassDecl {
        name: "UnexpectedError".into(),
        exported: true,
        docs: Some(JsDoc {
            lines: vec![
                JsDocLine::Text(
                    "Thrown when the API returns an unexpected error status code,".into(),
                ),
                JsDocLine::Text("or when JSON parsing fails for an expected error.".into()),
            ],
        }),
        extends: Some("globalThis.Error".into()),
        members,
    };

    Module {
        imports: Vec::new(),
        items: vec![
            Item::Comment("Generated API error classes".into()),
            Item::BlankLine,
            Item::Class(class),
        ],
    }
}

// ── Struct → Interface + Schema ──────────────────────────────────────

fn emit_struct(type_decl: &TypeDecl, fields: &[ir::gen_ir::Field], ir: &GenIr) -> Module {
    let mut imports = ImportCollector::new();

    imports.add_value("object", "@speakeasy-api/tonic");
    imports.add_value("typed", "@speakeasy-api/tonic");
    imports.add_type("TypedSchema", "@speakeasy-api/tonic");

    let has_optional = fields.iter().any(|f| f.ty.optional);
    if has_optional {
        imports.add_value("optional", "@speakeasy-api/tonic");
    }

    let iface_fields: Vec<InterfaceField> = fields
        .iter()
        .map(|f| {
            let ty = if let Some(const_val) = &f.const_value {
                literal_to_ts_type(const_val)
            } else {
                type_ref_to_ts_type(&f.ty, ir)
            };

            InterfaceField {
                name: f.name.camel.clone(),
                optional: f.ty.optional,
                ty,
                docs: docs_to_jsdoc(&f.docs),
            }
        })
        .collect();

    // Build schema object entries
    let schema_entries: Vec<ObjEntry> = fields
        .iter()
        .map(|f| {
            let schema_expr = if let Some(const_val) = &f.const_value {
                literal_to_schema_expr(const_val, &mut imports)
            } else {
                type_ref_to_schema_expr(&f.ty, ir, &mut imports)
            };

            let expr = if f.ty.optional {
                let references_custom = field_references_custom_type(&f.ty, ir);
                if references_custom {
                    // Use getter pattern for optional custom type references
                    return ObjEntry::Getter(
                        f.name.camel.clone(),
                        vec![Stmt::Return(Some(Expr::call(
                            "optional",
                            vec![schema_expr],
                        )))],
                    );
                }
                Expr::call("optional", vec![schema_expr])
            } else {
                schema_expr
            };

            ObjEntry::kv(f.name.camel.clone(), expr)
        })
        .collect();

    let schema_obj = Expr::call("object", vec![Expr::Object(schema_entries)]);
    let typed_call = Expr::Call(
        Box::new(Expr::Raw(format!("typed<{}>", type_decl.name.pascal))),
        vec![schema_obj],
    );

    let mut items = Vec::new();

    items.push(Item::Interface(InterfaceDecl {
        name: type_decl.name.pascal.clone(),
        exported: true,
        docs: docs_to_jsdoc(&type_decl.docs),
        fields: iface_fields,
    }));

    items.push(Item::BlankLine);

    items.push(Item::ConstDecl(ConstDecl {
        name: format!("{}Schema", type_decl.name.pascal),
        exported: true,
        ty_annotation: Some(TsType::Generic(
            "TypedSchema".into(),
            vec![TsType::named(&type_decl.name.pascal)],
        )),
        value: typed_call,
    }));

    Module {
        imports: imports.into_decls(),
        items,
    }
}

// ── Enum → Type Union + Schema + Values ──────────────────────────────

fn emit_enum(type_decl: &TypeDecl, values: &[ir::gen_ir::EnumValue], _ir: &GenIr) -> Module {
    let mut imports = ImportCollector::new();
    imports.add_value("typed", "@speakeasy-api/tonic");
    imports.add_type("TypedSchema", "@speakeasy-api/tonic");
    imports.add_value("literal", "@speakeasy-api/tonic");
    imports.add_value("union", "@speakeasy-api/tonic");

    // Type alias: union of literal types
    let union_types: Vec<TsType> = values
        .iter()
        .map(|v| TsType::Literal(render_literal(&v.wire)))
        .collect();

    // Schema: union(literal(...), ...)
    let schema_args: Vec<Expr> = values
        .iter()
        .map(|v| Expr::call("literal", vec![literal_to_expr(&v.wire)]))
        .collect();

    let schema_expr = Expr::call("union", schema_args);
    let typed_call = Expr::Call(
        Box::new(Expr::Raw(format!("typed<{}>", type_decl.name.pascal))),
        vec![schema_expr],
    );

    // Values object: const { FOO: 'foo' as const, ... } as const
    let value_entries: Vec<ObjEntry> = values
        .iter()
        .map(|v| ObjEntry::kv(v.name.upper.clone(), literal_to_expr(&v.wire).as_const()))
        .collect();

    let mut items = Vec::new();

    items.push(Item::TypeAlias(TypeAliasDecl {
        name: type_decl.name.pascal.clone(),
        exported: true,
        docs: docs_to_jsdoc(&type_decl.docs),
        ty: TsType::union(union_types),
    }));

    items.push(Item::BlankLine);

    items.push(Item::ConstDecl(ConstDecl {
        name: format!("{}Schema", type_decl.name.pascal),
        exported: true,
        ty_annotation: Some(TsType::Generic(
            "TypedSchema".into(),
            vec![TsType::named(&type_decl.name.pascal)],
        )),
        value: typed_call,
    }));

    items.push(Item::BlankLine);

    items.push(Item::Raw(format!(
        "/**\n * Enum values for {}.\n * Use these constants for type-safe comparisons.\n */",
        type_decl.name.pascal
    )));

    items.push(Item::ConstDecl(ConstDecl {
        name: type_decl.name.pascal.clone(),
        exported: true,
        ty_annotation: None,
        value: Expr::Object(value_entries).as_const(),
    }));

    Module {
        imports: imports.into_decls(),
        items,
    }
}

// ── Union → Type Alias + Schema ──────────────────────────────────────

fn emit_union(type_decl: &TypeDecl, variants: &[ir::gen_ir::Variant], ir: &GenIr) -> Module {
    let mut imports = ImportCollector::new();
    imports.add_value("typed", "@speakeasy-api/tonic");
    imports.add_type("TypedSchema", "@speakeasy-api/tonic");
    imports.add_value("union", "@speakeasy-api/tonic");

    let union_types: Vec<TsType> = variants
        .iter()
        .map(|v| type_ref_to_ts_type(&v.ty, ir))
        .collect();

    let schema_variants: Vec<Expr> = variants
        .iter()
        .map(|v| type_ref_to_schema_expr(&v.ty, ir, &mut imports))
        .collect();

    let schema_expr = Expr::call("union", schema_variants);
    let typed_call = Expr::Call(
        Box::new(Expr::Raw(format!("typed<{}>", type_decl.name.pascal))),
        vec![schema_expr],
    );

    Module {
        imports: imports.into_decls(),
        items: vec![
            Item::TypeAlias(TypeAliasDecl {
                name: type_decl.name.pascal.clone(),
                exported: true,
                docs: docs_to_jsdoc(&type_decl.docs),
                ty: TsType::union(union_types),
            }),
            Item::BlankLine,
            Item::ConstDecl(ConstDecl {
                name: format!("{}Schema", type_decl.name.pascal),
                exported: true,
                ty_annotation: Some(TsType::Generic(
                    "TypedSchema".into(),
                    vec![TsType::named(&type_decl.name.pascal)],
                )),
                value: typed_call,
            }),
        ],
    }
}

// ── Alias → Type Alias + Schema ──────────────────────────────────────

fn emit_alias(type_decl: &TypeDecl, aliased: &AliasTarget, ir: &GenIr) -> Module {
    let mut imports = ImportCollector::new();
    imports.add_value("typed", "@speakeasy-api/tonic");
    imports.add_type("TypedSchema", "@speakeasy-api/tonic");

    let ts_type = alias_target_to_ts_type(aliased, ir);
    let schema_expr = alias_target_to_schema_expr(aliased, ir, &mut imports);

    let typed_call = Expr::Call(
        Box::new(Expr::Raw(format!("typed<{}>", type_decl.name.pascal))),
        vec![schema_expr],
    );

    Module {
        imports: imports.into_decls(),
        items: vec![
            Item::TypeAlias(TypeAliasDecl {
                name: type_decl.name.pascal.clone(),
                exported: true,
                docs: docs_to_jsdoc(&type_decl.docs),
                ty: ts_type,
            }),
            Item::BlankLine,
            Item::ConstDecl(ConstDecl {
                name: format!("{}Schema", type_decl.name.pascal),
                exported: true,
                ty_annotation: Some(TsType::Generic(
                    "TypedSchema".into(),
                    vec![TsType::named(&type_decl.name.pascal)],
                )),
                value: typed_call,
            }),
        ],
    }
}

// ── Type conversion helpers ──────────────────────────────────────────

pub fn type_ref_to_ts_type(type_ref: &TypeRef, ir: &GenIr) -> TsType {
    let base = if let Some(type_decl) = ir.types.get(&type_ref.target) {
        TsType::named(&type_decl.name.pascal)
    } else {
        match &type_ref.target {
            StableId::Primitive(p) => primitive_to_ts_type(*p),
            StableId::Named(_) => TsType::any(),
        }
    };

    let mut result = base;
    for modifier in &type_ref.modifiers {
        result = match modifier {
            TypeMod::List => TsType::Array(Box::new(result)),
            TypeMod::Set => TsType::Generic("Set".into(), vec![result]),
            TypeMod::Map(value_type) => {
                TsType::record(TsType::string(), type_ref_to_ts_type(value_type, ir))
            }
            _ => result,
        };
    }

    if type_ref.nullable {
        result = TsType::union(vec![result, TsType::Named("null".into())]);
    }

    result
}

fn primitive_to_ts_type(p: Primitive) -> TsType {
    match p {
        Primitive::Any => TsType::any(),
        Primitive::Bool => TsType::boolean(),
        Primitive::I32 | Primitive::I64 | Primitive::F32 | Primitive::F64 | Primitive::Decimal => {
            TsType::number()
        }
        Primitive::String | Primitive::Uuid | Primitive::Date | Primitive::DateTime => {
            TsType::string()
        }
        Primitive::Bytes => TsType::Named("Uint8Array".into()),
    }
}

fn alias_target_to_ts_type(target: &AliasTarget, ir: &GenIr) -> TsType {
    match target {
        AliasTarget::Primitive(p) => primitive_to_ts_type(*p),
        AliasTarget::Composite(c) => composite_to_ts_type(c, ir),
        AliasTarget::Reference(type_ref) => type_ref_to_ts_type(type_ref, ir),
    }
}

fn composite_to_ts_type(c: &Composite, ir: &GenIr) -> TsType {
    match c {
        Composite::List(inner) => TsType::Array(Box::new(type_ref_to_ts_type(inner, ir))),
        Composite::Map { value, .. } => {
            TsType::record(TsType::string(), type_ref_to_ts_type(value, ir))
        }
        Composite::Tuple(types) => {
            // TypeScript tuple: [A, B, C]
            let ts_types: Vec<TsType> = types.iter().map(|t| type_ref_to_ts_type(t, ir)).collect();
            TsType::Literal(format!(
                "[{}]",
                ts_types
                    .iter()
                    .map(crate::lower::render_ts_type)
                    .collect::<Vec<_>>()
                    .join(", ")
            ))
        }
    }
}

pub fn type_ref_to_schema_expr(
    type_ref: &TypeRef,
    ir: &GenIr,
    imports: &mut ImportCollector,
) -> Expr {
    let base = if let Some(type_decl) = ir.types.get(&type_ref.target) {
        let name = &type_decl.name.pascal;
        imports.add_local_type(name, format!("./{}", name));
        Expr::id(format!("{}Schema", name))
    } else {
        match &type_ref.target {
            StableId::Primitive(p) => primitive_to_schema_expr(*p, imports),
            StableId::Named(_) => {
                imports.add_value("unknown", "@speakeasy-api/tonic");
                Expr::call("unknown", vec![])
            }
        }
    };

    let mut result = base;
    for modifier in &type_ref.modifiers {
        result = match modifier {
            TypeMod::List | TypeMod::Set => {
                imports.add_value("array", "@speakeasy-api/tonic");
                Expr::call("array", vec![result])
            }
            TypeMod::Map(value_type) => {
                imports.add_value("record", "@speakeasy-api/tonic");
                let value_schema = type_ref_to_schema_expr(value_type, ir, imports);
                Expr::call("record", vec![value_schema])
            }
            _ => result,
        };
    }

    if type_ref.nullable {
        imports.add_value("nullable", "@speakeasy-api/tonic");
        result = Expr::call("nullable", vec![result]);
    }

    result
}

fn primitive_to_schema_expr(p: Primitive, imports: &mut ImportCollector) -> Expr {
    let name = match p {
        Primitive::Any => "unknown",
        Primitive::Bool => "boolean",
        Primitive::I32 | Primitive::I64 | Primitive::F32 | Primitive::F64 | Primitive::Decimal => {
            "number"
        }
        Primitive::String
        | Primitive::Uuid
        | Primitive::Date
        | Primitive::DateTime
        | Primitive::Bytes => "string",
    };
    imports.add_value(name, "@speakeasy-api/tonic");
    Expr::call(name, vec![])
}

fn alias_target_to_schema_expr(
    target: &AliasTarget,
    ir: &GenIr,
    imports: &mut ImportCollector,
) -> Expr {
    match target {
        AliasTarget::Primitive(p) => primitive_to_schema_expr(*p, imports),
        AliasTarget::Composite(c) => composite_to_schema_expr(c, ir, imports),
        AliasTarget::Reference(type_ref) => type_ref_to_schema_expr(type_ref, ir, imports),
    }
}

fn composite_to_schema_expr(c: &Composite, ir: &GenIr, imports: &mut ImportCollector) -> Expr {
    match c {
        Composite::List(inner) => {
            imports.add_value("array", "@speakeasy-api/tonic");
            Expr::call("array", vec![type_ref_to_schema_expr(inner, ir, imports)])
        }
        Composite::Map { value, .. } => {
            imports.add_value("record", "@speakeasy-api/tonic");
            Expr::call("record", vec![type_ref_to_schema_expr(value, ir, imports)])
        }
        Composite::Tuple(types) => {
            imports.add_value("tuple", "@speakeasy-api/tonic");
            let args: Vec<Expr> = types
                .iter()
                .map(|t| type_ref_to_schema_expr(t, ir, imports))
                .collect();
            Expr::call("tuple", vec![Expr::Array(args)])
        }
    }
}

fn literal_to_schema_expr(lit: &Literal, imports: &mut ImportCollector) -> Expr {
    match lit {
        Literal::Null => {
            imports.add_value("nullType", "@speakeasy-api/tonic");
            Expr::call("nullType", vec![])
        }
        Literal::Bool(b) => {
            imports.add_value("literal", "@speakeasy-api/tonic");
            Expr::call("literal", vec![Expr::BoolLit(*b)])
        }
        Literal::I64(i) => {
            imports.add_value("literal", "@speakeasy-api/tonic");
            Expr::call("literal", vec![Expr::num(i.to_string())])
        }
        Literal::F64(f) => {
            imports.add_value("literal", "@speakeasy-api/tonic");
            Expr::call("literal", vec![Expr::num(f.to_string())])
        }
        Literal::String(s) => {
            imports.add_value("literal", "@speakeasy-api/tonic");
            Expr::call("literal", vec![Expr::str(s.clone())])
        }
        Literal::Array(_) | Literal::Object(_) => {
            imports.add_value("unknown", "@speakeasy-api/tonic");
            Expr::call("unknown", vec![])
        }
    }
}

fn literal_to_ts_type(lit: &Literal) -> TsType {
    TsType::Literal(render_literal(lit))
}

fn render_literal(lit: &Literal) -> String {
    match lit {
        Literal::Null => "null".to_string(),
        Literal::Bool(b) => b.to_string(),
        Literal::I64(i) => i.to_string(),
        Literal::F64(f) => f.to_string(),
        Literal::String(s) => format!("\"{}\"", s.replace('"', "\\\"")),
        Literal::Array(_) | Literal::Object(_) => "null".to_string(),
    }
}

fn literal_to_expr(lit: &Literal) -> Expr {
    match lit {
        Literal::Null => Expr::Null,
        Literal::Bool(b) => Expr::BoolLit(*b),
        Literal::I64(i) => Expr::NumberLit(i.to_string()),
        Literal::F64(f) => Expr::NumberLit(f.to_string()),
        Literal::String(s) => Expr::StringLit(s.clone()),
        Literal::Array(_) | Literal::Object(_) => Expr::Null,
    }
}

fn field_references_custom_type(type_ref: &TypeRef, ir: &GenIr) -> bool {
    if ir.types.contains_key(&type_ref.target) {
        return true;
    }
    for modifier in &type_ref.modifiers {
        if let TypeMod::Map(value_type) = modifier
            && field_references_custom_type(value_type, ir)
        {
            return true;
        }
    }
    false
}

fn docs_to_jsdoc(docs: &ir::gen_ir::Docs) -> Option<JsDoc> {
    let has_content = docs.summary.is_some() || docs.description.is_some();
    if !has_content {
        return None;
    }

    let mut lines = Vec::new();
    if let Some(summary) = &docs.summary {
        lines.push(JsDocLine::Text(summary.clone()));
    }
    if docs.summary.is_some() && docs.description.is_some() {
        lines.push(JsDocLine::Text(String::new()));
    }
    if let Some(description) = &docs.description {
        lines.push(JsDocLine::Text(description.clone()));
    }

    Some(JsDoc { lines })
}
