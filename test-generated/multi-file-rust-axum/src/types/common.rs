//! Shared API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(any(feature = "orders", feature = "products", feature = "users"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DetailsItem {
    pub field: Option<String>,
    pub message: Option<String>,
}

#[cfg(any(feature = "orders", feature = "products", feature = "users"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Error {
    pub code: String,
    pub details: Option<Vec<DetailsItem>>,
    pub message: String,
    #[serde(rename = "requestId")]
    pub request_id: Option<String>,
}

