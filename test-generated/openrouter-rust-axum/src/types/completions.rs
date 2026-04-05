//! Types for the completions service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BestOfUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionChoice {
    pub finish_reason: CompletionFinishReason,
    pub index: f32,
    pub logprobs: LogprobsUnion3,
    pub text: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionCreateParams {
    pub best_of: Option<BestOfUnion>,
    pub echo: Option<LogprobsUnion>,
    pub frequency_penalty: Option<FrequencyPenaltyUnion>,
    pub logit_bias: Option<LogitBiasUnion>,
    pub logprobs: Option<LogprobsUnion4>,
    pub max_tokens: Option<MaxTokensUnion>,
    pub metadata: Option<MetadataUnion>,
    pub model: Option<ModelName>,
    pub models: Option<Vec<ModelName>>,
    pub n: Option<NUnion>,
    pub presence_penalty: Option<FrequencyPenaltyUnion>,
    pub prompt: PromptUnion,
    pub response_format: Option<ResponseFormatUnion2>,
    pub seed: Option<SeedUnion>,
    pub stop: Option<StopUnion2>,
    pub stream: Option<bool>,
    pub stream_options: Option<StreamOptionsUnion2>,
    pub suffix: Option<ReasoningUnion>,
    pub temperature: Option<TemperatureUnion>,
    pub top_p: Option<TopPUnion>,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CompletionFinishReason {
    Variant1(String),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionLogprobs {
    pub text_offset: Vec<f32>,
    pub token_logprobs: Vec<f32>,
    pub tokens: Vec<String>,
    pub top_logprobs: TopLogprobsUnion2,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionResponse {
    pub choices: Vec<CompletionChoice>,
    pub created: f32,
    pub id: String,
    pub model: String,
    pub object: String,
    pub system_fingerprint: Option<String>,
    pub usage: Option<CompletionUsage>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionUsage {
    pub completion_tokens: f32,
    pub prompt_tokens: f32,
    pub total_tokens: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion3 {
    CompletionLogprobs(CompletionLogprobs),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion4 {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MaxTokensUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MetadataUnion {
    Variant1(MetadataProperty),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum NUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PromptUnion {
    Variant1(String),
    Variant2(Vec<String>),
    Variant3(Vec<f32>),
    Variant4(Vec<Vec<f32>>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ResponseFormatUnion2 {
    Variant1(ResponseFormatUnion),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnion2 {
    Variant1(StopUnion2Union),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnion2Union {
    Variant1(String),
    Variant2(Vec<String>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StreamOptionsUnion2 {
    Variant1(StreamOptionsUnion2Object),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StreamOptionsUnion2Object {
    pub include_usage: Option<LogprobsUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TopLogprobsUnion2 {
    Variant1(Vec<LogitBiasUnionObject>),
    Variant2(serde_json::Value),
}

