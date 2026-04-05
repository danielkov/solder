//! Types for the beta_responses service

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

use super::*;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FileCitation {
    pub file_id: String,
    pub filename: String,
    pub index: f32,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FilePath {
    pub file_id: String,
    pub index: f32,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FiltersProperty {
    pub allowed_domains: Option<Vec<String>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ImageGenerationStatus {
    #[serde(rename = "in_progress")]
    InProgress,
    #[serde(rename = "completed")]
    Completed,
    #[serde(rename = "generating")]
    Generating,
    #[serde(rename = "failed")]
    Failed,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject4 {
    pub name: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject5 {
    #[serde(rename = "type")]
    pub r#type: InlineTypeObject5Type,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeObject5Type {
    Variant1(String),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnion {
    Variant1(InlineTypeUnionObject),
    Variant2(InlineTypeUnionObject2),
    Variant3(InlineTypeUnionObject3),
    Variant4(InlineTypeUnionObject4),
    OutputItemImageGenerationCall(OutputItemImageGenerationCall),
    OutputMessage(OutputMessage),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnion2 {
    OpenResponsesReasoning(OpenResponsesReasoning),
    OpenResponsesEasyInputMessage(OpenResponsesEasyInputMessage),
    OpenResponsesInputMessageItem(OpenResponsesInputMessageItem),
    OpenResponsesFunctionToolCall(OpenResponsesFunctionToolCall),
    OpenResponsesFunctionCallOutput(OpenResponsesFunctionCallOutput),
    ResponsesOutputMessage(ResponsesOutputMessage),
    ResponsesOutputItemReasoning(ResponsesOutputItemReasoning),
    ResponsesOutputItemFunctionCall(ResponsesOutputItemFunctionCall),
    ResponsesWebSearchCallOutput(ResponsesWebSearchCallOutput),
    ResponsesOutputItemFileSearchCall(ResponsesOutputItemFileSearchCall),
    ResponsesImageGenerationCall(ResponsesImageGenerationCall),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnion3 {
    Variant1(String),
    Variant2(String),
    Variant3(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeUnionObject {
    pub content: InlineTypeUnionObjectContent,
    pub role: InlineTypeUnionObjectRole,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeUnionObject2 {
    pub content: Vec<InlineTypeUnionObjectContentUnion>,
    pub id: String,
    pub role: InlineTypeUnionObject2Role,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObject2Role {
    Variant1(String),
    Variant2(String),
    Variant3(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeUnionObject3 {
    pub call_id: String,
    pub id: Option<String>,
    pub output: String,
    pub status: Option<ToolCallStatus>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeUnionObject4 {
    pub arguments: String,
    pub call_id: String,
    pub id: Option<String>,
    pub name: String,
    pub status: Option<ToolCallStatus>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObjectContent {
    Variant1(Vec<InlineTypeUnionObjectContentUnion>),
    Variant2(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObjectContentUnion {
    ResponseInputText(ResponseInputText),
    ResponseInputImage(ResponseInputImage),
    ResponseInputFile(ResponseInputFile),
    ResponseInputAudio(ResponseInputAudio),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObjectRole {
    Variant1(String),
    Variant2(String),
    Variant3(String),
    Variant4(String),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InputTokensDetailsProperty {
    pub cached_tokens: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenAiResponsesAnnotation {
    FileCitation(FileCitation),
    UrlCitation(UrlCitation),
    FilePath(FilePath),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OpenAiResponsesIncludable {
    #[serde(rename = "file_search_call.results")]
    FileSearchCallResults,
    #[serde(rename = "message.input_image.image_url")]
    MessageInputImageImageUrl,
    #[serde(rename = "computer_call_output.output.image_url")]
    ComputerCallOutputOutputImageUrl,
    #[serde(rename = "reasoning.encrypted_content")]
    ReasoningEncryptedContent,
    #[serde(rename = "code_interpreter_call.outputs")]
    CodeInterpreterCallOutputs,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesIncompleteDetails {
    pub reason: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenAiResponsesInput {
    Variant1(String),
    Variant2(Vec<InlineTypeUnion>),
    Variant3(serde_json::Value),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesPrompt {
    pub id: String,
    pub variables: Option<VariablesProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesReasoningConfig {
    pub effort: Option<OpenAiResponsesReasoningEffort>,
    pub summary: Option<ReasoningSummaryVerbosity>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OpenAiResponsesReasoningEffort {
    #[serde(rename = "high")]
    High,
    #[serde(rename = "medium")]
    Medium,
    #[serde(rename = "low")]
    Low,
    #[serde(rename = "minimal")]
    Minimal,
    #[serde(rename = "none")]
    None,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesRefusalContent {
    pub refusal: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OpenAiResponsesResponseStatus {
    #[serde(rename = "completed")]
    Completed,
    #[serde(rename = "incomplete")]
    Incomplete,
    #[serde(rename = "in_progress")]
    InProgress,
    #[serde(rename = "failed")]
    Failed,
    #[serde(rename = "cancelled")]
    Cancelled,
    #[serde(rename = "queued")]
    Queued,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OpenAiResponsesServiceTier {
    #[serde(rename = "auto")]
    Auto,
    #[serde(rename = "default")]
    Default,
    #[serde(rename = "flex")]
    Flex,
    #[serde(rename = "priority")]
    Priority,
    #[serde(rename = "scale")]
    Scale,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenAiResponsesToolChoice {
    Variant1(String),
    Variant2(String),
    Variant3(String),
    Variant4(InlineTypeObject4),
    Variant5(InlineTypeObject5),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OpenAiResponsesTruncation {
    #[serde(rename = "auto")]
    Auto,
    #[serde(rename = "disabled")]
    Disabled,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesUsage {
    pub input_tokens: f32,
    pub input_tokens_details: InputTokensDetailsProperty,
    pub output_tokens: f32,
    pub output_tokens_details: OutputTokensDetailsProperty,
    pub total_tokens: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesEasyInputMessage {
    pub content: InlineTypeUnionObjectContent,
    pub role: InlineTypeUnionObjectRole,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesFunctionCallOutput {
    pub call_id: String,
    pub id: Option<String>,
    pub output: String,
    pub status: Option<ToolCallStatus>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesFunctionToolCall {
    pub arguments: String,
    pub call_id: String,
    pub id: String,
    pub name: String,
    pub status: Option<ToolCallStatus>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenResponsesInput {
    Variant1(String),
    Variant2(Vec<InlineTypeUnion2>),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesInputMessageItem {
    pub content: Vec<InlineTypeUnionObjectContentUnion>,
    pub id: Option<String>,
    pub role: InlineTypeUnionObject2Role,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesNonStreamingResponse {
    pub background: Option<bool>,
    pub created_at: f32,
    pub error: ResponsesErrorField,
    pub id: String,
    pub incomplete_details: OpenAiResponsesIncompleteDetails,
    pub instructions: OpenAiResponsesInput,
    pub max_output_tokens: Option<f32>,
    pub max_tool_calls: Option<f32>,
    pub metadata: OpenResponsesRequestMetadata,
    pub model: String,
    pub object: String,
    pub output: Vec<OutputItemUnion>,
    pub output_text: Option<String>,
    pub parallel_tool_calls: bool,
    pub previous_response_id: Option<String>,
    pub prompt: Option<OpenAiResponsesPrompt>,
    pub prompt_cache_key: Option<String>,
    pub reasoning: Option<OpenAiResponsesReasoningConfig>,
    pub safety_identifier: Option<String>,
    pub service_tier: Option<OpenAiResponsesServiceTier>,
    pub status: Option<OpenAiResponsesResponseStatus>,
    pub store: Option<bool>,
    pub temperature: f32,
    pub text: Option<ResponseTextConfig>,
    pub tool_choice: OpenAiResponsesToolChoice,
    pub tools: Vec<ToolsItemUnion>,
    pub top_logprobs: Option<f32>,
    pub top_p: f32,
    pub truncation: Option<OpenAiResponsesTruncation>,
    pub usage: Option<OpenAiResponsesUsage>,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesReasoning {
    pub content: Option<Vec<ReasoningTextContent>>,
    pub encrypted_content: Option<String>,
    pub format: Option<String>,
    pub id: String,
    pub signature: Option<String>,
    pub status: Option<InlineTypeUnion3>,
    pub summary: Vec<ReasoningSummaryText>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesReasoningConfig {
    pub effort: Option<OpenAiResponsesReasoningEffort>,
    pub enabled: Option<bool>,
    pub max_tokens: Option<f32>,
    pub summary: Option<ReasoningSummaryVerbosity>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesRequest {
    pub background: Option<bool>,
    pub include: Option<Vec<OpenAiResponsesIncludable>>,
    pub input: Option<OpenResponsesInput>,
    pub instructions: Option<String>,
    pub max_output_tokens: Option<f32>,
    pub metadata: Option<OpenResponsesRequestMetadata>,
    pub model: Option<String>,
    pub models: Option<Vec<String>>,
    pub parallel_tool_calls: Option<bool>,
    pub plugins: Option<Vec<PluginsItemUnion>>,
    pub previous_response_id: Option<String>,
    pub prompt: Option<OpenAiResponsesPrompt>,
    pub prompt_cache_key: Option<String>,
    pub provider: Option<ProviderProperty>,
    pub reasoning: Option<OpenResponsesReasoningConfig>,
    pub safety_identifier: Option<String>,
    pub service_tier: Option<ServiceTierUnion>,
    pub store: Option<bool>,
    pub stream: Option<bool>,
    pub temperature: Option<f32>,
    pub text: Option<OpenResponsesResponseText>,
    pub tool_choice: Option<OpenAiResponsesToolChoice>,
    pub tools: Option<Vec<ToolsItemUnion>>,
    pub top_k: Option<f32>,
    pub top_p: Option<f32>,
    pub truncation: Option<TruncationUnion>,
    pub user: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesRequestMetadata {

}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesResponseText {
    pub format: Option<ResponseFormatTextConfig>,
    pub verbosity: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearch20250826Tool {
    pub filters: Option<FiltersProperty>,
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<ResponsesWebSearchUserLocation>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearchPreview20250311Tool {
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<WebSearchPreviewToolUserLocation>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearchPreviewTool {
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<WebSearchPreviewToolUserLocation>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearchTool {
    pub filters: Option<FiltersProperty>,
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<ResponsesWebSearchUserLocation>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemFileSearchCall {
    pub id: String,
    pub queries: Vec<String>,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemFunctionCall {
    pub arguments: String,
    pub call_id: String,
    pub id: Option<String>,
    pub name: String,
    pub status: Option<InlineTypeUnion3>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemImageGenerationCall {
    pub id: String,
    pub result: Option<String>,
    pub status: ImageGenerationStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemReasoning {
    pub content: Option<Vec<ReasoningTextContent>>,
    pub encrypted_content: Option<String>,
    pub id: String,
    pub status: Option<InlineTypeUnion3>,
    pub summary: Vec<ReasoningSummaryText>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OutputItemUnion {
    OutputMessage(OutputMessage),
    OutputItemReasoning(OutputItemReasoning),
    OutputItemFunctionCall(OutputItemFunctionCall),
    OutputItemWebSearchCall(OutputItemWebSearchCall),
    OutputItemFileSearchCall(OutputItemFileSearchCall),
    OutputItemImageGenerationCall(OutputItemImageGenerationCall),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemWebSearchCall {
    pub id: String,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputMessage {
    pub content: Vec<PartUnion>,
    pub id: String,
    pub role: String,
    pub status: Option<InlineTypeUnion3>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputTokensDetailsProperty {
    pub reasoning_tokens: f32,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PartUnion {
    ResponseOutputText(ResponseOutputText),
    OpenAiResponsesRefusalContent(OpenAiResponsesRefusalContent),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PayloadTooLargeResponse {
    pub error: PayloadTooLargeResponseErrorData,
    pub user_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PayloadTooLargeResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PluginsItemUnion {
    Variant1(PluginsItemUnionObject),
    Variant2(PluginsItemUnionObject2),
    Variant3(PluginsItemUnionObject3),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject {
    pub id: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject2 {
    pub engine: Option<String>,
    pub id: String,
    pub max_results: Option<f32>,
    pub search_prompt: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject3 {
    pub id: String,
    pub max_files: Option<f32>,
    pub pdf: Option<PluginsItemUnionObject3Pdf>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject3Pdf {
    pub engine: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProviderProperty {
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
pub struct ReasoningSummaryText {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReasoningTextContent {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RequestTimeoutResponse {
    pub error: RequestTimeoutResponseErrorData,
    pub user_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RequestTimeoutResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ResponseFormatTextConfig {
    ResponsesFormatText(ResponsesFormatText),
    ResponsesFormatJsonObject(ResponsesFormatJsonObject),
    ResponsesFormatTextJsonSchemaConfig(ResponsesFormatTextJsonSchemaConfig),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputAudio {
    pub input_audio: InputAudioProperty,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputFile {
    pub file_data: Option<String>,
    pub file_id: Option<String>,
    pub file_url: Option<String>,
    pub filename: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputImage {
    pub detail: String,
    pub image_url: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputText {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseOutputText {
    pub annotations: Option<Vec<OpenAiResponsesAnnotation>>,
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseTextConfig {
    pub format: Option<ResponseFormatTextConfig>,
    pub verbosity: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesErrorField {
    pub code: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesFormatJsonObject {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesFormatText {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesFormatTextJsonSchemaConfig {
    pub description: Option<String>,
    pub name: String,
    pub schema: MetadataProperty,
    pub strict: Option<bool>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesImageGenerationCall {
    pub id: String,
    pub result: Option<String>,
    pub status: ImageGenerationStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesOutputItemFileSearchCall {
    pub id: String,
    pub queries: Vec<String>,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesOutputItemFunctionCall {
    pub arguments: String,
    pub call_id: String,
    pub id: Option<String>,
    pub name: String,
    pub status: Option<InlineTypeUnion3>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesOutputItemReasoning {
    pub content: Option<Vec<ReasoningTextContent>>,
    pub encrypted_content: Option<String>,
    pub id: String,
    pub status: Option<InlineTypeUnion3>,
    pub summary: Vec<ReasoningSummaryText>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesOutputMessage {
    pub content: Vec<PartUnion>,
    pub id: String,
    pub role: String,
    pub status: Option<InlineTypeUnion3>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ResponsesSearchContextSize {
    #[serde(rename = "low")]
    Low,
    #[serde(rename = "medium")]
    Medium,
    #[serde(rename = "high")]
    High,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesWebSearchCallOutput {
    pub id: String,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesWebSearchUserLocation {
    pub city: Option<String>,
    pub country: Option<String>,
    pub region: Option<String>,
    pub timezone: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServiceTierUnion {

}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ToolCallStatus {
    #[serde(rename = "in_progress")]
    InProgress,
    #[serde(rename = "completed")]
    Completed,
    #[serde(rename = "incomplete")]
    Incomplete,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ToolsItemUnion {
    Variant1(ToolsItemUnionUnion),
    OpenResponsesWebSearchPreviewTool(OpenResponsesWebSearchPreviewTool),
    OpenResponsesWebSearchPreview20250311Tool(OpenResponsesWebSearchPreview20250311Tool),
    OpenResponsesWebSearchTool(OpenResponsesWebSearchTool),
    OpenResponsesWebSearch20250826Tool(OpenResponsesWebSearch20250826Tool),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolsItemUnionUnion {
    pub description: Option<String>,
    pub name: String,
    pub parameters: MetadataProperty,
    pub strict: Option<bool>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TruncationUnion {

}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UrlCitation {
    pub end_index: f32,
    pub start_index: f32,
    pub title: String,
    #[serde(rename = "type")]
    pub r#type: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnprocessableEntityResponse {
    pub error: UnprocessableEntityResponseErrorData,
    pub user_id: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnprocessableEntityResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VariablesProperty {

}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebSearchPreviewToolUserLocation {
    pub city: Option<String>,
    pub country: Option<String>,
    pub region: Option<String>,
    pub timezone: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum WebSearchStatus {
    #[serde(rename = "completed")]
    Completed,
    #[serde(rename = "searching")]
    Searching,
    #[serde(rename = "in_progress")]
    InProgress,
    #[serde(rename = "failed")]
    Failed,
}

