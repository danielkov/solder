//! Types for the o_auth service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateAuthKeysCodeRequest {
    pub callback_url: String,
    pub code_challenge: Option<String>,
    pub code_challenge_method: Option<String>,
    pub expires_at: Option<jiff::Timestamp>,
    pub limit: Option<f32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateAuthKeysCodeResponse {
    pub data: CreateAuthKeysCodeResponseData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateAuthKeysCodeResponseData {
    pub app_id: f32,
    pub created_at: String,
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExchangeAuthCodeForApiKeyRequest {
    pub code: String,
    pub code_challenge_method: Option<String>,
    pub code_verifier: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExchangeAuthCodeForApiKeyResponse {
    pub key: String,
    pub user_id: String,
}

