use jsonpath_rust::JsonPath;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum OverlayError {
    #[error("JSONPath error: {0}")]
    JsonPath(String),
    #[error("Action must have exactly one of 'update', 'remove', or 'copy'")]
    InvalidAction,
    #[error("Serialization error: {0}")]
    Serialization(#[from] serde_json::Error),
    #[error("Copy source path matched no nodes: {0}")]
    CopySourceNotFound(String),
    #[error("Copy source matched multiple nodes, expected single value")]
    CopySourceMultiple,
    #[error("Cannot merge values of different types")]
    TypeMismatch,
}

pub type Result<T> = std::result::Result<T, OverlayError>;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Overlay {
    pub overlay: String,
    pub info: Info,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub extends: Option<String>,
    pub actions: Vec<Action>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Info {
    pub title: String,
    pub version: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Action {
    pub target: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub remove: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub copy: Option<String>,
}

pub fn apply(spec: &oas3::Spec, overlay: &Overlay) -> Result<oas3::Spec> {
    let mut value = serde_json::to_value(spec)?;

    for action in &overlay.actions {
        apply_action(&mut value, action)?;
    }

    let result: oas3::Spec = serde_json::from_value(value)?;
    Ok(result)
}

fn apply_action(doc: &mut Value, action: &Action) -> Result<()> {
    let has_update = action.update.is_some();
    let has_remove = action.remove.is_some_and(|r| r);
    let has_copy = action.copy.is_some();

    let modifier_count = [has_update, has_remove, has_copy]
        .iter()
        .filter(|&&b| b)
        .count();

    if modifier_count != 1 {
        return Err(OverlayError::InvalidAction);
    }

    if has_remove {
        remove_at_path(doc, &action.target)?;
    } else if has_update {
        let update_value = action.update.as_ref().unwrap();
        update_at_path(doc, &action.target, update_value)?;
    } else if has_copy {
        let source_path = action.copy.as_ref().unwrap();
        copy_at_path(doc, &action.target, source_path)?;
    }

    Ok(())
}

fn query_with_paths(doc: &Value, path: &str) -> Result<Vec<(Value, String)>> {
    let results = doc
        .query_with_path(path)
        .map_err(|e| OverlayError::JsonPath(e.to_string()))?;

    Ok(results
        .into_iter()
        .map(|r| (r.clone().val().clone(), r.path().to_string()))
        .collect())
}

fn update_at_path(doc: &mut Value, target: &str, update_value: &Value) -> Result<()> {
    let matches = query_with_paths(doc, target)?;

    for (_, path_str) in matches {
        if let Some(path) = parse_json_path(&path_str)
            && let Some(node) = get_mut_by_path(doc, &path)
        {
            merge_values(node, update_value)?;
        }
    }

    Ok(())
}

fn remove_at_path(doc: &mut Value, target: &str) -> Result<()> {
    let matches = query_with_paths(doc, target)?;

    let mut paths: Vec<_> = matches
        .iter()
        .filter_map(|(_, path_str)| parse_json_path(path_str))
        .collect();

    // Sort in reverse order so we remove from end first (for arrays)
    paths.sort_by(|a, b| b.cmp(a));

    for path in paths {
        remove_by_path(doc, &path);
    }

    Ok(())
}

fn copy_at_path(doc: &mut Value, target: &str, source: &str) -> Result<()> {
    let source_matches = query_with_paths(doc, source)?;

    if source_matches.is_empty() {
        return Err(OverlayError::CopySourceNotFound(source.to_string()));
    }

    if source_matches.len() > 1 {
        return Err(OverlayError::CopySourceMultiple);
    }

    let source_value = source_matches[0].0.clone();

    update_at_path(doc, target, &source_value)?;

    Ok(())
}

#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord)]
enum PathSegment {
    Key(String),
    Index(usize),
}

fn parse_json_path(path: &str) -> Option<Vec<PathSegment>> {
    if path == "$" {
        return Some(vec![]);
    }

    let mut segments = Vec::new();
    let mut chars = path.chars().peekable();

    // Skip the leading '$'
    if chars.next() != Some('$') {
        return None;
    }

    while let Some(c) = chars.next() {
        match c {
            '.' => {
                let mut key = String::new();
                while let Some(&next) = chars.peek() {
                    if next == '.' || next == '[' {
                        break;
                    }
                    key.push(chars.next().unwrap());
                }
                if !key.is_empty() {
                    segments.push(PathSegment::Key(key));
                }
            }
            '[' => {
                let mut content = String::new();
                while let Some(&next) = chars.peek() {
                    if next == ']' {
                        chars.next();
                        break;
                    }
                    content.push(chars.next().unwrap());
                }

                // Check if it's a numeric index or a quoted string
                if let Ok(idx) = content.parse::<usize>() {
                    segments.push(PathSegment::Index(idx));
                } else {
                    // Remove quotes if present
                    let key = content.trim_matches('\'').trim_matches('"').to_string();
                    segments.push(PathSegment::Key(key));
                }
            }
            _ => {}
        }
    }

    Some(segments)
}

fn get_mut_by_path<'a>(doc: &'a mut Value, path: &[PathSegment]) -> Option<&'a mut Value> {
    let mut current = doc;

    for segment in path {
        current = match segment {
            PathSegment::Key(key) => current.get_mut(key)?,
            PathSegment::Index(idx) => current.get_mut(idx)?,
        };
    }

    Some(current)
}

fn remove_by_path(doc: &mut Value, path: &[PathSegment]) {
    if path.is_empty() {
        return;
    }

    let (parent_path, last) = path.split_at(path.len() - 1);

    let parent = if parent_path.is_empty() {
        doc
    } else {
        match get_mut_by_path(doc, parent_path) {
            Some(p) => p,
            None => return,
        }
    };

    match &last[0] {
        PathSegment::Key(key) => {
            if let Value::Object(map) = parent {
                map.remove(key);
            }
        }
        PathSegment::Index(idx) => {
            if let Value::Array(arr) = parent
                && *idx < arr.len()
            {
                arr.remove(*idx);
            }
        }
    }
}

fn merge_values(target: &mut Value, source: &Value) -> Result<()> {
    match (target, source) {
        (Value::Object(target_map), Value::Object(source_map)) => {
            for (key, value) in source_map {
                if let Some(existing) = target_map.get_mut(key) {
                    merge_values(existing, value)?;
                } else {
                    target_map.insert(key.clone(), value.clone());
                }
            }
        }
        (Value::Array(target_arr), Value::Array(source_arr)) => {
            target_arr.extend(source_arr.iter().cloned());
        }
        (target, source) => {
            *target = source.clone();
        }
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_json_path() {
        assert_eq!(parse_json_path("$"), Some(vec![]));
        assert_eq!(
            parse_json_path("$.info"),
            Some(vec![PathSegment::Key("info".to_string())])
        );
        assert_eq!(
            parse_json_path("$.info.title"),
            Some(vec![
                PathSegment::Key("info".to_string()),
                PathSegment::Key("title".to_string())
            ])
        );
        assert_eq!(
            parse_json_path("$.paths['/pets'].get"),
            Some(vec![
                PathSegment::Key("paths".to_string()),
                PathSegment::Key("/pets".to_string()),
                PathSegment::Key("get".to_string())
            ])
        );
        assert_eq!(
            parse_json_path("$.tags[0]"),
            Some(vec![
                PathSegment::Key("tags".to_string()),
                PathSegment::Index(0)
            ])
        );
    }
}
