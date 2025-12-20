use std::path::Path;

use overlay::{Overlay, apply};

fn run_overlay_test(path: &Path) -> datatest_stable::Result<()> {
    let content = std::fs::read_to_string(path)?;
    let parts: Vec<&str> = content.split("---\n").collect();

    if parts.len() < 3 {
        return Err(format!(
            "Invalid fixture format in {:?}: expected at least 3 parts separated by '---\\n' (spec, overlay, expected)",
            path
        ).into());
    }

    let spec_yaml = parts[0].trim();
    let overlay_yaml = parts[1].trim();
    let expected_yaml = parts[2].trim();

    let spec: oas3::Spec =
        serde_json::from_str(spec_yaml).map_err(|e| format!("Failed to parse spec: {}", e))?;

    let overlay_doc: Overlay = serde_json::from_str(overlay_yaml)
        .map_err(|e| format!("Failed to parse overlay: {}", e))?;

    let expected: oas3::Spec = serde_json::from_str(expected_yaml)
        .map_err(|e| format!("Failed to parse expected: {}", e))?;

    let result =
        apply(&spec, &overlay_doc).map_err(|e| format!("Failed to apply overlay: {}", e))?;

    let result_json = serde_json::to_value(&result)?;
    let expected_json = serde_json::to_value(&expected)?;

    if result_json != expected_json {
        return Err(format!(
            "Overlay result mismatch.\n\nExpected:\n{}\n\nGot:\n{}",
            serde_json::to_string_pretty(&expected_json)?,
            serde_json::to_string_pretty(&result_json)?
        )
        .into());
    }

    Ok(())
}

datatest_stable::harness! {
    { test = run_overlay_test, root = "tests/fixtures", pattern = r".*\.yaml$" },
}
