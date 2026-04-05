//! Types for the embeddings service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsRequest {
    pub dimensions: Option<i32>,
    pub encoding_format: Option<String>,
    pub input: CreateEmbeddingsRequestInput,
    pub input_type: Option<String>,
    pub model: String,
    pub provider: Option<CreateEmbeddingsRequestProvider>,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreateEmbeddingsRequestInput {
    Variant1(String),
    Variant2(Vec<String>),
    Variant3(Vec<f32>),
    Variant4(Vec<Vec<f32>>),
    Variant5(Vec<CreateEmbeddingsRequestInputObject>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsRequestInputObject {
    pub content: Vec<CreateEmbeddingsRequestInputObjectContentItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreateEmbeddingsRequestInputObjectContentItem {
    Variant1(CreateEmbeddingsRequestInputObjectContentItemObject),
    Variant2(EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsRequestInputObjectContentItemObject {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsRequestProvider {
    pub allow_fallbacks: Option<bool>,
    pub data_collection: Option<DataCollection>,
    pub enforce_distillable_text: Option<bool>,
    pub ignore: Option<Vec<IgnoreItemOrRef>>,
    pub max_price: Option<MaxPriceProperty>,
    pub only: Option<Vec<IgnoreItemOrRef>>,
    pub order: Option<Vec<IgnoreItemOrRef>>,
    pub quantizations: Option<Vec<Quantization>>,
    pub require_parameters: Option<bool>,
    pub sort: Option<ProviderSort>,
    pub zdr: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsResponse {
    pub data: Vec<CreateEmbeddingsResponseDataItem>,
    pub id: Option<String>,
    pub model: String,
    pub object: String,
    pub usage: Option<CreateEmbeddingsResponseUsage>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsResponseDataItem {
    pub embedding: CreateEmbeddingsResponseDataItemEmbedding,
    pub index: Option<f32>,
    pub object: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreateEmbeddingsResponseDataItemEmbedding {
    Variant1(Vec<f32>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsResponseUsage {
    pub cost: Option<f32>,
    pub prompt_tokens: f32,
    pub total_tokens: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject {
    pub image_url: InlineTypeObjectVideoUrl,
    #[serde(rename = "type")]
    pub r#type: String,
}

