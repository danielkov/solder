#[cfg(test)]
pub(crate) fn yaml_to_json(yaml: &str) -> String {
    let value: serde_json::Value = serde_saphyr::from_str(yaml).unwrap();
    serde_json::to_string_pretty(&value).unwrap()
}
