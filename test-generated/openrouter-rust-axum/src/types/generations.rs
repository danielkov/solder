//! Types for the generations service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetGenerationResponse {
    pub data: GetGenerationResponseData,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetGenerationResponseData {
    pub api_type: String,
    pub app_id: f32,
    pub cache_discount: f32,
    pub cancelled: bool,
    pub created_at: String,
    pub external_user: String,
    pub finish_reason: String,
    pub generation_time: f32,
    pub id: String,
    pub is_byok: bool,
    pub latency: f32,
    pub model: String,
    pub moderation_latency: f32,
    pub native_finish_reason: String,
    pub native_tokens_cached: f32,
    pub native_tokens_completion: f32,
    pub native_tokens_completion_images: f32,
    pub native_tokens_prompt: f32,
    pub native_tokens_reasoning: f32,
    pub num_input_audio_prompt: f32,
    pub num_media_completion: f32,
    pub num_media_prompt: f32,
    pub num_search_results: f32,
    pub origin: String,
    pub provider_name: String,
    pub streamed: bool,
    pub tokens_completion: f32,
    pub tokens_prompt: f32,
    pub total_cost: f32,
    pub upstream_id: String,
    pub upstream_inference_cost: f32,
    pub usage: f32,
}
