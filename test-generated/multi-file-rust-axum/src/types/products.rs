//! Types for the products service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InventoryUpdate {
    pub operation: Option<String>,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Product {
    pub category: String,
    #[serde(rename = "createdAt")]
    pub created_at: Option<jiff::Timestamp>,
    pub currency: Option<String>,
    pub description: Option<String>,
    pub id: uuid::Uuid,
    pub images: Option<Vec<String>>,
    pub inventory: Option<i32>,
    pub name: String,
    pub price: f64,
    pub sku: String,
    pub specifications: Option<SpecificationsProperty>,
    pub status: String,
    pub tags: Option<Vec<String>>,
    #[serde(rename = "updatedAt")]
    pub updated_at: Option<jiff::Timestamp>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductCreate {
    pub category: String,
    pub currency: Option<String>,
    pub description: Option<String>,
    pub images: Option<Vec<String>>,
    pub inventory: Option<i32>,
    pub name: String,
    pub price: f64,
    pub sku: String,
    pub specifications: Option<SpecificationsProperty>,
    pub tags: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductList {
    pub data: Vec<Product>,
    pub page: i32,
    #[serde(rename = "pageSize")]
    pub page_size: i32,
    pub total: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductUpdate {
    pub description: Option<String>,
    pub images: Option<Vec<String>>,
    pub inventory: Option<i32>,
    pub name: Option<String>,
    pub price: Option<f64>,
    pub specifications: Option<SpecificationsProperty>,
    pub status: Option<String>,
    pub tags: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SpecificationsProperty {

}

