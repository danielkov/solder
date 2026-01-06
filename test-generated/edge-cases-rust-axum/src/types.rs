//! API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaginationMeta {
    pub limit: Option<i32>,
    pub page: Option<i32>,
    pub total: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RatingDistribution {
    #[serde(rename = "1")]
    pub _1: i32,
    #[serde(rename = "2")]
    pub _2: i32,
    #[serde(rename = "3")]
    pub _3: i32,
    #[serde(rename = "4")]
    pub _4: i32,
    #[serde(rename = "5")]
    pub _5: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RatingSummary {
    pub distribution: RatingDistribution,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SelfConflictTest {
    #[serde(rename = "Self")]
    pub _self: Option<String>,
    #[serde(rename = "___self")]
    pub __self: Option<String>,
    #[serde(rename = "_self")]
    pub ___self: Option<String>,
    #[serde(rename = "self")]
    pub ____self: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TestItem {
    pub id: Option<String>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TestResponse {
    pub items: Vec<TestItem>,
    pub pagination: PaginationMeta,
}
