//! API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(any(feature = "owners", feature = "pets"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Address {
    pub city: String,
    pub country: String,
    #[serde(rename = "postalCode")]
    pub postal_code: Option<String>,
    pub state: Option<String>,
    pub street: String,
}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DetailsProperty {

}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Error {
    pub code: String,
    pub details: Option<DetailsProperty>,
    pub message: String,
    pub success: bool,
}

#[cfg(feature = "faq")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum FaqCategory {
    General,
    Orders,
    Shipping,
    Returns,
    Pets,
}

#[cfg(feature = "faq")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FaqItem {
    pub answer: String,
    pub category: FaqCategory,
    pub id: uuid::Uuid,
    pub question: String,
    #[serde(rename = "relatedURLs")]
    pub related_ur_ls: Option<Vec<String>>,
}

#[cfg(feature = "faq")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FaqList {
    pub items: Vec<FaqItem>,
    pub total: i32,
}

#[cfg(feature = "faq")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HttpError {
    pub message: String,
    #[serde(rename = "statusCode")]
    pub status_code: i32,
}

#[cfg(feature = "orders")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewOrder {
    #[serde(rename = "ownerId")]
    pub owner_id: uuid::Uuid,
    #[serde(rename = "petId")]
    pub pet_id: uuid::Uuid,
    pub quantity: Option<i32>,
}

#[cfg(feature = "owners")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewOwner {
    pub address: Option<Address>,
    pub email: String,
    #[serde(rename = "firstName")]
    pub first_name: String,
    #[serde(rename = "lastName")]
    pub last_name: String,
    pub phone: Option<String>,
}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewPet {
    pub age: Option<i32>,
    pub breed: Option<String>,
    pub name: String,
    #[serde(rename = "photoUrls")]
    pub photo_urls: Option<Vec<String>>,
    pub species: Species,
    pub tags: Option<Vec<String>>,
    pub weight: Option<f32>,
}

#[cfg(feature = "orders")]
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

#[cfg(feature = "orders")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OrderStatus {
    Pending,
    Approved,
    Completed,
    Cancelled,
}

#[cfg(any(feature = "owners", feature = "pets"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Owner {
    pub address: Option<Address>,
    pub email: String,
    #[serde(rename = "firstName")]
    pub first_name: String,
    pub id: uuid::Uuid,
    #[serde(rename = "lastName")]
    pub last_name: String,
    pub phone: Option<String>,
}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Pet {
    pub age: Option<i32>,
    pub breed: Option<String>,
    #[serde(rename = "createdAt")]
    pub created_at: Option<jiff::Timestamp>,
    pub id: uuid::Uuid,
    pub name: String,
    pub owner: Option<Owner>,
    #[serde(rename = "photoUrls")]
    pub photo_urls: Option<Vec<String>>,
    pub species: Species,
    pub status: PetStatus,
    pub tags: Option<Vec<String>>,
    #[serde(rename = "type")]
    pub r#type: String,
    #[serde(rename = "updatedAt")]
    pub updated_at: Option<jiff::Timestamp>,
    pub weight: Option<f32>,
}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PetList {
    pub items: Vec<Pet>,
    pub limit: Option<i32>,
    pub offset: Option<i32>,
    pub total: i32,
}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum PetStatus {
    Available,
    Pending,
    Adopted,
    NotAvailable,
}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Species {
    Dog,
    Cat,
    Bird,
    Rabbit,
    Hamster,
    GuineaPig,
    Fish,
    Reptile,
    Other,
}

#[cfg(feature = "pets")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdatePet {
    pub age: Option<i32>,
    pub breed: Option<String>,
    pub name: Option<String>,
    pub status: Option<PetStatus>,
    pub tags: Option<Vec<String>>,
    pub weight: Option<f32>,
}

#[cfg(feature = "files")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UploadFileWithMetadataRequestMetadata {
    #[serde(rename = "ownerId")]
    pub owner_id: Option<String>,
    pub tags: Option<Vec<String>>,
}

