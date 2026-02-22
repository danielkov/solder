//! API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(feature = "analytics")]
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

#[cfg(feature = "endpoints")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ArchitectureUnion {
    pub input_modalities: Vec<InputModality>,
    pub instruct_type: String,
    pub modality: String,
    pub output_modalities: Vec<OutputModality>,
    pub tokenizer: ModelGroup,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AssistantMessage {
    pub content: Option<ContentUnion>,
    pub name: Option<String>,
    pub reasoning: Option<ReasoningUnion>,
    pub refusal: Option<ReasoningUnion>,
    pub role: String,
    pub tool_calls: Option<Vec<ChatMessageToolCall>>,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadGatewayResponse {
    pub error: BadGatewayResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadGatewayResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(
    feature = "analytics",
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "models",
    feature = "o_auth"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadRequestResponse {
    pub error: BadRequestResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "analytics",
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "models",
    feature = "o_auth"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadRequestResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BestOfUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "endpoints",
    feature = "models"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BigNumberUnion {
    Variant1(f32),
    Variant2(String),
    Variant3(f32),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BytesUnion {
    Variant1(Vec<f32>),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
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

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatError {
    pub error: ErrorProperty,
}

#[cfg(feature = "chat")]
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

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatGenerationTokenUsage {
    pub completion_tokens: f32,
    pub completion_tokens_details: Option<CompletionTokensDetailsUnion>,
    pub prompt_tokens: f32,
    pub prompt_tokens_details: Option<PromptTokensDetailsUnion>,
    pub total_tokens: f32,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ChatMessageContentItem {
    ChatMessageContentItemText(ChatMessageContentItemText),
    ChatMessageContentItemImage(ChatMessageContentItemImage),
    ChatMessageContentItemAudio(ChatMessageContentItemAudio),
    ChatMessageContentItemVideo(ChatMessageContentItemVideo),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageContentItemAudio {
    pub input_audio: InputAudioProperty,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageContentItemImage {
    pub image_url: ImageUrlProperty,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageContentItemText {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ChatMessageContentItemVideo {
    Variant1(InlineTypeObject),
    Variant2(InlineTypeObject2),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageTokenLogprob {
    pub bytes: BytesUnion,
    pub logprob: f32,
    pub token: String,
    pub top_logprobs: Vec<TopLogprobsItem>,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageTokenLogprobs {
    pub content: ContentUnion2,
    pub refusal: ContentUnion2,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessageToolCall {
    pub function: FunctionProperty,
    pub id: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "chat")]
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

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatResponseChoice {
    pub finish_reason: Schema0,
    pub index: f32,
    pub logprobs: Option<LogprobsUnion2>,
    pub message: AssistantMessage,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatStreamOptions {
    pub include_usage: Option<bool>,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CodeUnion {
    Variant1(CodeUnionUnion),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CodeUnionUnion {
    Variant1(String),
    Variant2(f32),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionChoice {
    pub finish_reason: CompletionFinishReason,
    pub index: f32,
    pub logprobs: LogprobsUnion3,
    pub text: String,
}

#[cfg(feature = "completions")]
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

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CompletionFinishReason {
    Variant1(String),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionLogprobs {
    pub text_offset: Vec<f32>,
    pub token_logprobs: Vec<f32>,
    pub tokens: Vec<String>,
    pub top_logprobs: TopLogprobsUnion2,
}

#[cfg(feature = "completions")]
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

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CompletionTokensDetailsUnion {
    Variant1(CompletionTokensDetailsUnionObject),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionTokensDetailsUnionObject {
    pub accepted_prediction_tokens:
        Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
    pub audio_tokens: Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
    pub reasoning_tokens: Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
    pub rejected_prediction_tokens:
        Option<CompletionTokensDetailsUnionObjectAcceptedPredictionTokens>,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CompletionTokensDetailsUnionObjectAcceptedPredictionTokens {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionUsage {
    pub completion_tokens: f32,
    pub prompt_tokens: f32,
    pub total_tokens: f32,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ContentUnion {
    Variant1(ContentUnionUnion),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ContentUnion2 {
    Variant1(Vec<ChatMessageTokenLogprob>),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ContentUnionUnion {
    Variant1(String),
    Variant2(Vec<ChatMessageContentItem>),
}

#[cfg(feature = "o_auth")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateAuthKeysCodeRequest {
    pub callback_url: String,
    pub code_challenge: Option<String>,
    pub code_challenge_method: Option<String>,
    pub expires_at: Option<jiff::Timestamp>,
    pub limit: Option<f32>,
}

#[cfg(feature = "o_auth")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateAuthKeysCodeResponse {
    pub data: CreateAuthKeysCodeResponseData,
}

#[cfg(feature = "o_auth")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateAuthKeysCodeResponseData {
    pub app_id: f32,
    pub created_at: String,
    pub id: String,
}

#[cfg(feature = "credits")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateChargeRequest {
    pub amount: f32,
    pub chain_id: i32,
    pub sender: String,
}

#[cfg(feature = "credits")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponse {
    pub data: CreateCoinbaseChargeResponseData,
}

#[cfg(feature = "credits")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseCallData {
    pub deadline: String,
    pub fee_amount: String,
    pub id: String,
    pub operator: String,
    pub prefix: String,
    pub recipient: String,
    pub recipient_amount: String,
    pub recipient_currency: String,
    pub refund_destination: String,
    pub signature: String,
}

#[cfg(feature = "credits")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseData {
    pub created_at: String,
    pub expires_at: String,
    pub id: String,
    pub web3_data: CreateCoinbaseChargeResponseWeb3Data,
}

#[cfg(feature = "credits")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseMetadata {
    pub chain_id: f32,
    pub contract_address: String,
    pub sender: String,
}

#[cfg(feature = "credits")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseTransferIntent {
    pub call_data: CreateCoinbaseChargeResponseCallData,
    pub metadata: CreateCoinbaseChargeResponseMetadata,
}

#[cfg(feature = "credits")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateCoinbaseChargeResponseWeb3Data {
    pub transfer_intent: CreateCoinbaseChargeResponseTransferIntent,
}

#[cfg(feature = "embeddings")]
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

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreateEmbeddingsRequestInput {
    Variant1(String),
    Variant2(Vec<String>),
    Variant3(Vec<f32>),
    Variant4(Vec<Vec<f32>>),
    Variant5(Vec<CreateEmbeddingsRequestInputObject>),
}

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsRequestInputObject {
    pub content: Vec<CreateEmbeddingsRequestInputObjectContentItem>,
}

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreateEmbeddingsRequestInputObjectContentItem {
    Variant1(CreateEmbeddingsRequestInputObjectContentItemObject),
    Variant2(EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject),
}

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsRequestInputObjectContentItemObject {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "embeddings")]
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

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsResponse {
    pub data: Vec<CreateEmbeddingsResponseDataItem>,
    pub id: Option<String>,
    pub model: String,
    pub object: String,
    pub usage: Option<CreateEmbeddingsResponseUsage>,
}

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsResponseDataItem {
    pub embedding: CreateEmbeddingsResponseDataItemEmbedding,
    pub index: Option<f32>,
    pub object: String,
}

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum CreateEmbeddingsResponseDataItemEmbedding {
    Variant1(Vec<f32>),
    Variant2(String),
}

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateEmbeddingsResponseUsage {
    pub cost: Option<f32>,
    pub prompt_tokens: f32,
    pub total_tokens: f32,
}

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateKeysRequest {
    pub expires_at: Option<jiff::Timestamp>,
    pub include_byok_in_limit: Option<bool>,
    pub limit: Option<f32>,
    pub limit_reset: Option<String>,
    pub name: String,
}

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CreateKeysResponse {
    pub data: CreateKeysResponseData,
    pub key: String,
}

#[cfg(feature = "api_keys")]
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

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum DataCollection {
    #[serde(rename = "deny")]
    Deny,
    #[serde(rename = "allow")]
    Allow,
}

#[cfg(feature = "models")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DataProperty2 {
    pub count: f32,
}

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultParameters {
    pub frequency_penalty: Option<f32>,
    pub temperature: Option<f32>,
    pub top_p: Option<f32>,
}

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeleteKeysResponse {
    pub deleted: bool,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EdgeNetworkTimeoutResponse {
    pub error: EdgeNetworkTimeoutResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EdgeNetworkTimeoutResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum EffortUnion {
    Variant1(String),
    Variant2(serde_json::Value),
}

#[cfg(feature = "embeddings")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject {
    pub image_url: InlineTypeObjectVideoUrl,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "endpoints")]
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

#[cfg(feature = "endpoints")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EndpointsListEndpointsResponse {
    pub data: ListEndpointsResponse,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ErrorProperty {
    pub code: CodeUnion,
    pub message: String,
    pub param: Option<ReasoningUnion>,
    #[serde(rename = "type")]
    pub r#type: Option<ReasoningUnion>,
}

#[cfg(feature = "o_auth")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExchangeAuthCodeForApiKeyRequest {
    pub code: String,
    pub code_challenge_method: Option<String>,
    pub code_verifier: Option<String>,
}

#[cfg(feature = "o_auth")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExchangeAuthCodeForApiKeyResponse {
    pub key: String,
    pub user_id: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FileCitation {
    pub file_id: String,
    pub filename: String,
    pub index: f32,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FilePath {
    pub file_id: String,
    pub index: f32,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FiltersProperty {
    pub allowed_domains: Option<Vec<String>>,
}

#[cfg(any(feature = "analytics", feature = "credits", feature = "o_auth"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForbiddenResponse {
    pub error: ForbiddenResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "analytics", feature = "credits", feature = "o_auth"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ForbiddenResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FrequencyPenaltyUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FunctionProperty {
    pub arguments: String,
    pub name: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FunctionProperty3 {
    pub name: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FunctionProperty4 {
    pub description: Option<String>,
    pub name: String,
    pub parameters: Option<MetadataProperty>,
    pub strict: Option<LogprobsUnion>,
}

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCurrentKeyResponse {
    pub data: GetCurrentKeyResponseData,
}

#[cfg(feature = "api_keys")]
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

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetCurrentKeyResponseRateLimit {
    pub interval: String,
    pub note: String,
    pub requests: f32,
}

#[cfg(feature = "generations")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetGenerationResponse {
    pub data: GetGenerationResponseData,
}

#[cfg(feature = "generations")]
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

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetKeyResponse {
    pub data: GetKeyResponseData,
}

#[cfg(feature = "api_keys")]
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

#[cfg(feature = "parameters")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetParametersResponse {
    pub data: GetParametersResponseData,
}

#[cfg(feature = "parameters")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetParametersResponseData {
    pub model: String,
    pub supported_parameters: Vec<String>,
}

#[cfg(feature = "analytics")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GetUserActivityResponse {
    pub data: Vec<ActivityItem>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum IgnoreItemOrRef {
    ProviderName(ProviderName),
    Variant2(String),
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ImageUrlProperty {
    pub detail: Option<String>,
    pub url: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject {
    #[serde(rename = "type")]
    pub r#type: String,
    pub video_url: InlineTypeObjectVideoUrl,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject2 {
    #[serde(rename = "type")]
    pub r#type: String,
    pub video_url: InlineTypeObjectVideoUrl,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject3 {
    pub content: InlineTypeObject3Content,
    pub name: Option<String>,
    pub role: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeObject3Content {
    Variant1(String),
    Variant2(Vec<ChatMessageContentItemText>),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject4 {
    pub name: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObject5 {
    #[serde(rename = "type")]
    pub r#type: InlineTypeObject5Type,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeObject5Type {
    Variant1(String),
    Variant2(String),
}

#[cfg(any(feature = "chat", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObjectVideoUrl {
    pub url: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnion3 {
    Variant1(String),
    Variant2(String),
    Variant3(String),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeUnionObject {
    pub content: InlineTypeUnionObjectContent,
    pub role: InlineTypeUnionObjectRole,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeUnionObject2 {
    pub content: Vec<InlineTypeUnionObjectContentUnion>,
    pub id: String,
    pub role: InlineTypeUnionObject2Role,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObject2Role {
    Variant1(String),
    Variant2(String),
    Variant3(String),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeUnionObject3 {
    pub call_id: String,
    pub id: Option<String>,
    pub output: String,
    pub status: Option<ToolCallStatus>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObjectContent {
    Variant1(Vec<InlineTypeUnionObjectContentUnion>),
    Variant2(String),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObjectContentUnion {
    ResponseInputText(ResponseInputText),
    ResponseInputImage(ResponseInputImage),
    ResponseInputFile(ResponseInputFile),
    ResponseInputAudio(ResponseInputAudio),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum InlineTypeUnionObjectRole {
    Variant1(String),
    Variant2(String),
    Variant3(String),
    Variant4(String),
}

#[cfg(any(feature = "beta_responses", feature = "chat"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InputAudioProperty {
    pub data: String,
    pub format: String,
}

#[cfg(any(feature = "embeddings", feature = "endpoints", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum InputModality {
    #[serde(rename = "text")]
    Text,
    #[serde(rename = "image")]
    Image,
    #[serde(rename = "file")]
    File,
    #[serde(rename = "audio")]
    Audio,
    #[serde(rename = "video")]
    Video,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InputTokensDetailsProperty {
    pub cached_tokens: f32,
}

#[cfg(any(
    feature = "analytics",
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "endpoints",
    feature = "generations",
    feature = "models",
    feature = "o_auth",
    feature = "parameters",
    feature = "providers"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InternalServerResponse {
    pub error: InternalServerResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "analytics",
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "endpoints",
    feature = "generations",
    feature = "models",
    feature = "o_auth",
    feature = "parameters",
    feature = "providers"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InternalServerResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct JsonSchemaConfig {
    pub description: Option<String>,
    pub name: String,
    pub schema: Option<MetadataProperty>,
    pub strict: Option<LogprobsUnion>,
}

#[cfg(feature = "endpoints")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListEndpointsResponse {
    pub architecture: ArchitectureUnion,
    pub created: f32,
    pub description: String,
    pub endpoints: Vec<PublicEndpoint>,
    pub id: String,
    pub name: String,
}

#[cfg(feature = "endpoints")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListEndpointsZdrResponse {
    pub data: Vec<PublicEndpoint>,
}

#[cfg(feature = "providers")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListProvidersResponse {
    pub data: Vec<ListProvidersResponseDataItem>,
}

#[cfg(feature = "providers")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListProvidersResponseDataItem {
    pub name: String,
    pub privacy_policy_url: String,
    pub slug: String,
    pub status_page_url: Option<String>,
    pub terms_of_service_url: Option<String>,
}

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ListResponse {
    pub data: Vec<ListResponseDataItem>,
}

#[cfg(feature = "api_keys")]
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

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogitBiasUnion {
    Variant1(LogitBiasUnionObject),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LogitBiasUnionObject {}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion {
    Variant1(bool),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion2 {
    ChatMessageTokenLogprobs(ChatMessageTokenLogprobs),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion3 {
    CompletionLogprobs(CompletionLogprobs),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion4 {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MaxCompletionTokensUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MaxPriceProperty {
    pub audio: Option<BigNumberUnion>,
    pub completion: Option<BigNumberUnion>,
    pub image: Option<BigNumberUnion>,
    pub prompt: Option<BigNumberUnion>,
    pub request: Option<BigNumberUnion>,
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MaxTokensUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum Message {
    SystemMessage(SystemMessage),
    UserMessage(UserMessage),
    Variant3(InlineTypeObject3),
    AssistantMessage(AssistantMessage),
    ToolResponseMessage(ToolResponseMessage),
}

#[cfg(any(
    feature = "analytics",
    feature = "api_keys",
    feature = "beta_responses",
    feature = "chat",
    feature = "completions",
    feature = "credits",
    feature = "embeddings",
    feature = "endpoints",
    feature = "generations",
    feature = "models",
    feature = "o_auth",
    feature = "parameters",
    feature = "providers"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MetadataProperty {}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum MetadataUnion {
    Variant1(MetadataProperty),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Model {
    pub architecture: ModelArchitecture,
    pub canonical_slug: String,
    pub context_length: f32,
    pub created: f32,
    pub default_parameters: DefaultParameters,
    pub description: Option<String>,
    pub hugging_face_id: Option<String>,
    pub id: String,
    pub name: String,
    pub per_request_limits: PerRequestLimits,
    pub pricing: PublicPricing,
    pub supported_parameters: Vec<Parameter>,
    pub top_provider: TopProviderInfo,
}

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModelArchitecture {
    pub input_modalities: Vec<InputModality>,
    pub instruct_type: Option<String>,
    pub modality: String,
    pub output_modalities: Vec<OutputModality>,
    pub tokenizer: Option<ModelGroup>,
}

#[cfg(any(feature = "embeddings", feature = "endpoints", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ModelGroup {
    Router,
    Media,
    Other,
    #[serde(rename = "GPT")]
    Gpt,
    Claude,
    Gemini,
    Grok,
    Cohere,
    Nova,
    Qwen,
    Yi,
    DeepSeek,
    Mistral,
    Llama2,
    Llama3,
    Llama4,
    #[serde(rename = "PaLM")]
    PaLm,
    #[serde(rename = "RWKV")]
    Rwkv,
    Qwen3,
}

#[cfg(any(feature = "chat", feature = "completions"))]
pub type ModelName = String;

#[cfg(feature = "models")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModelsCountResponse {
    pub data: DataProperty2,
}

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModelsListResponse {
    pub data: ModelsListResponseData,
}

#[cfg(any(feature = "embeddings", feature = "models"))]
pub type ModelsListResponseData = Vec<Model>;

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum NUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NamedToolChoice {
    pub function: FunctionProperty3,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(any(
    feature = "api_keys",
    feature = "beta_responses",
    feature = "embeddings",
    feature = "endpoints",
    feature = "generations",
    feature = "parameters"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotFoundResponse {
    pub error: NotFoundResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "api_keys",
    feature = "beta_responses",
    feature = "embeddings",
    feature = "endpoints",
    feature = "generations",
    feature = "parameters"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotFoundResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenAiResponsesAnnotation {
    FileCitation(FileCitation),
    UrlCitation(UrlCitation),
    FilePath(FilePath),
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesIncompleteDetails {
    pub reason: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenAiResponsesInput {
    Variant1(String),
    Variant2(Vec<InlineTypeUnion>),
    Variant3(serde_json::Value),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesPrompt {
    pub id: String,
    pub variables: Option<VariablesProperty>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesReasoningConfig {
    pub effort: Option<OpenAiResponsesReasoningEffort>,
    pub summary: Option<ReasoningSummaryVerbosity>,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesRefusalContent {
    pub refusal: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenAiResponsesToolChoice {
    Variant1(String),
    Variant2(String),
    Variant3(String),
    Variant4(InlineTypeObject4),
    Variant5(InlineTypeObject5),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OpenAiResponsesTruncation {
    #[serde(rename = "auto")]
    Auto,
    #[serde(rename = "disabled")]
    Disabled,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenAiResponsesUsage {
    pub input_tokens: f32,
    pub input_tokens_details: InputTokensDetailsProperty,
    pub output_tokens: f32,
    pub output_tokens_details: OutputTokensDetailsProperty,
    pub total_tokens: f32,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesEasyInputMessage {
    pub content: InlineTypeUnionObjectContent,
    pub role: InlineTypeUnionObjectRole,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesFunctionCallOutput {
    pub call_id: String,
    pub id: Option<String>,
    pub output: String,
    pub status: Option<ToolCallStatus>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum OpenResponsesInput {
    Variant1(String),
    Variant2(Vec<InlineTypeUnion2>),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesInputMessageItem {
    pub content: Vec<InlineTypeUnionObjectContentUnion>,
    pub id: Option<String>,
    pub role: InlineTypeUnionObject2Role,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesReasoningConfig {
    pub effort: Option<OpenAiResponsesReasoningEffort>,
    pub enabled: Option<bool>,
    pub max_tokens: Option<f32>,
    pub summary: Option<ReasoningSummaryVerbosity>,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesRequestMetadata {}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesResponseText {
    pub format: Option<ResponseFormatTextConfig>,
    pub verbosity: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearch20250826Tool {
    pub filters: Option<FiltersProperty>,
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<ResponsesWebSearchUserLocation>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearchPreview20250311Tool {
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<WebSearchPreviewToolUserLocation>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearchPreviewTool {
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<WebSearchPreviewToolUserLocation>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OpenResponsesWebSearchTool {
    pub filters: Option<FiltersProperty>,
    pub search_context_size: Option<ResponsesSearchContextSize>,
    #[serde(rename = "type")]
    pub r#type: String,
    pub user_location: Option<ResponsesWebSearchUserLocation>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemFileSearchCall {
    pub id: String,
    pub queries: Vec<String>,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemImageGenerationCall {
    pub id: String,
    pub result: Option<String>,
    pub status: ImageGenerationStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputItemWebSearchCall {
    pub id: String,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputMessage {
    pub content: Vec<PartUnion>,
    pub id: String,
    pub role: String,
    pub status: Option<InlineTypeUnion3>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(any(feature = "embeddings", feature = "endpoints", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum OutputModality {
    #[serde(rename = "text")]
    Text,
    #[serde(rename = "image")]
    Image,
    #[serde(rename = "embeddings")]
    Embeddings,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct OutputTokensDetailsProperty {
    pub reasoning_tokens: f32,
}

#[cfg(any(feature = "embeddings", feature = "endpoints", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Parameter {
    #[serde(rename = "temperature")]
    Temperature,
    #[serde(rename = "top_p")]
    TopP,
    #[serde(rename = "top_k")]
    TopK,
    #[serde(rename = "min_p")]
    MinP,
    #[serde(rename = "top_a")]
    TopA,
    #[serde(rename = "frequency_penalty")]
    FrequencyPenalty,
    #[serde(rename = "presence_penalty")]
    PresencePenalty,
    #[serde(rename = "repetition_penalty")]
    RepetitionPenalty,
    #[serde(rename = "max_tokens")]
    MaxTokens,
    #[serde(rename = "logit_bias")]
    LogitBias,
    #[serde(rename = "logprobs")]
    Logprobs,
    #[serde(rename = "top_logprobs")]
    TopLogprobs,
    #[serde(rename = "seed")]
    Seed,
    #[serde(rename = "response_format")]
    ResponseFormat,
    #[serde(rename = "structured_outputs")]
    StructuredOutputs,
    #[serde(rename = "stop")]
    Stop,
    #[serde(rename = "tools")]
    Tools,
    #[serde(rename = "tool_choice")]
    ToolChoice,
    #[serde(rename = "parallel_tool_calls")]
    ParallelToolCalls,
    #[serde(rename = "include_reasoning")]
    IncludeReasoning,
    #[serde(rename = "reasoning")]
    Reasoning,
    #[serde(rename = "web_search_options")]
    WebSearchOptions,
    #[serde(rename = "verbosity")]
    Verbosity,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PartUnion {
    ResponseOutputText(ResponseOutputText),
    OpenAiResponsesRefusalContent(OpenAiResponsesRefusalContent),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PayloadTooLargeResponse {
    pub error: PayloadTooLargeResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PayloadTooLargeResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentRequiredResponse {
    pub error: PaymentRequiredResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentRequiredResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PerRequestLimits {
    pub completion_tokens: f32,
    pub prompt_tokens: f32,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PluginsItemUnion {
    Variant1(PluginsItemUnionObject),
    Variant2(PluginsItemUnionObject2),
    Variant3(PluginsItemUnionObject3),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject {
    pub id: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject2 {
    pub engine: Option<String>,
    pub id: String,
    pub max_results: Option<f32>,
    pub search_prompt: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject3 {
    pub id: String,
    pub max_files: Option<f32>,
    pub pdf: Option<PluginsItemUnionObject3Pdf>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginsItemUnionObject3Pdf {
    pub engine: Option<String>,
}

#[cfg(feature = "endpoints")]
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

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PromptTokensDetailsUnion {
    Variant1(PromptTokensDetailsUnionObject),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PromptTokensDetailsUnionObject {
    pub audio_tokens: Option<f32>,
    pub cached_tokens: Option<f32>,
    pub video_tokens: Option<f32>,
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum PromptUnion {
    Variant1(String),
    Variant2(Vec<String>),
    Variant3(Vec<f32>),
    Variant4(Vec<Vec<f32>>),
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "endpoints"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ProviderName {
    #[serde(rename = "AI21")]
    Ai21,
    AionLabs,
    Alibaba,
    #[serde(rename = "Amazon Bedrock")]
    AmazonBedrock,
    Anthropic,
    Arcee,
    AtlasCloud,
    Avian,
    Azure,
    BaseTen,
    #[serde(rename = "Black Forest Labs")]
    BlackForestLabs,
    Cerebras,
    Chutes,
    Cirrascale,
    Clarifai,
    Cloudflare,
    Cohere,
    Crusoe,
    DeepInfra,
    DeepSeek,
    Featherless,
    Fireworks,
    Friendli,
    #[serde(rename = "GMICloud")]
    GmiCloud,
    Google,
    #[serde(rename = "Google AI Studio")]
    GoogleAiStudio,
    Groq,
    Hyperbolic,
    Inception,
    InferenceNet,
    Infermatic,
    Inflection,
    Liquid,
    #[serde(rename = "Mancer 2")]
    Mancer2,
    Minimax,
    ModelRun,
    Mistral,
    Modular,
    #[serde(rename = "Moonshot AI")]
    MoonshotAi,
    Morph,
    NCompass,
    Nebius,
    NextBit,
    Novita,
    Nvidia,
    #[serde(rename = "OpenAI")]
    OpenAi,
    OpenInference,
    Parasail,
    Perplexity,
    Phala,
    Relace,
    SambaNova,
    SiliconFlow,
    Stealth,
    Switchpoint,
    Targon,
    Together,
    Venice,
    WandB,
    #[serde(rename = "xAI")]
    XAi,
    #[serde(rename = "Z.AI")]
    ZAi,
    FakeProvider,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProviderOverloadedResponse {
    pub error: ProviderOverloadedResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "beta_responses",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProviderOverloadedResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ProviderSort {
    #[serde(rename = "price")]
    Price,
    #[serde(rename = "throughput")]
    Throughput,
    #[serde(rename = "latency")]
    Latency,
}

#[cfg(feature = "endpoints")]
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

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PublicPricing {
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

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum Quantization {
    #[serde(rename = "int4")]
    Int4,
    #[serde(rename = "int8")]
    Int8,
    #[serde(rename = "fp4")]
    Fp4,
    #[serde(rename = "fp6")]
    Fp6,
    #[serde(rename = "fp8")]
    Fp8,
    #[serde(rename = "fp16")]
    Fp16,
    #[serde(rename = "bf16")]
    Bf16,
    #[serde(rename = "fp32")]
    Fp32,
    #[serde(rename = "unknown")]
    Unknown,
}

#[cfg(feature = "endpoints")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct QuantizationUnion {}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReasoningProperty {
    pub effort: Option<EffortUnion>,
    pub summary: Option<SummaryUnion>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReasoningSummaryText {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(any(feature = "beta_responses", feature = "chat"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ReasoningSummaryVerbosity {
    #[serde(rename = "auto")]
    Auto,
    #[serde(rename = "concise")]
    Concise,
    #[serde(rename = "detailed")]
    Detailed,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ReasoningTextContent {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ReasoningUnion {
    Variant1(String),
    Variant2(serde_json::Value),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RequestTimeoutResponse {
    pub error: RequestTimeoutResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RequestTimeoutResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseFormatJsonSchema {
    pub json_schema: JsonSchemaConfig,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ResponseFormatTextConfig {
    ResponsesFormatText(ResponsesFormatText),
    ResponsesFormatJsonObject(ResponsesFormatJsonObject),
    ResponsesFormatTextJsonSchemaConfig(ResponsesFormatTextJsonSchemaConfig),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseFormatTextGrammar {
    pub grammar: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ResponseFormatUnion {
    Variant1(ResponseFormatUnionObject),
    Variant2(ResponseFormatUnionObject2),
    ResponseFormatJsonSchema(ResponseFormatJsonSchema),
    ResponseFormatTextGrammar(ResponseFormatTextGrammar),
    Variant5(ResponseFormatUnionObject3),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ResponseFormatUnion2 {
    Variant1(ResponseFormatUnion),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseFormatUnionObject {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseFormatUnionObject2 {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseFormatUnionObject3 {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputAudio {
    pub input_audio: InputAudioProperty,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputFile {
    pub file_data: Option<String>,
    pub file_id: Option<String>,
    pub file_url: Option<String>,
    pub filename: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputImage {
    pub detail: String,
    pub image_url: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseInputText {
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseOutputText {
    pub annotations: Option<Vec<OpenAiResponsesAnnotation>>,
    pub text: String,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseTextConfig {
    pub format: Option<ResponseFormatTextConfig>,
    pub verbosity: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesErrorField {
    pub code: String,
    pub message: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesFormatJsonObject {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesFormatText {
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesFormatTextJsonSchemaConfig {
    pub description: Option<String>,
    pub name: String,
    pub schema: MetadataProperty,
    pub strict: Option<bool>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesImageGenerationCall {
    pub id: String,
    pub result: Option<String>,
    pub status: ImageGenerationStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesOutputItemFileSearchCall {
    pub id: String,
    pub queries: Vec<String>,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesOutputMessage {
    pub content: Vec<PartUnion>,
    pub id: String,
    pub role: String,
    pub status: Option<InlineTypeUnion3>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ResponsesSearchContextSize {
    #[serde(rename = "low")]
    Low,
    #[serde(rename = "medium")]
    Medium,
    #[serde(rename = "high")]
    High,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesWebSearchCallOutput {
    pub id: String,
    pub status: WebSearchStatus,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponsesWebSearchUserLocation {
    pub city: Option<String>,
    pub country: Option<String>,
    pub region: Option<String>,
    pub timezone: Option<String>,
    #[serde(rename = "type")]
    pub r#type: Option<String>,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SeedUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServiceTierUnion {}

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServiceUnavailableResponse {
    pub error: ServiceUnavailableResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServiceUnavailableResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnion {
    Variant1(StopUnionUnion),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnion2 {
    Variant1(StopUnion2Union),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnion2Union {
    Variant1(String),
    Variant2(Vec<String>),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StopUnionUnion {
    Variant1(String),
    Variant2(Vec<String>),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StreamOptionsUnion {
    ChatStreamOptions(ChatStreamOptions),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum StreamOptionsUnion2 {
    Variant1(StreamOptionsUnion2Object),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StreamOptionsUnion2Object {
    pub include_usage: Option<LogprobsUnion>,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SummaryUnion {
    ReasoningSummaryVerbosity(ReasoningSummaryVerbosity),
    Variant2(serde_json::Value),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SystemMessage {
    pub content: InlineTypeObject3Content,
    pub name: Option<String>,
    pub role: String,
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TemperatureUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[cfg(any(
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TooManyRequestsResponse {
    pub error: TooManyRequestsResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "generations"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TooManyRequestsResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum ToolCallStatus {
    #[serde(rename = "in_progress")]
    InProgress,
    #[serde(rename = "completed")]
    Completed,
    #[serde(rename = "incomplete")]
    Incomplete,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ToolChoiceOption {
    Variant1(String),
    Variant2(String),
    Variant3(String),
    NamedToolChoice(NamedToolChoice),
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolDefinitionJson {
    pub function: FunctionProperty4,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolResponseMessage {
    pub content: ContentUnionUnion,
    pub role: String,
    pub tool_call_id: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ToolsItemUnion {
    Variant1(ToolsItemUnionUnion),
    OpenResponsesWebSearchPreviewTool(OpenResponsesWebSearchPreviewTool),
    OpenResponsesWebSearchPreview20250311Tool(OpenResponsesWebSearchPreview20250311Tool),
    OpenResponsesWebSearchTool(OpenResponsesWebSearchTool),
    OpenResponsesWebSearch20250826Tool(OpenResponsesWebSearch20250826Tool),
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolsItemUnionUnion {
    pub description: Option<String>,
    pub name: String,
    pub parameters: MetadataProperty,
    pub strict: Option<bool>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TopLogprobsItem {
    pub bytes: BytesUnion,
    pub logprob: f32,
    pub token: String,
}

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TopLogprobsUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[cfg(feature = "completions")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TopLogprobsUnion2 {
    Variant1(Vec<LogitBiasUnionObject>),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TopPUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TopProviderInfo {
    pub context_length: Option<f32>,
    pub is_moderated: bool,
    pub max_completion_tokens: Option<f32>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TruncationUnion {}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UrlCitation {
    pub end_index: f32,
    pub start_index: f32,
    pub title: String,
    #[serde(rename = "type")]
    pub r#type: String,
    pub url: String,
}

#[cfg(any(
    feature = "analytics",
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "generations",
    feature = "models",
    feature = "o_auth",
    feature = "parameters"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnauthorizedResponse {
    pub error: UnauthorizedResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(
    feature = "analytics",
    feature = "api_keys",
    feature = "beta_responses",
    feature = "credits",
    feature = "embeddings",
    feature = "generations",
    feature = "models",
    feature = "o_auth",
    feature = "parameters"
))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnauthorizedResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnprocessableEntityResponse {
    pub error: UnprocessableEntityResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnprocessableEntityResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateKeysRequest {
    pub disabled: Option<bool>,
    pub include_byok_in_limit: Option<bool>,
    pub limit: Option<f32>,
    pub limit_reset: Option<String>,
    pub name: Option<String>,
}

#[cfg(feature = "api_keys")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UpdateKeysResponse {
    pub data: UpdateKeysResponseData,
}

#[cfg(feature = "api_keys")]
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

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UserMessage {
    pub content: ContentUnionUnion,
    pub name: Option<String>,
    pub role: String,
}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct VariablesProperty {}

#[cfg(feature = "beta_responses")]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WebSearchPreviewToolUserLocation {
    pub city: Option<String>,
    pub country: Option<String>,
    pub region: Option<String>,
    pub timezone: Option<String>,
    #[serde(rename = "type")]
    pub r#type: String,
}

#[cfg(feature = "beta_responses")]
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

#[cfg(feature = "chat")]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum Schema0 {
    ChatCompletionFinishReason(ChatCompletionFinishReason),
    Variant2(serde_json::Value),
}
