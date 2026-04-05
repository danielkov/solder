//! Types for the faq service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum FaqCategory {
    #[serde(rename = "general")]
    General,
    #[serde(rename = "orders")]
    Orders,
    #[serde(rename = "shipping")]
    Shipping,
    #[serde(rename = "returns")]
    Returns,
    #[serde(rename = "pets")]
    Pets,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FaqItem {
    pub answer: String,
    pub category: FaqCategory,
    pub id: uuid::Uuid,
    pub question: String,
    #[serde(rename = "relatedURLs")]
    pub related_ur_ls: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FaqList {
    pub items: Vec<FaqItem>,
    pub total: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HttpError {
    pub message: String,
    #[serde(rename = "statusCode")]
    pub status_code: i32,
}

