//! Types for the endpoints service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ArchitectureUnion {
    pub input_modalities: Vec<InputModality>,
    pub instruct_type: String,
    pub modality: String,
    pub output_modalities: Vec<OutputModality>,
    pub tokenizer: ModelGroup,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum EndpointStatus {
    #[serde(rename = "0")]
    Value0,
    #[serde(rename = "-1")]
    Value1,
    #[serde(rename = "-2")]
    Value2,
    #[serde(rename = "-3")]
    Value3,
    #[serde(rename = "-5")]
    Value4,
    #[serde(rename = "-10")]
    Value5,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EndpointsListEndpointsResponse {
    pub data: ListEndpointsResponse,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListEndpointsResponse {
    pub architecture: ArchitectureUnion,
    pub created: f32,
    pub description: String,
    pub endpoints: Vec<PublicEndpoint>,
    pub id: String,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListEndpointsZdrResponse {
    pub data: Vec<PublicEndpoint>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PricingProperty {
    pub audio: Option<BigNumberUnion>,
    pub completion: BigNumberUnion,
    pub discount: Option<f32>,
    pub image: Option<BigNumberUnion>,
    pub image_output: Option<BigNumberUnion>,
    pub image_token: Option<BigNumberUnion>,
    pub input_audio_cache: Option<BigNumberUnion>,
    pub input_cache_read: Option<BigNumberUnion>,
    pub input_cache_write: Option<BigNumberUnion>,
    pub internal_reasoning: Option<BigNumberUnion>,
    pub prompt: BigNumberUnion,
    pub request: Option<BigNumberUnion>,
    pub web_search: Option<BigNumberUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PublicEndpoint {
    pub context_length: f32,
    pub max_completion_tokens: f32,
    pub max_prompt_tokens: f32,
    pub model_name: String,
    pub name: String,
    pub pricing: PricingProperty,
    pub provider_name: ProviderName,
    pub quantization: QuantizationUnion,
    pub status: Option<EndpointStatus>,
    pub supported_parameters: Vec<Parameter>,
    pub supports_implicit_caching: bool,
    pub tag: String,
    pub uptime_last_30m: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuantizationUnion {

}

