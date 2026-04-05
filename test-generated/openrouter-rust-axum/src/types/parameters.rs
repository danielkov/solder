//! Types for the parameters service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetParametersResponse {
    pub data: GetParametersResponseData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetParametersResponseData {
    pub model: String,
    pub supported_parameters: Vec<String>,
}

