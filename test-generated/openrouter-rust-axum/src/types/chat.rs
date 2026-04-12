//! Types for the chat service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AssistantMessage {
    pub content: Option<ContentUnion>,
    pub name: Option<String>,
    pub reasoning: Option<ReasoningUnion>,
    pub refusal: Option<ReasoningUnion>,
    pub role: String,
    pub tool_calls: Option<Vec<ChatMessageToolCall>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BytesUnion {
    Variant1(Vec<f32>),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ChatCompletionFinishReason {
    #[serde(rename = "tool_calls")]
    ToolCalls,
    #[serde(rename = "stop")]
    Stop,
    #[serde(rename = "length")]
    Length,
    #[serde(rename = "content_filter")]
    ContentFilter,
    #[serde(rename = "error")]
    Error,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatGenerationParams {
    pub frequency_penalty: Option<FrequencyPenaltyUnion>,
    pub logit_bias: Option<LogitBiasUnion>,
    pub logprobs: Option<LogprobsUnion>,
    pub max_completion_tokens: Option<MaxCompletionTokensUnion>,
    pub max_tokens: Option<MaxCompletionTokensUnion>,
    pub messages: Vec<Message>,
    pub metadata: Option<MetadataProperty>,
    pub model: Option<ModelName>,
    pub models: Option<Vec<ModelName>>,
    pub presence_penalty: Option<FrequencyPenaltyUnion>,
    pub reasoning: Option<ReasoningProperty>,
    pub response_format: Option<ResponseFormatUnion>,
    pub seed: Option<SeedUnion>,
    pub stop: Option<StopUnion>,
    pub stream: Option<bool>,
    pub stream_options: Option<StreamOptionsUnion>,
    pub temperature: Option<TemperatureUnion>,
    pub tool_choice: Option<ToolChoiceOption>,
    pub tools: Option<Vec<ToolDefinitionJson>>,
    pub top_logprobs: Option<TopLogprobsUnion>,
    pub top_p: Option<TopPUnion>,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatGenerationTokenUsage {
    pub completion_tokens: f32,
    pub completion_tokens_details: Option<CompletionTokensDetailsUnion>,
    pub prompt_tokens: f32,
    pub prompt_tokens_details: Option<PromptTokensDetailsUnion>,
    pub total_tokens: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ChatMessageContentItem {
    ChatMessageContentItemText(ChatMessageContentItemText),
    ChatMessageContentItemImage(ChatMessageContentItemImage),
    ChatMessageContentItemAudio(ChatMessageContentItemAudio),
    ChatMessageContentItemVideo(ChatMessageContentItemVideo),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageContentItemAudio {
    pub input_audio: InputAudioProperty,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageContentItemImage {
    pub image_url: ImageUrlProperty,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageContentItemText {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ChatMessageContentItemVideo {
    Variant1(InlineTypeObject),
    Variant2(InlineTypeObject2),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageTokenLogprob {
    pub bytes: BytesUnion,
    pub logprob: f32,
    pub token: String,
    pub top_logprobs: Vec<TopLogprobsItem>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageTokenLogprobs {
    pub content: ContentUnion2,
    pub refusal: ContentUnion2,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageToolCall {
    pub function: FunctionProperty,
    pub id: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatResponse {
    pub choices: Vec<ChatResponseChoice>,
    pub created: f32,
    pub id: String,
    pub model: String,
    pub object: String,
    pub system_fingerprint: Option<ReasoningUnion>,
    pub usage: Option<ChatGenerationTokenUsage>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatResponseChoice {
    pub finish_reason: Schema0,
    pub index: f32,
    pub logprobs: Option<LogprobsUnion2>,
    pub message: AssistantMessage,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatStreamOptions {
    pub include_usage: Option<bool>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CompletionTokensDetailsUnion {
    Variant1(CompletionTokensDetailsUnionObject),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionTokensDetailsUnionObject {
    pub accepted_prediction_tokens:
        Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
    pub audio_tokens: Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
    pub reasoning_tokens: Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
    pub rejected_prediction_tokens:
        Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CompletionTokensDetailsUnionObjectAcceptedPredictionTokens {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ContentUnion {
    Variant1(ContentUnionUnion),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ContentUnion2 {
    Variant1(Vec<ChatMessageTokenLogprob>),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ContentUnionUnion {
    Variant1(String),
    Variant2(Vec<ChatMessageContentItem>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EffortUnion {
    Variant1(String),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FunctionProperty {
    pub arguments: String,
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FunctionProperty3 {
    pub name: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FunctionProperty4 {
    pub description: Option<String>,
    pub name: String,
    pub parameters: Option<MetadataProperty>,
    pub strict: Option<LogprobsUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ImageUrlProperty {
    pub detail: Option<String>,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject {
    #[serde(rename = "type")]
    pub r#type: String,
    pub video_url: InlineTypeObjectVideoUrl,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject2 {
    #[serde(rename = "type")]
    pub r#type: String,
    pub video_url: InlineTypeObjectVideoUrl,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject3 {
    pub content: InlineTypeObject3Content,
    pub name: Option<String>,
    pub role: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeObject3Content {
    Variant1(String),
    Variant2(Vec<ChatMessageContentItemText>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion2 {
    ChatMessageTokenLogprobs(ChatMessageTokenLogprobs),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MaxCompletionTokensUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum Message {
    SystemMessage(SystemMessage),
    UserMessage(UserMessage),
    Variant3(InlineTypeObject3),
    AssistantMessage(AssistantMessage),
    ToolResponseMessage(ToolResponseMessage),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NamedToolChoice {
    pub function: FunctionProperty3,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PromptTokensDetailsUnion {
    Variant1(PromptTokensDetailsUnionObject),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PromptTokensDetailsUnionObject {
    pub audio_tokens: Option<f32>,
    pub cached_tokens: Option<f32>,
    pub video_tokens: Option<f32>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReasoningProperty {
    pub effort: Option<EffortUnion>,
    pub summary: Option<SummaryUnion>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnion {
    Variant1(StopUnionUnion),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnionUnion {
    Variant1(String),
    Variant2(Vec<String>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StreamOptionsUnion {
    ChatStreamOptions(ChatStreamOptions),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SummaryUnion {
    ReasoningSummaryVerbosity(ReasoningSummaryVerbosity),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SystemMessage {
    pub content: InlineTypeObject3Content,
    pub name: Option<String>,
    pub role: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ToolChoiceOption {
    Variant1(String),
    Variant2(String),
    Variant3(String),
    NamedToolChoice(NamedToolChoice),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolDefinitionJson {
    pub function: FunctionProperty4,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolResponseMessage {
    pub content: ContentUnionUnion,
    pub role: String,
    pub tool_call_id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TopLogprobsItem {
    pub bytes: BytesUnion,
    pub logprob: f32,
    pub token: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TopLogprobsUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserMessage {
    pub content: ContentUnionUnion,
    pub name: Option<String>,
    pub role: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum Schema0 {
    ChatCompletionFinishReason(ChatCompletionFinishReason),
    Variant2(serde_json::Value),
}
