//! Types for the orders service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Address {
    pub city: String,
    pub country: String,
    #[serde(rename = "postalCode")]
    pub postal_code: String,
    pub state: Option<String>,
    pub street: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CancelOrderRequest {
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ItemsItem {
    #[serde(rename = "productId")]
    pub product_id: uuid::Uuid,
    pub quantity: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Order {
    #[serde(rename = "billingAddress")]
    pub billing_address: Option<Address>,
    #[serde(rename = "completedAt")]
    pub completed_at: Option<jiff::Timestamp>,
    #[serde(rename = "createdAt")]
    pub created_at: Option<jiff::Timestamp>,
    pub currency: Option<String>,
    pub id: uuid::Uuid,
    pub items: Vec<OrderItem>,
    pub notes: Option<String>,
    #[serde(rename = "orderNumber")]
    pub order_number: Option<String>,
    #[serde(rename = "paymentMethod")]
    pub payment_method: Option<String>,
    #[serde(rename = "paymentStatus")]
    pub payment_status: Option<String>,
    #[serde(rename = "shippingAddress")]
    pub shipping_address: Option<Address>,
    #[serde(rename = "shippingCost")]
    pub shipping_cost: Option<f64>,
    pub status: String,
    pub subtotal: Option<f64>,
    pub tax: Option<f64>,
    #[serde(rename = "totalAmount")]
    pub total_amount: f64,
    #[serde(rename = "trackingNumber")]
    pub tracking_number: Option<String>,
    #[serde(rename = "updatedAt")]
    pub updated_at: Option<jiff::Timestamp>,
    #[serde(rename = "userId")]
    pub user_id: uuid::Uuid,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OrderCreate {
    #[serde(rename = "billingAddress")]
    pub billing_address: Option<Address>,
    pub items: Vec<ItemsItem>,
    pub notes: Option<String>,
    #[serde(rename = "paymentMethod")]
    pub payment_method: Option<String>,
    #[serde(rename = "shippingAddress")]
    pub shipping_address: Address,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OrderItem {
    #[serde(rename = "productId")]
    pub product_id: uuid::Uuid,
    #[serde(rename = "productName")]
    pub product_name: Option<String>,
    pub quantity: i32,
    #[serde(rename = "totalPrice")]
    pub total_price: Option<f64>,
    #[serde(rename = "unitPrice")]
    pub unit_price: f64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OrderList {
    pub data: Vec<Order>,
    pub page: i32,
    #[serde(rename = "pageSize")]
    pub page_size: i32,
    pub total: i32,
}

