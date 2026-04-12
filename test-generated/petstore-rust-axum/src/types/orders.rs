//! Types for the orders service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewOrder {
    #[serde(rename = "ownerId")]
    pub owner_id: uuid::Uuid,
    #[serde(rename = "petId")]
    pub pet_id: uuid::Uuid,
    pub quantity: Option<i32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Order {
    #[serde(rename = "completedDate")]
    pub completed_date: Option<jiff::Timestamp>,
    pub id: uuid::Uuid,
    #[serde(rename = "orderDate")]
    pub order_date: jiff::Timestamp,
    #[serde(rename = "ownerId")]
    pub owner_id: uuid::Uuid,
    #[serde(rename = "petId")]
    pub pet_id: uuid::Uuid,
    pub quantity: Option<i32>,
    pub status: OrderStatus,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OrderStatus {
    #[serde(rename = "pending")]
    Pending,
    #[serde(rename = "approved")]
    Approved,
    #[serde(rename = "completed")]
    Completed,
    #[serde(rename = "cancelled")]
    Cancelled,
}
