//! Types for the owners service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

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

