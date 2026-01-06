//! API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(feature = "orders")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Address {
    pub city: String,
    pub country: String,
    #[serde(rename = "postalCode")]
    pub postal_code: String,
    pub state: Option<String>,
    pub street: String,
}

#[cfg(feature = "orders")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CancelOrderRequest {
    pub reason: Option<String>,
}

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

#[cfg(feature = "products")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InventoryUpdate {
    pub operation: Option<String>,
    pub quantity: i32,
}

#[cfg(feature = "orders")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ItemsItem {
    #[serde(rename = "productId")]
    pub product_id: uuid::Uuid,
    pub quantity: i32,
}

#[cfg(feature = "users")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MetadataProperty {}

#[cfg(feature = "orders")]
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

#[cfg(feature = "orders")]
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

#[cfg(feature = "orders")]
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

#[cfg(feature = "orders")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OrderList {
    pub data: Vec<Order>,
    pub page: i32,
    #[serde(rename = "pageSize")]
    pub page_size: i32,
    pub total: i32,
}

#[cfg(feature = "products")]
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

#[cfg(feature = "products")]
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

#[cfg(feature = "products")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProductList {
    pub data: Vec<Product>,
    pub page: i32,
    #[serde(rename = "pageSize")]
    pub page_size: i32,
    pub total: i32,
}

#[cfg(feature = "products")]
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

#[cfg(feature = "products")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SpecificationsProperty {}

#[cfg(feature = "users")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct User {
    #[serde(rename = "createdAt")]
    pub created_at: Option<jiff::Timestamp>,
    pub email: String,
    #[serde(rename = "firstName")]
    pub first_name: Option<String>,
    pub id: uuid::Uuid,
    #[serde(rename = "lastName")]
    pub last_name: Option<String>,
    pub metadata: Option<MetadataProperty>,
    pub role: Option<String>,
    pub status: String,
    #[serde(rename = "updatedAt")]
    pub updated_at: Option<jiff::Timestamp>,
    pub username: String,
}

#[cfg(feature = "users")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserCreate {
    pub email: String,
    #[serde(rename = "firstName")]
    pub first_name: Option<String>,
    #[serde(rename = "lastName")]
    pub last_name: Option<String>,
    pub role: Option<String>,
    pub username: String,
}

#[cfg(feature = "users")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserList {
    pub data: Vec<User>,
    pub page: i32,
    #[serde(rename = "pageSize")]
    pub page_size: i32,
    pub total: i32,
}

#[cfg(feature = "users")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserUpdate {
    pub email: Option<String>,
    #[serde(rename = "firstName")]
    pub first_name: Option<String>,
    #[serde(rename = "lastName")]
    pub last_name: Option<String>,
    pub role: Option<String>,
    pub status: Option<String>,
}
