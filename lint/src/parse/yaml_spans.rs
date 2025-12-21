use crate::model::{ByteSpan, SpanDb, escape_pointer_segment};
use saphyr_parser::{Event, Parser, Span, SpannedEventReceiver};

#[derive(Debug, Clone)]
struct MapFrame {
    expecting_key: bool,
    pending_key: Option<String>,
}

#[derive(Debug, Clone)]
struct SeqFrame {
    next_index: u32,
}

#[derive(Debug, Clone)]
enum ContainerFrame {
    Map(MapFrame),
    Seq(SeqFrame),
}

#[derive(Debug)]
struct OpenNode {
    ptr: String,
    start: u32,
}

pub struct SpanDbBuilder {
    db: SpanDb,
    containers: Vec<ContainerFrame>,
    open_nodes: Vec<OpenNode>,
    path_segments: Vec<String>,
}

impl SpanDbBuilder {
    pub fn new() -> Self {
        Self {
            db: SpanDb::new(),
            containers: Vec::new(),
            open_nodes: Vec::new(),
            path_segments: Vec::new(),
        }
    }

    pub fn build(source: &str) -> Result<SpanDb, saphyr_parser::ScanError> {
        let mut builder = SpanDbBuilder::new();
        let mut parser = Parser::new_from_str(source);
        parser.load(&mut builder, true)?;
        Ok(builder.finish())
    }

    pub fn finish(self) -> SpanDb {
        self.db
    }

    fn current_ptr(&self) -> String {
        if self.path_segments.is_empty() {
            String::new()
        } else {
            format!("/{}", self.path_segments.join("/"))
        }
    }

    fn push_segment(&mut self, segment: String) {
        self.path_segments.push(segment);
    }

    fn pop_segment(&mut self) {
        self.path_segments.pop();
    }

    fn to_byte_span(span: &Span) -> ByteSpan {
        ByteSpan::new(span.start.index() as u32, span.end.index() as u32)
    }

    fn process_event(&mut self, event: Event, span: Span) {
        let byte_span = Self::to_byte_span(&span);

        match event {
            Event::Scalar(value, _style, _anchor, _tag) => {
                let container = self.containers.last().cloned();
                match container {
                    Some(ContainerFrame::Map(map)) if map.expecting_key => {
                        let escaped = escape_pointer_segment(&value);
                        self.push_segment(escaped);
                        let ptr = self.current_ptr();
                        self.db.key_spans.insert(ptr.clone(), byte_span);
                        if let Some(ContainerFrame::Map(m)) = self.containers.last_mut() {
                            m.pending_key = Some(ptr);
                            m.expecting_key = false;
                        }
                    }
                    Some(ContainerFrame::Map(map)) => {
                        if let Some(ptr) = map.pending_key.clone() {
                            self.db.value_spans.insert(ptr, byte_span);
                        }
                        self.pop_segment();
                        if let Some(ContainerFrame::Map(m)) = self.containers.last_mut() {
                            m.pending_key = None;
                            m.expecting_key = true;
                        }
                    }
                    Some(ContainerFrame::Seq(seq)) => {
                        let idx = seq.next_index;
                        self.push_segment(idx.to_string());
                        let ptr = self.current_ptr();
                        self.db.value_spans.insert(ptr, byte_span);
                        self.pop_segment();
                        if let Some(ContainerFrame::Seq(s)) = self.containers.last_mut() {
                            s.next_index += 1;
                        }
                    }
                    None => {
                        self.db.value_spans.insert(String::new(), byte_span);
                    }
                }
            }

            Event::MappingStart(_anchor, _tag) => {
                let start_byte = span.start.index() as u32;
                let container = self.containers.last().cloned();
                match container {
                    Some(ContainerFrame::Map(map)) if !map.expecting_key => {
                        if let Some(ptr) = map.pending_key.clone() {
                            self.open_nodes.push(OpenNode {
                                ptr,
                                start: start_byte,
                            });
                        }
                        if let Some(ContainerFrame::Map(m)) = self.containers.last_mut() {
                            m.expecting_key = true;
                        }
                    }
                    Some(ContainerFrame::Seq(seq)) => {
                        let idx = seq.next_index;
                        self.push_segment(idx.to_string());
                        let ptr = self.current_ptr();
                        self.open_nodes.push(OpenNode {
                            ptr,
                            start: start_byte,
                        });
                        if let Some(ContainerFrame::Seq(s)) = self.containers.last_mut() {
                            s.next_index += 1;
                        }
                    }
                    None => {
                        self.open_nodes.push(OpenNode {
                            ptr: String::new(),
                            start: start_byte,
                        });
                    }
                    _ => {}
                }
                self.containers.push(ContainerFrame::Map(MapFrame {
                    expecting_key: true,
                    pending_key: None,
                }));
            }

            Event::MappingEnd => {
                let end_byte = span.end.index() as u32;
                self.containers.pop();
                if let Some(node) = self.open_nodes.pop() {
                    self.db
                        .value_spans
                        .insert(node.ptr, ByteSpan::new(node.start, end_byte));
                    if !self.containers.is_empty() {
                        self.pop_segment();
                    }
                }
            }

            Event::SequenceStart(_anchor, _tag) => {
                let start_byte = span.start.index() as u32;
                let container = self.containers.last().cloned();
                match container {
                    Some(ContainerFrame::Map(map)) if !map.expecting_key => {
                        if let Some(ptr) = map.pending_key.clone() {
                            self.open_nodes.push(OpenNode {
                                ptr,
                                start: start_byte,
                            });
                        }
                        if let Some(ContainerFrame::Map(m)) = self.containers.last_mut() {
                            m.expecting_key = true;
                        }
                    }
                    Some(ContainerFrame::Seq(seq)) => {
                        let idx = seq.next_index;
                        self.push_segment(idx.to_string());
                        let ptr = self.current_ptr();
                        self.open_nodes.push(OpenNode {
                            ptr,
                            start: start_byte,
                        });
                        if let Some(ContainerFrame::Seq(s)) = self.containers.last_mut() {
                            s.next_index += 1;
                        }
                    }
                    None => {
                        self.open_nodes.push(OpenNode {
                            ptr: String::new(),
                            start: start_byte,
                        });
                    }
                    _ => {}
                }
                self.containers
                    .push(ContainerFrame::Seq(SeqFrame { next_index: 0 }));
            }

            Event::SequenceEnd => {
                let end_byte = span.end.index() as u32;
                self.containers.pop();
                if let Some(node) = self.open_nodes.pop() {
                    self.db
                        .value_spans
                        .insert(node.ptr, ByteSpan::new(node.start, end_byte));
                    if !self.containers.is_empty() {
                        self.pop_segment();
                    }
                }
            }

            Event::Alias(anchor) => {
                let _ = anchor;
                let container = self.containers.last().cloned();
                match container {
                    Some(ContainerFrame::Map(map)) if !map.expecting_key => {
                        if let Some(ptr) = map.pending_key.clone() {
                            self.db.value_spans.insert(ptr.clone(), byte_span);
                            self.db.alias_ptrs.insert(ptr);
                        }
                        self.pop_segment();
                        if let Some(ContainerFrame::Map(m)) = self.containers.last_mut() {
                            m.pending_key = None;
                            m.expecting_key = true;
                        }
                    }
                    Some(ContainerFrame::Seq(seq)) => {
                        let idx = seq.next_index;
                        self.push_segment(idx.to_string());
                        let ptr = self.current_ptr();
                        self.db.value_spans.insert(ptr.clone(), byte_span);
                        self.db.alias_ptrs.insert(ptr);
                        self.pop_segment();
                        if let Some(ContainerFrame::Seq(s)) = self.containers.last_mut() {
                            s.next_index += 1;
                        }
                    }
                    None => {
                        self.db.value_spans.insert(String::new(), byte_span);
                        self.db.alias_ptrs.insert(String::new());
                    }
                    _ => {}
                }
            }

            Event::DocumentStart(_)
            | Event::DocumentEnd
            | Event::StreamStart
            | Event::StreamEnd
            | Event::Nothing => {}
        }
    }
}

impl Default for SpanDbBuilder {
    fn default() -> Self {
        Self::new()
    }
}

impl SpannedEventReceiver<'_> for SpanDbBuilder {
    fn on_event(&mut self, event: Event, span: Span) {
        self.process_event(event, span);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_simple_mapping() {
        let yaml = "openapi: \"3.1.0\"\ninfo:\n  title: Test API\n  version: \"1.0\"\n";
        let db = SpanDbBuilder::build(yaml).unwrap();
        assert!(db.value_spans.contains_key("/openapi"));
        assert!(db.value_spans.contains_key("/info"));
        assert!(db.value_spans.contains_key("/info/title"));
        assert!(db.value_spans.contains_key("/info/version"));
    }

    #[test]
    fn test_sequence() {
        let yaml =
            "servers:\n  - url: https://api.example.com\n  - url: https://staging.example.com\n";
        let db = SpanDbBuilder::build(yaml).unwrap();
        assert!(db.value_spans.contains_key("/servers"));
        assert!(db.value_spans.contains_key("/servers/0"));
        assert!(db.value_spans.contains_key("/servers/0/url"));
        assert!(db.value_spans.contains_key("/servers/1"));
        assert!(db.value_spans.contains_key("/servers/1/url"));
    }

    #[test]
    fn test_path_escaping() {
        let yaml = "paths:\n  /pets:\n    get:\n      operationId: listPets\n";
        let db = SpanDbBuilder::build(yaml).unwrap();
        assert!(db.value_spans.contains_key("/paths/~1pets"));
        assert!(db.value_spans.contains_key("/paths/~1pets/get"));
        assert!(db.value_spans.contains_key("/paths/~1pets/get/operationId"));
    }

    #[test]
    fn test_key_spans() {
        let yaml = "openapi: \"3.1.0\"\n";
        let db = SpanDbBuilder::build(yaml).unwrap();
        assert!(db.key_spans.contains_key("/openapi"));
    }
}
