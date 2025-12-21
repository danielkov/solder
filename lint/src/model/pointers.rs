/// Escape a segment for use in a JSON Pointer (RFC 6901)
/// - `~` → `~0`
/// - `/` → `~1`
pub fn escape_pointer_segment(segment: &str) -> String {
    segment.replace('~', "~0").replace('/', "~1")
}

/// Unescape a JSON Pointer segment
/// - `~0` → `~`
/// - `~1` → `/`
pub fn unescape_pointer_segment(segment: &str) -> String {
    segment.replace("~1", "/").replace("~0", "~")
}

/// Build a JSON Pointer by appending a segment to a base pointer
pub fn append_pointer(base: &str, segment: &str) -> String {
    format!("{}/{}", base, escape_pointer_segment(segment))
}

/// Build a JSON Pointer for an array index
pub fn append_index(base: &str, index: usize) -> String {
    format!("{}/{}", base, index)
}

/// Extract the last segment from a pointer (unescaped)
pub fn last_segment(ptr: &str) -> Option<&str> {
    ptr.rsplit('/').next().filter(|s| !s.is_empty())
}

/// Get the parent pointer (everything before the last `/`)
pub fn parent_pointer(ptr: &str) -> &str {
    match ptr.rfind('/') {
        Some(0) => "",
        Some(idx) => &ptr[..idx],
        None => "",
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_escape_segment() {
        assert_eq!(escape_pointer_segment("pets"), "pets");
        assert_eq!(escape_pointer_segment("/pets"), "~1pets");
        assert_eq!(escape_pointer_segment("a~b"), "a~0b");
        assert_eq!(escape_pointer_segment("a/b~c"), "a~1b~0c");
    }

    #[test]
    fn test_unescape_segment() {
        assert_eq!(unescape_pointer_segment("pets"), "pets");
        assert_eq!(unescape_pointer_segment("~1pets"), "/pets");
        assert_eq!(unescape_pointer_segment("a~0b"), "a~b");
        assert_eq!(unescape_pointer_segment("a~1b~0c"), "a/b~c");
    }

    #[test]
    fn test_append_pointer() {
        assert_eq!(append_pointer("", "paths"), "/paths");
        assert_eq!(append_pointer("/paths", "/pets"), "/paths/~1pets");
        assert_eq!(
            append_pointer("/paths/~1pets", "get"),
            "/paths/~1pets/get"
        );
    }

    #[test]
    fn test_append_index() {
        assert_eq!(append_index("/servers", 0), "/servers/0");
        assert_eq!(append_index("/servers", 1), "/servers/1");
    }

    #[test]
    fn test_parent_pointer() {
        assert_eq!(parent_pointer("/a/b/c"), "/a/b");
        assert_eq!(parent_pointer("/a"), "");
        assert_eq!(parent_pointer(""), "");
    }
}
