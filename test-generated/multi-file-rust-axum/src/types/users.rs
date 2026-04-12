//! Types for the users service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MetadataProperty {}

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

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserList {
    pub data: Vec<User>,
    pub page: i32,
    #[serde(rename = "pageSize")]
    pub page_size: i32,
    pub total: i32,
}

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
