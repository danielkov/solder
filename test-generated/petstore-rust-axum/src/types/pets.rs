//! Types for the pets service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DetailsProperty {

}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Error {
    pub code: String,
    pub details: Option<DetailsProperty>,
    pub message: String,
    pub success: bool,
}

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

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PetList {
    pub items: Vec<Pet>,
    pub limit: Option<i32>,
    pub offset: Option<i32>,
    pub total: i32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum PetStatus {
    #[serde(rename = "available")]
    Available,
    #[serde(rename = "pending")]
    Pending,
    #[serde(rename = "adopted")]
    Adopted,
    #[serde(rename = "not_available")]
    NotAvailable,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Species {
    #[serde(rename = "dog")]
    Dog,
    #[serde(rename = "cat")]
    Cat,
    #[serde(rename = "bird")]
    Bird,
    #[serde(rename = "rabbit")]
    Rabbit,
    #[serde(rename = "hamster")]
    Hamster,
    #[serde(rename = "guinea_pig")]
    GuineaPig,
    #[serde(rename = "fish")]
    Fish,
    #[serde(rename = "reptile")]
    Reptile,
    #[serde(rename = "other")]
    Other,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdatePet {
    pub age: Option<i32>,
    pub breed: Option<String>,
    pub name: Option<String>,
    pub status: Option<PetStatus>,
    pub tags: Option<Vec<String>>,
    pub weight: Option<f32>,
}

