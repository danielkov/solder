//! Shared API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(any(feature = "bookings", feature = "stations", feature = "trips"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetBookingsUnionUnion {
    pub next: Option<String>,
    pub prev: Option<String>,
    #[serde(rename = "self")]
    pub _self: Option<String>,
}

#[cfg(any(
    feature = "bookings",
    feature = "payments",
    feature = "stations",
    feature = "trips"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Problem {
    pub detail: Option<String>,
    pub instance: Option<String>,
    pub status: Option<i32>,
    pub title: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}
