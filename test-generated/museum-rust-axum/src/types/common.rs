//! Shared API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(any(feature = "events", feature = "operations", feature = "tickets"))]
pub type Date = jiff::civil::Date;

#[cfg(any(feature = "events", feature = "operations", feature = "tickets"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Error {
    pub title: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(any(feature = "events", feature = "tickets"))]
pub type EventId = uuid::Uuid;
