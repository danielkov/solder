//! Wadler-Lindig pretty-printer.
//!
//! A functional pretty-printer that produces well-formatted output by choosing
//! between flat (single-line) and broken (multi-line) layouts based on available
//! line width. Uses `Rc<Doc>` for efficient tree sharing.

use std::rc::Rc;

/// The core document IR. Built using combinator functions, then rendered via [`render`].
#[derive(Debug, Clone)]
pub enum Doc {
    /// Empty document.
    Nil,
    /// Literal text (must not contain newlines).
    Text(String),
    /// Concatenation of two documents.
    Concat(Rc<Doc>, Rc<Doc>),
    /// Indent the nested document by the current nesting level.
    Nest(i32, Rc<Doc>),
    /// A line break that becomes a single space when flattened.
    Line,
    /// A line break that is always preserved (never flattened).
    HardLine,
    /// Try to render the inner document flat (single line); if it doesn't fit,
    /// render it broken (with line breaks).
    Group(Rc<Doc>),
    /// Choose between two alternatives: first when flat, second when broken.
    IfFlat(Rc<Doc>, Rc<Doc>),
}

/// Configuration for the renderer.
#[derive(Debug, Clone)]
pub struct PrintConfig {
    /// Maximum line width.
    pub width: usize,
    /// Number of spaces per indent level.
    pub indent: usize,
    /// Use tabs instead of spaces.
    pub use_tabs: bool,
}

impl Default for PrintConfig {
    fn default() -> Self {
        Self {
            width: 80,
            indent: 2,
            use_tabs: false,
        }
    }
}

// ── Combinators ──────────────────────────────────────────────────────

/// Empty document.
pub fn nil() -> Rc<Doc> {
    Rc::new(Doc::Nil)
}

/// Literal text (must not contain newlines).
pub fn text(s: impl Into<String>) -> Rc<Doc> {
    let s = s.into();
    if s.is_empty() {
        return nil();
    }
    Rc::new(Doc::Text(s))
}

/// A line break that becomes a space when flattened.
pub fn line() -> Rc<Doc> {
    Rc::new(Doc::Line)
}

/// A soft line break: empty when flat, newline when broken.
pub fn softline() -> Rc<Doc> {
    Rc::new(Doc::IfFlat(nil(), Rc::new(Doc::Line)))
}

/// A line break that is always preserved.
pub fn hardline() -> Rc<Doc> {
    Rc::new(Doc::HardLine)
}

/// Indent the inner document by `n` spaces.
pub fn nest(n: i32, doc: Rc<Doc>) -> Rc<Doc> {
    Rc::new(Doc::Nest(n, doc))
}

/// Group: try flat first, break if it doesn't fit.
pub fn group(doc: Rc<Doc>) -> Rc<Doc> {
    Rc::new(Doc::Group(doc))
}

/// Concatenate two documents.
pub fn concat(a: Rc<Doc>, b: Rc<Doc>) -> Rc<Doc> {
    match (a.as_ref(), b.as_ref()) {
        (Doc::Nil, _) => b,
        (_, Doc::Nil) => a,
        _ => Rc::new(Doc::Concat(a, b)),
    }
}

/// Choose between flat and broken alternatives.
pub fn if_flat(flat: Rc<Doc>, broken: Rc<Doc>) -> Rc<Doc> {
    Rc::new(Doc::IfFlat(flat, broken))
}

/// Concatenate multiple documents.
pub fn concat_all(docs: impl IntoIterator<Item = Rc<Doc>>) -> Rc<Doc> {
    docs.into_iter().fold(nil(), concat)
}

/// Join documents with a separator between each pair.
pub fn join(docs: impl IntoIterator<Item = Rc<Doc>>, sep: Rc<Doc>) -> Rc<Doc> {
    let docs: Vec<_> = docs.into_iter().collect();
    if docs.is_empty() {
        return nil();
    }
    let mut result = docs[0].clone();
    for d in &docs[1..] {
        result = concat(concat(result, sep.clone()), d.clone());
    }
    result
}

/// Wrap content in open/close delimiters with nesting.
/// When the group fits on one line: `open content close`
/// When it breaks: `open\n  content\nclose` (with trailing comma if specified).
pub fn bracket(indent: i32, open: &str, docs: Rc<Doc>, trailing: &str, close: &str) -> Rc<Doc> {
    group(concat_all([
        text(open),
        nest(indent, concat(line(), docs)),
        if !trailing.is_empty() {
            if_flat(nil(), text(trailing))
        } else {
            nil()
        },
        line(),
        text(close),
    ]))
}

/// Join items separated by commas, with trailing comma when broken.
pub fn trailing_comma(docs: impl IntoIterator<Item = Rc<Doc>>) -> Rc<Doc> {
    let docs: Vec<_> = docs.into_iter().collect();
    if docs.is_empty() {
        return nil();
    }
    let mut parts = Vec::new();
    for (i, d) in docs.iter().enumerate() {
        if i > 0 {
            parts.push(text(","));
            parts.push(line());
        }
        parts.push(d.clone());
    }
    concat_all(parts)
}

// ── Renderer ─────────────────────────────────────────────────────────

/// Render mode for each document on the stack.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Mode {
    Flat,
    Break,
}

/// Render a document to a string using the Wadler-Lindig algorithm.
pub fn render(doc: &Doc, config: &PrintConfig) -> String {
    let indent_str = if config.use_tabs {
        "\t".to_string()
    } else {
        " ".repeat(config.indent)
    };

    let mut out = String::new();
    // Stack of (indent_level, mode, doc)
    let mut stack: Vec<(i32, Mode, Rc<Doc>)> = vec![(0, Mode::Break, Rc::new(doc.clone()))];
    let mut col: usize = 0;

    while let Some((indent, mode, doc)) = stack.pop() {
        match doc.as_ref() {
            Doc::Nil => {}
            Doc::Text(s) => {
                out.push_str(s);
                col += s.len();
            }
            Doc::Concat(a, b) => {
                // Push b first so a is processed first (stack is LIFO)
                stack.push((indent, mode, b.clone()));
                stack.push((indent, mode, a.clone()));
            }
            Doc::Nest(n, inner) => {
                stack.push((indent + n, mode, inner.clone()));
            }
            Doc::Line => match mode {
                Mode::Flat => {
                    out.push(' ');
                    col += 1;
                }
                Mode::Break => {
                    out.push('\n');
                    let indent_count = indent as usize;
                    let spaces = indent_count / config.indent;
                    let remainder = indent_count % config.indent;
                    for _ in 0..spaces {
                        out.push_str(&indent_str);
                    }
                    for _ in 0..remainder {
                        out.push(' ');
                    }
                    col = indent_count;
                }
            },
            Doc::HardLine => {
                out.push('\n');
                let indent_count = indent as usize;
                let spaces = indent_count / config.indent;
                let remainder = indent_count % config.indent;
                for _ in 0..spaces {
                    out.push_str(&indent_str);
                }
                for _ in 0..remainder {
                    out.push(' ');
                }
                col = indent_count;
            }
            Doc::Group(inner) => {
                // Try flat first; if it fits within the width, use flat mode
                let flat_width = measure_flat(inner, col, config.width);
                if flat_width <= config.width {
                    stack.push((indent, Mode::Flat, inner.clone()));
                } else {
                    stack.push((indent, Mode::Break, inner.clone()));
                }
            }
            Doc::IfFlat(flat_doc, break_doc) => match mode {
                Mode::Flat => stack.push((indent, mode, flat_doc.clone())),
                Mode::Break => stack.push((indent, mode, break_doc.clone())),
            },
        }
    }

    out
}

/// Measure the width of a document rendered in flat mode.
/// Returns `usize::MAX` if the document contains a hardline or exceeds `max`.
fn measure_flat(doc: &Doc, col: usize, max: usize) -> usize {
    let mut stack: Vec<Rc<Doc>> = vec![Rc::new(doc.clone())];
    let mut pos = col;

    while let Some(doc) = stack.pop() {
        if pos > max {
            return usize::MAX;
        }
        match doc.as_ref() {
            Doc::Nil => {}
            Doc::Text(s) => {
                pos += s.len();
            }
            Doc::Concat(a, b) => {
                stack.push(b.clone());
                stack.push(a.clone());
            }
            Doc::Nest(_, inner) => {
                stack.push(inner.clone());
            }
            Doc::Line => {
                pos += 1; // space in flat mode
            }
            Doc::HardLine => {
                return usize::MAX; // cannot flatten
            }
            Doc::Group(inner) => {
                stack.push(inner.clone());
            }
            Doc::IfFlat(flat_doc, _) => {
                stack.push(flat_doc.clone());
            }
        }
    }

    pos
}

#[cfg(test)]
mod tests {
    use super::*;

    fn default_config() -> PrintConfig {
        PrintConfig::default()
    }

    #[test]
    fn test_basic_text() {
        let doc = text("hello world");
        assert_eq!(render(&doc, &default_config()), "hello world");
    }

    #[test]
    fn test_nil() {
        let doc = nil();
        assert_eq!(render(&doc, &default_config()), "");
    }

    #[test]
    fn test_concat() {
        let doc = concat(text("hello"), concat(text(" "), text("world")));
        assert_eq!(render(&doc, &default_config()), "hello world");
    }

    #[test]
    fn test_hardline() {
        let doc = concat(text("a"), concat(hardline(), text("b")));
        assert_eq!(render(&doc, &default_config()), "a\nb");
    }

    #[test]
    fn test_nest() {
        let doc = concat(
            text("if (true) {"),
            concat(
                nest(2, concat(hardline(), text("return 1;"))),
                concat(hardline(), text("}")),
            ),
        );
        assert_eq!(
            render(&doc, &default_config()),
            "if (true) {\n  return 1;\n}"
        );
    }

    #[test]
    fn test_group_flat() {
        // Short enough to fit on one line
        let doc = group(concat_all([
            text("{"),
            nest(2, concat(line(), text("a: 1"))),
            line(),
            text("}"),
        ]));
        assert_eq!(render(&doc, &default_config()), "{ a: 1 }");
    }

    #[test]
    fn test_group_break() {
        // Force break by using narrow width
        let config = PrintConfig {
            width: 10,
            ..default_config()
        };
        let doc = group(concat_all([
            text("{"),
            nest(2, concat(line(), text("longFieldName: 'value'"))),
            line(),
            text("}"),
        ]));
        assert_eq!(render(&doc, &config), "{\n  longFieldName: 'value'\n}");
    }

    #[test]
    fn test_join() {
        let items = vec![text("a"), text("b"), text("c")];
        let doc = join(items, text(", "));
        assert_eq!(render(&doc, &default_config()), "a, b, c");
    }

    #[test]
    fn test_bracket() {
        let items = trailing_comma(vec![text("a: 1"), text("b: 2")]);
        let doc = bracket(2, "{", items, ",", "}");
        assert_eq!(render(&doc, &default_config()), "{ a: 1, b: 2 }");
    }

    #[test]
    fn test_bracket_break() {
        let config = PrintConfig {
            width: 10,
            ..default_config()
        };
        let items = trailing_comma(vec![text("a: 1"), text("b: 2")]);
        let doc = bracket(2, "{", items, ",", "}");
        assert_eq!(render(&doc, &config), "{\n  a: 1,\n  b: 2,\n}");
    }

    #[test]
    fn test_trailing_comma() {
        let config = PrintConfig {
            width: 10,
            ..default_config()
        };
        let items = trailing_comma(vec![text("x"), text("y"), text("z")]);
        let doc = group(concat_all([
            text("["),
            nest(2, concat(line(), items)),
            if_flat(nil(), text(",")),
            line(),
            text("]"),
        ]));
        assert_eq!(render(&doc, &config), "[\n  x,\n  y,\n  z,\n]");
    }

    #[test]
    fn test_if_flat() {
        let doc = group(concat_all([
            text("("),
            if_flat(
                text("a, b, c"),
                concat_all([text("a,"), hardline(), text("b,"), hardline(), text("c")]),
            ),
            text(")"),
        ]));
        // Fits in 80 cols: use flat
        assert_eq!(render(&doc, &default_config()), "(a, b, c)");
    }

    #[test]
    fn test_softline() {
        let doc = group(concat_all([text("a"), softline(), text("b")]));
        // Flat mode: softline becomes nothing
        assert_eq!(render(&doc, &default_config()), "ab");
    }

    #[test]
    fn test_nested_groups() {
        let inner = group(concat_all([
            text("{"),
            nest(2, concat(line(), text("inner: true"))),
            line(),
            text("}"),
        ]));
        let outer = group(concat_all([
            text("{"),
            nest(2, concat(line(), concat(text("obj: "), inner))),
            line(),
            text("}"),
        ]));
        assert_eq!(
            render(&outer, &default_config()),
            "{ obj: { inner: true } }"
        );
    }

    #[test]
    fn test_empty_concat() {
        let doc = concat(nil(), text("hello"));
        assert_eq!(render(&doc, &default_config()), "hello");
        let doc = concat(text("hello"), nil());
        assert_eq!(render(&doc, &default_config()), "hello");
    }

    #[test]
    fn test_tabs() {
        let config = PrintConfig {
            width: 10,
            indent: 2,
            use_tabs: true,
        };
        let doc = concat(text("a"), nest(2, concat(hardline(), text("b"))));
        assert_eq!(render(&doc, &config), "a\n\tb");
    }
}
