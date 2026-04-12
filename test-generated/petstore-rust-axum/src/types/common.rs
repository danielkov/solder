//! Shared API types

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
