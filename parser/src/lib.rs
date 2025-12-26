use std::path::PathBuf;

pub mod error;
pub mod resolve;

pub fn read(path: impl Into<PathBuf>) -> Result<String, error::ParserError> {
    let path = path.into();
    let string = std::fs::read_to_string(path)?;
    Ok(string)
}

pub fn parse(input: &str) -> Result<oas3::Spec, error::ParserError> {
    // Use strict_booleans to avoid YAML 1.1 quirks where y/n/yes/no/on/off
    // are interpreted as booleans instead of strings
    let options = serde_saphyr::Options {
        strict_booleans: true,
        ..Default::default()
    };
    let document: oas3::Spec = serde_saphyr::from_str_with_options(input, options)?;
    Ok(document)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse() {
        let file = std::fs::read_to_string("test-data/unkey.yml").expect("Failed to read file");
        let document = parse(&file).expect("Failed to parse file");
        assert_eq!(document.info.title, "Unkey API");
        assert_eq!(document.info.version, "2.0.0");
        assert_eq!(document.paths.iter().len(), 1);
    }
}
