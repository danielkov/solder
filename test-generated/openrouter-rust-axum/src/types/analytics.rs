//! Types for the analytics service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ActivityItem {
    pub byok_usage_inference: f32,
    pub completion_tokens: f32,
    pub date: String,
    pub endpoint_id: String,
    pub model: String,
    pub model_permaslug: String,
    pub prompt_tokens: f32,
    pub provider_name: String,
    pub reasoning_tokens: f32,
    pub requests: f32,
    pub usage: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetUserActivityResponse {
    pub data: Vec<ActivityItem>,
}
