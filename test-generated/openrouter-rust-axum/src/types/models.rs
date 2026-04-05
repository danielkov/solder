//! Types for the models service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DataProperty2 {
    pub count: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModelsCountResponse {
    pub data: DataProperty2,
}

