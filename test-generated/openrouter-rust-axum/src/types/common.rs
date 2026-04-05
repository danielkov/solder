//! Shared API types

#[allow(unused_imports)]
use serde::{Deserialize, Serialize};

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadGatewayResponse {
    pub error: BadGatewayResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadGatewayResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(feature = "analytics", feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "models", feature = "o_auth"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadRequestResponse {
    pub error: BadRequestResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "analytics", feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "models", feature = "o_auth"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BadRequestResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "endpoints", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum BigNumberUnion {
    Variant1(f32),
    Variant2(String),
    Variant3(f32),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatError {
    pub error: ErrorProperty,
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

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum DataCollection {
    #[serde(rename = "deny")]
    Deny,
    #[serde(rename = "allow")]
    Allow,
}

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DefaultParameters {
    pub frequency_penalty: Option<f32>,
    pub temperature: Option<f32>,
    pub top_p: Option<f32>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EdgeNetworkTimeoutResponse {
    pub error: EdgeNetworkTimeoutResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EdgeNetworkTimeoutResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
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

#[cfg(any(feature = "beta_responses", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum IgnoreItemOrRef {
    ProviderName(ProviderName),
    Variant2(String),
}

#[cfg(any(feature = "chat", feature = "embeddings"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InlineTypeObjectVideoUrl {
    pub url: String,
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

#[cfg(any(feature = "analytics", feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "endpoints", feature = "generations", feature = "models", feature = "o_auth", feature = "parameters", feature = "providers"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct InternalServerResponse {
    pub error: InternalServerResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "analytics", feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "endpoints", feature = "generations", feature = "models", feature = "o_auth", feature = "parameters", feature = "providers"))]
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

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogitBiasUnion {
    Variant1(LogitBiasUnionObject),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LogitBiasUnionObject {

}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum LogprobsUnion {
    Variant1(bool),
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

#[cfg(any(feature = "analytics", feature = "api_keys", feature = "beta_responses", feature = "chat", feature = "completions", feature = "credits", feature = "embeddings", feature = "endpoints", feature = "generations", feature = "models", feature = "o_auth", feature = "parameters", feature = "providers"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MetadataProperty {

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

#[cfg(any(feature = "embeddings", feature = "models"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ModelsListResponse {
    pub data: ModelsListResponseData,
}

#[cfg(any(feature = "embeddings", feature = "models"))]
pub type ModelsListResponseData = Vec<Model>;

#[cfg(any(feature = "api_keys", feature = "beta_responses", feature = "embeddings", feature = "endpoints", feature = "generations", feature = "parameters"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotFoundResponse {
    pub error: NotFoundResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "api_keys", feature = "beta_responses", feature = "embeddings", feature = "endpoints", feature = "generations", feature = "parameters"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NotFoundResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
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

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaymentRequiredResponse {
    pub error: PaymentRequiredResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
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

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "endpoints"))]
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

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProviderOverloadedResponse {
    pub error: ProviderOverloadedResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "beta_responses", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ProviderOverloadedResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
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

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ReasoningUnion {
    Variant1(String),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ResponseFormatJsonSchema {
    pub json_schema: JsonSchemaConfig,
    #[serde(rename = "type")]
    pub r#type: String,
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

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum SeedUnion {
    Variant1(i32),
    Variant2(serde_json::Value),
}

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

#[cfg(any(feature = "chat", feature = "completions"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum TemperatureUnion {
    Variant1(f32),
    Variant2(serde_json::Value),
}

#[cfg(any(feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TooManyRequestsResponse {
    pub error: TooManyRequestsResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "generations"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct TooManyRequestsResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
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

#[cfg(any(feature = "analytics", feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "generations", feature = "models", feature = "o_auth", feature = "parameters"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnauthorizedResponse {
    pub error: UnauthorizedResponseErrorData,
    pub user_id: Option<String>,
}

#[cfg(any(feature = "analytics", feature = "api_keys", feature = "beta_responses", feature = "credits", feature = "embeddings", feature = "generations", feature = "models", feature = "o_auth", feature = "parameters"))]
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UnauthorizedResponseErrorData {
    pub code: i32,
    pub message: String,
    pub metadata: Option<MetadataProperty>,
}

