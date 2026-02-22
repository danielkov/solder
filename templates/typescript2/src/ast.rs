//! TypeScript AST node types.
//!
//! A minimal AST covering the subset of TypeScript needed for generated SDK output.
//! These nodes are lowered to pretty-printer `Doc` nodes via [`super::lower`].

/// A TypeScript source module (one `.ts` file).
#[derive(Debug, Clone)]
pub struct Module {
    pub imports: Vec<ImportDecl>,
    pub items: Vec<Item>,
}

/// An import declaration.
#[derive(Debug, Clone)]
pub enum ImportDecl {
    /// `import { names } from 'source';`
    Named { names: Vec<String>, source: String },
    /// `import type { names } from 'source';`
    TypeOnly { names: Vec<String>, source: String },
}

/// A top-level item in a module.
#[derive(Debug, Clone)]
pub enum Item {
    Interface(InterfaceDecl),
    TypeAlias(TypeAliasDecl),
    ConstDecl(ConstDecl),
    Class(ClassDecl),
    /// `export * from './Foo';`
    ReExport(String),
    /// `export { FooSchema } from './Foo';`
    NamedReExport {
        names: Vec<String>,
        source: String,
    },
    BlankLine,
    Comment(String),
    Raw(String),
}

/// `export interface Foo { ... }`
#[derive(Debug, Clone)]
pub struct InterfaceDecl {
    pub name: String,
    pub exported: bool,
    pub docs: Option<JsDoc>,
    pub fields: Vec<InterfaceField>,
}

/// A field inside an interface.
#[derive(Debug, Clone)]
pub struct InterfaceField {
    pub name: String,
    pub optional: bool,
    pub ty: TsType,
    pub docs: Option<JsDoc>,
}

/// `export type Foo = ...;`
#[derive(Debug, Clone)]
pub struct TypeAliasDecl {
    pub name: String,
    pub exported: bool,
    pub docs: Option<JsDoc>,
    pub ty: TsType,
}

/// `export const Foo: Type = expr;`
#[derive(Debug, Clone)]
pub struct ConstDecl {
    pub name: String,
    pub exported: bool,
    pub ty_annotation: Option<TsType>,
    pub value: Expr,
}

/// `export class Foo { ... }`
#[derive(Debug, Clone)]
pub struct ClassDecl {
    pub name: String,
    pub exported: bool,
    pub docs: Option<JsDoc>,
    pub extends: Option<String>,
    pub members: Vec<ClassMember>,
}

/// A member of a class.
#[derive(Debug, Clone)]
pub enum ClassMember {
    Field(ClassField),
    Constructor(ConstructorDecl),
    Method(MethodDecl),
    Getter(GetterDecl),
    BlankLine,
    Raw(String),
}

/// A class field.
#[derive(Debug, Clone)]
pub struct ClassField {
    pub name: String,
    pub readonly: bool,
    pub visibility: Option<Visibility>,
    pub ty: Option<TsType>,
    pub value: Option<Expr>,
}

/// Visibility modifier.
#[derive(Debug, Clone, Copy)]
pub enum Visibility {
    Private,
    Public,
}

/// Constructor declaration.
#[derive(Debug, Clone)]
pub struct ConstructorDecl {
    pub params: Vec<Param>,
    pub body: Vec<Stmt>,
}

/// Method declaration.
#[derive(Debug, Clone)]
pub struct MethodDecl {
    pub is_async: bool,
    pub name: String,
    pub visibility: Option<Visibility>,
    pub params: Vec<Param>,
    pub return_type: Option<TsType>,
    pub docs: Option<JsDoc>,
    pub body: Vec<Stmt>,
}

/// Getter declaration.
#[derive(Debug, Clone)]
pub struct GetterDecl {
    pub name: String,
    pub visibility: Option<Visibility>,
    pub return_type: Option<TsType>,
    pub docs: Option<JsDoc>,
    pub body: Vec<Stmt>,
}

/// A function/method parameter.
#[derive(Debug, Clone)]
pub struct Param {
    pub name: String,
    pub optional: bool,
    pub ty: Option<TsType>,
    pub visibility: Option<Visibility>,
    pub readonly: bool,
}

/// TypeScript type expressions.
#[derive(Debug, Clone)]
pub enum TsType {
    /// A simple named type: `string`, `number`, `Foo`
    Named(String),
    /// A generic type: `Promise<Foo>`, `Array<Foo>`
    Generic(String, Vec<TsType>),
    /// A union type: `Foo | Bar | null`
    Union(Vec<TsType>),
    /// An array type: `Foo[]`
    Array(Box<TsType>),
    /// A literal type: `"pet"`, `true`, `404`
    Literal(String),
    /// An inline object type: `{ key: Type; ... }`
    Object(Vec<InterfaceField>),
    /// A function type: `(a: Foo) => Bar`
    Function {
        params: Vec<(String, TsType)>,
        ret: Box<TsType>,
    },
    /// `void`
    Void,
}

/// Statements.
#[derive(Debug, Clone)]
pub enum Stmt {
    VarDecl {
        kind: VarKind,
        name: String,
        ty: Option<TsType>,
        init: Option<Expr>,
    },
    Expr(Expr),
    Return(Option<Expr>),
    If {
        cond: Expr,
        then: Vec<Stmt>,
        else_: Option<Vec<Stmt>>,
    },
    Switch {
        expr: Expr,
        cases: Vec<SwitchCase>,
        default: Option<Vec<Stmt>>,
    },
    TryCatch {
        try_body: Vec<Stmt>,
        catch_param: String,
        catch_body: Vec<Stmt>,
    },
    Throw(Expr),
    BlankLine,
    Raw(String),
}

/// Variable declaration kind.
#[derive(Debug, Clone, Copy)]
pub enum VarKind {
    Const,
    Let,
}

/// A switch case.
#[derive(Debug, Clone)]
pub struct SwitchCase {
    pub value: Expr,
    pub body: Vec<Stmt>,
}

/// Expressions.
#[derive(Debug, Clone)]
pub enum Expr {
    Ident(String),
    StringLit(String),
    TemplateLit(Vec<TemplPart>),
    NumberLit(String),
    BoolLit(bool),
    Null,
    Object(Vec<ObjEntry>),
    Array(Vec<Expr>),
    Member(Box<Expr>, String),
    Index(Box<Expr>, Box<Expr>),
    Call(Box<Expr>, Vec<Expr>),
    MethodCall(Box<Expr>, String, Vec<Expr>),
    New(Box<Expr>, Vec<Expr>),
    Await(Box<Expr>),
    Binary(Box<Expr>, &'static str, Box<Expr>),
    As(Box<Expr>, TsType),
    Instanceof(Box<Expr>, String),
    Ternary(Box<Expr>, Box<Expr>, Box<Expr>),
    Arrow {
        params: Vec<String>,
        body: ArrowBody,
    },
    AsConst(Box<Expr>),
    Raw(String),
}

/// Template literal parts.
#[derive(Debug, Clone)]
pub enum TemplPart {
    Str(String),
    Expr(Expr),
}

/// Arrow function body.
#[derive(Debug, Clone)]
pub enum ArrowBody {
    Expr(Box<Expr>),
    Block(Vec<Stmt>),
}

/// Object literal entry.
#[derive(Debug, Clone)]
pub enum ObjEntry {
    KeyValue(String, Expr),
    Shorthand(String),
    Spread(Expr),
    Getter(String, Vec<Stmt>),
}

/// JSDoc comment block.
#[derive(Debug, Clone)]
pub struct JsDoc {
    pub lines: Vec<JsDocLine>,
}

/// A single line in a JSDoc block.
#[derive(Debug, Clone)]
pub enum JsDocLine {
    Text(String),
    Param { name: String, desc: String },
    Returns(String),
    Throws(String),
    Deprecated(Option<String>),
}

impl JsDoc {
    pub fn from_text(text: impl Into<String>) -> Self {
        Self {
            lines: vec![JsDocLine::Text(text.into())],
        }
    }

    pub fn is_empty(&self) -> bool {
        self.lines.is_empty()
    }
}

impl TsType {
    pub fn string() -> Self {
        TsType::Named("string".into())
    }

    pub fn number() -> Self {
        TsType::Named("number".into())
    }

    pub fn boolean() -> Self {
        TsType::Named("boolean".into())
    }

    pub fn any() -> Self {
        TsType::Named("any".into())
    }

    pub fn void() -> Self {
        TsType::Void
    }

    pub fn named(s: impl Into<String>) -> Self {
        TsType::Named(s.into())
    }

    pub fn promise(inner: TsType) -> Self {
        TsType::Generic("Promise".into(), vec![inner])
    }

    pub fn record(key: TsType, val: TsType) -> Self {
        TsType::Generic("Record".into(), vec![key, val])
    }

    pub fn union(types: Vec<TsType>) -> Self {
        TsType::Union(types)
    }
}

// ── Expr constructors ────────────────────────────────────────────────

impl Expr {
    pub fn id(s: impl Into<String>) -> Self {
        Expr::Ident(s.into())
    }

    pub fn str(s: impl Into<String>) -> Self {
        Expr::StringLit(s.into())
    }

    pub fn num(s: impl Into<String>) -> Self {
        Expr::NumberLit(s.into())
    }

    pub fn this_dot(field: impl Into<String>) -> Self {
        Expr::Member(Box::new(Expr::Ident("this".into())), field.into())
    }

    pub fn call(name: impl Into<String>, args: Vec<Self>) -> Self {
        Expr::Call(Box::new(Expr::Ident(name.into())), args)
    }

    pub fn new_expr(name: impl Into<String>, args: Vec<Self>) -> Self {
        Expr::New(Box::new(Expr::Ident(name.into())), args)
    }
}

// ── Expr chainable methods ───────────────────────────────────────────

impl Expr {
    pub fn dot(self, field: impl Into<String>) -> Self {
        Expr::Member(Box::new(self), field.into())
    }

    pub fn method(self, name: impl Into<String>, args: Vec<Self>) -> Self {
        Expr::MethodCall(Box::new(self), name.into(), args)
    }

    pub fn call_with(self, args: Vec<Self>) -> Self {
        Expr::Call(Box::new(self), args)
    }

    pub fn awaited(self) -> Self {
        Expr::Await(Box::new(self))
    }

    pub fn assign(self, rhs: Self) -> Self {
        Expr::Binary(Box::new(self), "=", Box::new(rhs))
    }

    pub fn as_type(self, ty: TsType) -> Self {
        Expr::As(Box::new(self), ty)
    }

    pub fn as_const(self) -> Self {
        Expr::AsConst(Box::new(self))
    }

    pub fn op(self, operator: &'static str, rhs: Self) -> Self {
        Expr::Binary(Box::new(self), operator, Box::new(rhs))
    }

    pub fn into_stmt(self) -> Stmt {
        Stmt::Expr(self)
    }
}

// ── Stmt constructors ────────────────────────────────────────────────

impl Stmt {
    pub fn const_decl(name: impl Into<String>, init: Expr) -> Self {
        Stmt::VarDecl {
            kind: VarKind::Const,
            name: name.into(),
            ty: None,
            init: Some(init),
        }
    }

    pub fn const_typed(name: impl Into<String>, ty: TsType, init: Expr) -> Self {
        Stmt::VarDecl {
            kind: VarKind::Const,
            name: name.into(),
            ty: Some(ty),
            init: Some(init),
        }
    }

    pub fn let_decl(name: impl Into<String>, init: Expr) -> Self {
        Stmt::VarDecl {
            kind: VarKind::Let,
            name: name.into(),
            ty: None,
            init: Some(init),
        }
    }

    pub fn assign(lhs: Expr, rhs: Expr) -> Self {
        Stmt::Expr(lhs.assign(rhs))
    }
}

// ── ObjEntry shortcuts ──────────────────────────────────────────────

impl ObjEntry {
    pub fn kv(key: impl Into<String>, val: Expr) -> Self {
        ObjEntry::KeyValue(key.into(), val)
    }

    pub fn short(key: impl Into<String>) -> Self {
        ObjEntry::Shorthand(key.into())
    }
}

// ── Builder patterns ─────────────────────────────────────────────────

impl InterfaceField {
    pub fn new(name: impl Into<String>, ty: TsType) -> Self {
        Self {
            name: name.into(),
            optional: false,
            ty,
            docs: None,
        }
    }

    pub fn optional(mut self) -> Self {
        self.optional = true;
        self
    }

    pub fn docs(mut self, docs: JsDoc) -> Self {
        self.docs = Some(docs);
        self
    }
}

impl ClassField {
    pub fn new(name: impl Into<String>) -> Self {
        Self {
            name: name.into(),
            readonly: false,
            visibility: None,
            ty: None,
            value: None,
        }
    }

    pub fn readonly(mut self) -> Self {
        self.readonly = true;
        self
    }

    pub fn private(mut self) -> Self {
        self.visibility = Some(Visibility::Private);
        self
    }

    pub fn typed(mut self, ty: TsType) -> Self {
        self.ty = Some(ty);
        self
    }

    pub fn value(mut self, val: Expr) -> Self {
        self.value = Some(val);
        self
    }
}

impl Param {
    pub fn new(name: impl Into<String>, ty: TsType) -> Self {
        Self {
            name: name.into(),
            optional: false,
            ty: Some(ty),
            visibility: None,
            readonly: false,
        }
    }

    pub fn optional(mut self) -> Self {
        self.optional = true;
        self
    }

    pub fn private(mut self) -> Self {
        self.visibility = Some(Visibility::Private);
        self
    }
}
