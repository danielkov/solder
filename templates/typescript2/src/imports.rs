//! Import collection and deduplication.
//!
//! `ImportCollector` accumulates imports as the emitter traverses IR nodes,
//! then produces sorted, deduplicated `ImportDecl` nodes.

use crate::ast::ImportDecl;
use std::collections::{BTreeMap, BTreeSet};

/// Collects imports, deduplicates, and sorts them.
///
/// Tracks two sets per source: type-only names and value names.
/// Third-party imports (not starting with `./` or `../`) are sorted first,
/// then local imports.
#[derive(Debug, Default)]
pub struct ImportCollector {
    /// source → (type_only_names, value_names)
    map: BTreeMap<String, (BTreeSet<String>, BTreeSet<String>)>,
}

impl ImportCollector {
    pub fn new() -> Self {
        Self::default()
    }

    /// Add a value import: `import { name } from 'source';`
    pub fn add_value(&mut self, name: impl Into<String>, source: impl Into<String>) {
        self.map
            .entry(source.into())
            .or_default()
            .1
            .insert(name.into());
    }

    /// Add a type-only import: `import type { name } from 'source';`
    pub fn add_type(&mut self, name: impl Into<String>, source: impl Into<String>) {
        self.map
            .entry(source.into())
            .or_default()
            .0
            .insert(name.into());
    }

    /// Add a local type import — imports both the type (type-only) and its schema (value).
    ///
    /// E.g., `add_local_type("Pet", "./Pet")` produces:
    /// - `import type { Pet } from './Pet';`
    /// - `import { PetSchema } from './Pet';`
    pub fn add_local_type(&mut self, name: impl Into<String>, source: impl Into<String>) {
        let name = name.into();
        let source = source.into();
        let entry = self.map.entry(source).or_default();
        entry.0.insert(name.clone());
        entry.1.insert(format!("{}Schema", name));
    }

    /// Convert collected imports into sorted `ImportDecl` nodes.
    ///
    /// Third-party imports come first, then local imports.
    /// Within each group, imports are sorted by source path.
    pub fn into_decls(self) -> Vec<ImportDecl> {
        let mut third_party: Vec<_> = self
            .map
            .iter()
            .filter(|(src, _)| !src.starts_with("./") && !src.starts_with("../"))
            .collect();
        let mut local: Vec<_> = self
            .map
            .iter()
            .filter(|(src, _)| src.starts_with("./") || src.starts_with("../"))
            .collect();

        third_party.sort_by_key(|(src, _)| (*src).clone());
        local.sort_by_key(|(src, _)| (*src).clone());

        let mut decls = Vec::new();

        // Third-party: value imports first, then type-only
        for (source, (type_names, value_names)) in &third_party {
            if !value_names.is_empty() {
                decls.push(ImportDecl::Named {
                    names: value_names.iter().cloned().collect(),
                    source: source.to_string(),
                });
            }
            if !type_names.is_empty() {
                decls.push(ImportDecl::TypeOnly {
                    names: type_names.iter().cloned().collect(),
                    source: source.to_string(),
                });
            }
        }

        // Blank line separator (signaled by convention: caller checks both non-empty)
        let has_third_party = !third_party.is_empty();
        let has_local = !local.is_empty();

        if has_third_party && has_local {
            // We mark separation via a sentinel; the lowerer handles the blank line
        }

        // Local: type-only first, then value imports
        for (source, (type_names, value_names)) in &local {
            if !type_names.is_empty() {
                decls.push(ImportDecl::TypeOnly {
                    names: type_names.iter().cloned().collect(),
                    source: source.to_string(),
                });
            }
            if !value_names.is_empty() {
                decls.push(ImportDecl::Named {
                    names: value_names.iter().cloned().collect(),
                    source: source.to_string(),
                });
            }
        }

        decls
    }

    /// Check if there are both third-party and local imports (for blank line insertion).
    pub fn has_mixed_sources(&self) -> bool {
        let has_third_party = self
            .map
            .keys()
            .any(|s| !s.starts_with("./") && !s.starts_with("../"));
        let has_local = self
            .map
            .keys()
            .any(|s| s.starts_with("./") || s.starts_with("../"));
        has_third_party && has_local
    }
}
