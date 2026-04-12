//! Types for the api_keys service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateKeysRequest {
    pub expires_at: Option<jiff::Timestamp>,
    pub include_byok_in_limit: Option<bool>,
    pub limit: Option<f32>,
    pub limit_reset: Option<String>,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateKeysResponse {
    pub data: CreateKeysResponseData,
    pub key: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateKeysResponseData {
    pub byok_usage: f32,
    pub byok_usage_daily: f32,
    pub byok_usage_monthly: f32,
    pub byok_usage_weekly: f32,
    pub created_at: String,
    pub disabled: bool,
    pub expires_at: Option<jiff::Timestamp>,
    pub hash: String,
    pub include_byok_in_limit: bool,
    pub label: String,
    pub limit: f32,
    pub limit_remaining: f32,
    pub limit_reset: String,
    pub name: String,
    pub updated_at: String,
    pub usage: f32,
    pub usage_daily: f32,
    pub usage_monthly: f32,
    pub usage_weekly: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeleteKeysResponse {
    pub deleted: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCurrentKeyResponse {
    pub data: GetCurrentKeyResponseData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCurrentKeyResponseData {
    pub byok_usage: f32,
    pub byok_usage_daily: f32,
    pub byok_usage_monthly: f32,
    pub byok_usage_weekly: f32,
    pub expires_at: Option<jiff::Timestamp>,
    pub include_byok_in_limit: bool,
    pub is_free_tier: bool,
    pub is_provisioning_key: bool,
    pub label: String,
    pub limit: f32,
    pub limit_remaining: f32,
    pub limit_reset: String,
    pub rate_limit: GetCurrentKeyResponseRateLimit,
    pub usage: f32,
    pub usage_daily: f32,
    pub usage_monthly: f32,
    pub usage_weekly: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCurrentKeyResponseRateLimit {
    pub interval: String,
    pub note: String,
    pub requests: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetKeyResponse {
    pub data: GetKeyResponseData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetKeyResponseData {
    pub byok_usage: f32,
    pub byok_usage_daily: f32,
    pub byok_usage_monthly: f32,
    pub byok_usage_weekly: f32,
    pub created_at: String,
    pub disabled: bool,
    pub expires_at: Option<jiff::Timestamp>,
    pub hash: String,
    pub include_byok_in_limit: bool,
    pub label: String,
    pub limit: f32,
    pub limit_remaining: f32,
    pub limit_reset: String,
    pub name: String,
    pub updated_at: String,
    pub usage: f32,
    pub usage_daily: f32,
    pub usage_monthly: f32,
    pub usage_weekly: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListResponse {
    pub data: Vec<ListResponseDataItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListResponseDataItem {
    pub byok_usage: f32,
    pub byok_usage_daily: f32,
    pub byok_usage_monthly: f32,
    pub byok_usage_weekly: f32,
    pub created_at: String,
    pub disabled: bool,
    pub expires_at: Option<jiff::Timestamp>,
    pub hash: String,
    pub include_byok_in_limit: bool,
    pub label: String,
    pub limit: f32,
    pub limit_remaining: f32,
    pub limit_reset: String,
    pub name: String,
    pub updated_at: String,
    pub usage: f32,
    pub usage_daily: f32,
    pub usage_monthly: f32,
    pub usage_weekly: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateKeysRequest {
    pub disabled: Option<bool>,
    pub include_byok_in_limit: Option<bool>,
    pub limit: Option<f32>,
    pub limit_reset: Option<String>,
    pub name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateKeysResponse {
    pub data: UpdateKeysResponseData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateKeysResponseData {
    pub byok_usage: f32,
    pub byok_usage_daily: f32,
    pub byok_usage_monthly: f32,
    pub byok_usage_weekly: f32,
    pub created_at: String,
    pub disabled: bool,
    pub expires_at: Option<jiff::Timestamp>,
    pub hash: String,
    pub include_byok_in_limit: bool,
    pub label: String,
    pub limit: f32,
    pub limit_remaining: f32,
    pub limit_reset: String,
    pub name: String,
    pub updated_at: String,
    pub usage: f32,
    pub usage_daily: f32,
    pub usage_monthly: f32,
    pub usage_weekly: f32,
}
