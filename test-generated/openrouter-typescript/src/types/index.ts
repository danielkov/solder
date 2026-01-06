// Generated types from OpenAPI specification

export interface ActivityItem {
  /**
   * BYOK inference cost in USD (external credits spent)
   */
  byokUsageInference: number;
  /**
   * Total completion tokens generated
   */
  completionTokens: number;
  /**
   * Date of the activity (YYYY-MM-DD format)
   */
  date: string;
  /**
   * Unique identifier for the endpoint
   */
  endpointId: string;
  /**
   * Model slug (e.g., "openai/gpt-4.1")
   */
  model: string;
  /**
   * Model permaslug (e.g., "openai/gpt-4.1-2025-04-14")
   */
  modelPermaslug: string;
  /**
   * Total prompt tokens used
   */
  promptTokens: number;
  /**
   * Name of the provider serving this endpoint
   */
  providerName: string;
  /**
   * Total reasoning tokens used
   */
  reasoningTokens: number;
  /**
   * Number of requests made
   */
  requests: number;
  /**
   * Total cost in USD (OpenRouter credits spent)
   */
  usage: number;
}

export interface ArchitectureUnion {
  /**
   * Supported input modalities
   */
  inputModalities: Array<InputModality>;
  /**
   * Instruction format type
   */
  instructType: string;
  /**
   * Primary modality of the model
   */
  modality: string;
  /**
   * Supported output modalities
   */
  outputModalities: Array<OutputModality>;
  /**
   * Tokenizer type used by the model
   */
  tokenizer: ModelGroup;
}

export interface ArchitectureUnionUnion {
}

export interface AssistantMessage {
  content?: ContentUnion;
  name?: string;
  reasoning?: ReasoningUnion;
  refusal?: ReasoningUnion;
  role: "assistant";
  toolCalls?: Array<ChatMessageToolCall>;
}

/**
 * Bad Gateway - Provider/upstream API failure
 */
export interface BadGatewayResponse {
  /**
   * Error data for BadGatewayResponse
   */
  error: BadGatewayResponseErrorData;
  userId?: string;
}

/**
 * Error data for BadGatewayResponse
 */
export interface BadGatewayResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

/**
 * Bad Request - Invalid request parameters or malformed input
 */
export interface BadRequestResponse {
  /**
   * Error data for BadRequestResponse
   */
  error: BadRequestResponseErrorData;
  userId?: string;
}

/**
 * Error data for BadRequestResponse
 */
export interface BadRequestResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export type BestOfUnion = number | any | null;

export type BigNumberUnion = number | string | number;

export type BytesUnion = Array<number> | any | null;

export enum ChatCompletionFinishReason {
  TOOL_CALLS = "tool_calls",
  STOP = "stop",
  LENGTH = "length",
  CONTENT_FILTER = "content_filter",
  ERROR = "error",
}

export interface ChatError {
  error: ErrorProperty;
}

export interface ChatGenerationParams {
  frequencyPenalty?: FrequencyPenaltyUnion;
  logitBias?: LogitBiasUnion;
  logprobs?: LogprobsUnion;
  maxCompletionTokens?: MaxCompletionTokensUnion;
  maxTokens?: MaxCompletionTokensUnion;
  messages: Array<Message>;
  metadata?: MetadataProperty;
  model?: ModelName;
  models?: Array<ModelName>;
  presencePenalty?: FrequencyPenaltyUnion;
  reasoning?: ReasoningProperty;
  responseFormat?: ResponseFormatUnion;
  seed?: SeedUnion;
  stop?: StopUnion;
  stream?: boolean;
  streamOptions?: StreamOptionsUnion;
  temperature?: TemperatureUnion;
  toolChoice?: ToolChoiceOption;
  tools?: Array<ToolDefinitionJson>;
  topLogprobs?: TopLogprobsUnion;
  topP?: TopPUnion;
  user?: string;
}

export interface ChatGenerationTokenUsage {
  completionTokens: number;
  completionTokensDetails?: CompletionTokensDetailsUnion;
  promptTokens: number;
  promptTokensDetails?: PromptTokensDetailsUnion;
  totalTokens: number;
}

export type ChatMessageContentItem = ChatMessageContentItemText | ChatMessageContentItemImage | ChatMessageContentItemAudio | ChatMessageContentItemVideo;

export interface ChatMessageContentItemAudio {
  inputAudio: InputAudioProperty;
  type: "input_audio";
}

export interface ChatMessageContentItemImage {
  imageUrl: ImageUrlProperty;
  type: "image_url";
}

export interface ChatMessageContentItemText {
  text: string;
  type: "text";
}

export type ChatMessageContentItemVideo = InlineTypeObject | InlineTypeObject2;

export interface ChatMessageTokenLogprob {
  bytes: BytesUnion;
  logprob: number;
  token: string;
  topLogprobs: Array<TopLogprobsItem>;
}

export interface ChatMessageTokenLogprobs {
  content: ContentUnion2;
  refusal: ContentUnion2;
}

export interface ChatMessageToolCall {
  function: FunctionProperty;
  id: string;
  type: "function";
}

export interface ChatResponse {
  choices: Array<ChatResponseChoice>;
  created: number;
  id: string;
  model: string;
  object: "chat.completion";
  systemFingerprint?: ReasoningUnion;
  usage?: ChatGenerationTokenUsage;
}

export interface ChatResponseChoice {
  finishReason: Schema0;
  index: number;
  logprobs?: LogprobsUnion2;
  message: AssistantMessage;
}

export interface ChatStreamOptions {
  includeUsage?: boolean;
}

export interface ChatStreamingChoice {
  delta: ChatStreamingMessageChunk;
  finishReason: Schema0;
  index: number;
  logprobs?: LogprobsUnion2;
}

export interface ChatStreamingMessageChunk {
  content?: ReasoningUnion;
  reasoning?: ReasoningUnion;
  refusal?: ReasoningUnion;
  role?: string;
  toolCalls?: Array<ChatStreamingMessageToolCall>;
}

export interface ChatStreamingMessageToolCall {
  function?: FunctionProperty2;
  id?: string;
  index: number;
  type?: "function";
}

export interface ChatStreamingResponseChunk {
  data: DataProperty;
}

export type CodeUnion = CodeUnionUnion | any | null;

export type CodeUnionUnion = string | number;

export interface CompletionChoice {
  finishReason: CompletionFinishReason;
  index: number;
  logprobs: LogprobsUnion3;
  text: string;
}

export interface CompletionCreateParams {
  bestOf?: BestOfUnion;
  echo?: LogprobsUnion;
  frequencyPenalty?: FrequencyPenaltyUnion;
  logitBias?: LogitBiasUnion;
  logprobs?: LogprobsUnion4;
  maxTokens?: MaxTokensUnion;
  metadata?: MetadataUnion;
  model?: ModelName;
  models?: Array<ModelName>;
  n?: NUnion;
  presencePenalty?: FrequencyPenaltyUnion;
  prompt: PromptUnion;
  responseFormat?: ResponseFormatUnion2;
  seed?: SeedUnion;
  stop?: StopUnion2;
  stream?: boolean;
  streamOptions?: StreamOptionsUnion2;
  suffix?: ReasoningUnion;
  temperature?: TemperatureUnion;
  topP?: TopPUnion;
  user?: string;
}

export type CompletionFinishReason = string | any | null;

export interface CompletionLogprobs {
  textOffset: Array<number>;
  tokenLogprobs: Array<number>;
  tokens: Array<string>;
  topLogprobs: TopLogprobsUnion2;
}

export interface CompletionResponse {
  choices: Array<CompletionChoice>;
  created: number;
  id: string;
  model: string;
  object: "text_completion";
  systemFingerprint?: string;
  usage?: CompletionUsage;
}

export type CompletionTokensDetailsUnion = CompletionTokensDetailsUnionObject | any | null;

export interface CompletionTokensDetailsUnionObject {
  acceptedPredictionTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
  audioTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
  reasoningTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
  rejectedPredictionTokens?: CompletionTokensDetailsUnionObjectAcceptedPredictionTokens;
}

export type CompletionTokensDetailsUnionObjectAcceptedPredictionTokens = number | any | null;

export interface CompletionUsage {
  completionTokens: number;
  promptTokens: number;
  totalTokens: number;
}

export type ContentUnion = ContentUnionUnion | any | null;

export type ContentUnion2 = Array<ChatMessageTokenLogprob> | any | null;

export type ContentUnionUnion = string | Array<ChatMessageContentItem>;

export interface CreateAuthKeysCodeRequest {
  /**
   * The callback URL to redirect to after authorization. Note, only https URLs on ports 443 and 3000 are allowed.
   */
  callbackUrl: string;
  /**
   * PKCE code challenge for enhanced security
   */
  codeChallenge?: string;
  /**
   * The method used to generate the code challenge
   */
  codeChallengeMethod?: string;
  /**
   * Optional expiration time for the API key to be created
   */
  expiresAt?: string;
  /**
   * Credit limit for the API key to be created
   */
  limit?: number;
}

export interface CreateAuthKeysCodeResponse {
  /**
   * Auth code data
   */
  data: CreateAuthKeysCodeResponseData;
}

/**
 * Auth code data
 */
export interface CreateAuthKeysCodeResponseData {
  /**
   * The application ID associated with this auth code
   */
  appId: number;
  /**
   * ISO 8601 timestamp of when the auth code was created
   */
  createdAt: string;
  /**
   * The authorization code ID to use in the exchange request
   */
  id: string;
}

/**
 * Create a Coinbase charge for crypto payment
 */
export interface CreateChargeRequest {
  amount: number;
  chainId: number;
  sender: string;
}

export interface CreateCoinbaseChargeResponse {
  data: CreateCoinbaseChargeResponseData;
}

export interface CreateCoinbaseChargeResponseCallData {
  deadline: string;
  feeAmount: string;
  id: string;
  operator: string;
  prefix: string;
  recipient: string;
  recipientAmount: string;
  recipientCurrency: string;
  refundDestination: string;
  signature: string;
}

export interface CreateCoinbaseChargeResponseData {
  createdAt: string;
  expiresAt: string;
  id: string;
  web3Data: CreateCoinbaseChargeResponseWeb3Data;
}

export interface CreateCoinbaseChargeResponseMetadata {
  chainId: number;
  contractAddress: string;
  sender: string;
}

export interface CreateCoinbaseChargeResponseTransferIntent {
  callData: CreateCoinbaseChargeResponseCallData;
  metadata: CreateCoinbaseChargeResponseMetadata;
}

export interface CreateCoinbaseChargeResponseWeb3Data {
  transferIntent: CreateCoinbaseChargeResponseTransferIntent;
}

export interface CreateEmbeddingsRequest {
  dimensions?: number;
  encodingFormat?: string;
  input: CreateEmbeddingsRequestInput;
  inputType?: string;
  model: string;
  provider?: CreateEmbeddingsRequestProvider;
  user?: string;
}

export type CreateEmbeddingsRequestInput = string | Array<string> | Array<number> | Array<Array<number>> | Array<CreateEmbeddingsRequestInputObject>;

export interface CreateEmbeddingsRequestInputObject {
  content: Array<CreateEmbeddingsRequestInputObjectContentItem>;
}

export type CreateEmbeddingsRequestInputObjectContentItem = CreateEmbeddingsRequestInputObjectContentItemObject | EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject;

export interface CreateEmbeddingsRequestInputObjectContentItemObject {
  text: string;
  type: string;
}

export interface CreateEmbeddingsRequestProvider {
  /**
   * Whether to allow backup providers to serve requests
- true: (default) when the primary provider (or your custom providers in "order") is unavailable, use the next best provider.
- false: use only the primary/custom provider, and return the upstream error if it's unavailable.

   */
  allowFallbacks?: boolean;
  /**
   * Data collection setting. If no available model provider meets the requirement, your request will return an error.
- allow: (default) allow providers which store user data non-transiently and may train on it

- deny: use only providers which do not collect user data.
   */
  dataCollection?: DataCollection;
  /**
   * Whether to restrict routing to only models that allow text distillation. When true, only models where the author has allowed distillation will be used.
   */
  enforceDistillableText?: boolean;
  /**
   * List of provider slugs to ignore. If provided, this list is merged with your account-wide ignored provider settings for this request.
   */
  ignore?: Array<IgnoreItemOrRef>;
  /**
   * The object specifying the maximum price you want to pay for this request. USD price per million tokens, for prompt and completion.
   */
  maxPrice?: MaxPriceProperty;
  /**
   * List of provider slugs to allow. If provided, this list is merged with your account-wide allowed provider settings for this request.
   */
  only?: Array<IgnoreItemOrRef>;
  /**
   * An ordered list of provider slugs. The router will attempt to use the first provider in the subset of this list that supports your requested model, and fall back to the next if it is unavailable. If no providers are available, the request will fail with an error message.
   */
  order?: Array<IgnoreItemOrRef>;
  /**
   * A list of quantization levels to filter the provider by.
   */
  quantizations?: Array<Quantization>;
  /**
   * Whether to filter providers to only those that support the parameters you've provided. If this setting is omitted or set to false, then providers will receive only the parameters they support, and ignore the rest.
   */
  requireParameters?: boolean;
  /**
   * The sorting strategy to use for this request, if "order" is not specified. When set, no load balancing is performed.
   */
  sort?: ProviderSort;
  /**
   * Whether to restrict routing to only ZDR (Zero Data Retention) endpoints. When true, only endpoints that do not retain prompts will be used.
   */
  zdr?: boolean;
}

export interface CreateEmbeddingsResponse {
  data: Array<CreateEmbeddingsResponseDataItem>;
  id?: string;
  model: string;
  object: string;
  usage?: CreateEmbeddingsResponseUsage;
}

export interface CreateEmbeddingsResponseDataItem {
  embedding: CreateEmbeddingsResponseDataItemEmbedding;
  index?: number;
  object: string;
}

export type CreateEmbeddingsResponseDataItemEmbedding = Array<number> | string;

export interface CreateEmbeddingsResponseUsage {
  cost?: number;
  promptTokens: number;
  totalTokens: number;
}

export interface CreateKeysRequest {
  /**
   * Optional ISO 8601 UTC timestamp when the API key should expire. Must be UTC, other timezones will be rejected
   */
  expiresAt?: string;
  /**
   * Whether to include BYOK usage in the limit
   */
  includeByokInLimit?: boolean;
  /**
   * Optional spending limit for the API key in USD
   */
  limit?: number;
  /**
   * Type of limit reset for the API key (daily, weekly, monthly, or null for no reset). Resets happen automatically at midnight UTC, and weeks are Monday through Sunday.
   */
  limitReset?: string;
  /**
   * Name for the new API key
   */
  name: string;
}

export interface CreateKeysResponse {
  /**
   * The created API key information
   */
  data: CreateKeysResponseData;
  /**
   * The actual API key string (only shown once)
   */
  key: string;
}

/**
 * The created API key information
 */
export interface CreateKeysResponseData {
  /**
   * Total external BYOK usage (in USD) for the API key
   */
  byokUsage: number;
  /**
   * External BYOK usage (in USD) for the current UTC day
   */
  byokUsageDaily: number;
  /**
   * External BYOK usage (in USD) for current UTC month
   */
  byokUsageMonthly: number;
  /**
   * External BYOK usage (in USD) for the current UTC week (Monday-Sunday)
   */
  byokUsageWeekly: number;
  /**
   * ISO 8601 timestamp of when the API key was created
   */
  createdAt: string;
  /**
   * Whether the API key is disabled
   */
  disabled: boolean;
  /**
   * ISO 8601 UTC timestamp when the API key expires, or null if no expiration
   */
  expiresAt?: string;
  /**
   * Unique hash identifier for the API key
   */
  hash: string;
  /**
   * Whether to include external BYOK usage in the credit limit
   */
  includeByokInLimit: boolean;
  /**
   * Human-readable label for the API key
   */
  label: string;
  /**
   * Spending limit for the API key in USD
   */
  limit: number;
  /**
   * Remaining spending limit in USD
   */
  limitRemaining: number;
  /**
   * Type of limit reset for the API key
   */
  limitReset: string;
  /**
   * Name of the API key
   */
  name: string;
  /**
   * ISO 8601 timestamp of when the API key was last updated
   */
  updatedAt: string;
  /**
   * Total OpenRouter credit usage (in USD) for the API key
   */
  usage: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC day
   */
  usageDaily: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC month
   */
  usageMonthly: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)
   */
  usageWeekly: number;
}

export enum DataCollection {
  DENY = "deny",
  ALLOW = "allow",
}

export interface DataProperty {
  choices: Array<ChatStreamingChoice>;
  created: number;
  error?: ErrorProperty2;
  id: string;
  model: string;
  object: "chat.completion.chunk";
  systemFingerprint?: ReasoningUnion;
  usage?: ChatGenerationTokenUsage;
}

/**
 * Model count data
 */
export interface DataProperty2 {
  /**
   * Total number of available models
   */
  count: number;
}

/**
 * Default parameters for this model
 */
export interface DefaultParameters {
  frequencyPenalty?: number;
  temperature?: number;
  topP?: number;
}

export interface DeleteKeysResponse {
  /**
   * Confirmation that the API key was deleted
   */
  deleted: true;
}

/**
 * Infrastructure Timeout - Provider request timed out at edge network
 */
export interface EdgeNetworkTimeoutResponse {
  /**
   * Error data for EdgeNetworkTimeoutResponse
   */
  error: EdgeNetworkTimeoutResponseErrorData;
  userId?: string;
}

/**
 * Error data for EdgeNetworkTimeoutResponse
 */
export interface EdgeNetworkTimeoutResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export type EffortUnion = string | any | null;

export interface EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject {
  imageUrl: InlineTypeObjectVideoUrl;
  type: string;
}

export enum EndpointStatus {
  VALUE0 = 0,
  VALUE1 = -1,
  VALUE2 = -2,
  VALUE3 = -3,
  VALUE4 = -5,
  VALUE5 = -10,
}

export interface EndpointsListEndpointsResponse {
  /**
   * List of available endpoints for a model
   */
  data: ListEndpointsResponse;
}

export interface ErrorProperty {
  code: CodeUnion;
  message: string;
  param?: ReasoningUnion;
  type?: ReasoningUnion;
}

export interface ErrorProperty2 {
  code: number;
  message: string;
}

export interface ExchangeAuthCodeForApiKeyRequest {
  /**
   * The authorization code received from the OAuth redirect
   */
  code: string;
  /**
   * The method used to generate the code challenge
   */
  codeChallengeMethod?: string;
  /**
   * The code verifier if code_challenge was used in the authorization request
   */
  codeVerifier?: string;
}

export interface ExchangeAuthCodeForApiKeyResponse {
  /**
   * The API key to use for OpenRouter requests
   */
  key: string;
  /**
   * User ID associated with the API key
   */
  userId: string;
}

export interface FileCitation {
  fileId: string;
  filename: string;
  index: number;
  type: string;
}

export interface FilePath {
  fileId: string;
  index: number;
  type: string;
}

export interface FiltersProperty {
  allowedDomains?: Array<string>;
}

/**
 * Forbidden - Authentication successful but insufficient permissions
 */
export interface ForbiddenResponse {
  /**
   * Error data for ForbiddenResponse
   */
  error: ForbiddenResponseErrorData;
  userId?: string;
}

/**
 * Error data for ForbiddenResponse
 */
export interface ForbiddenResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export type FrequencyPenaltyUnion = number | any | null;

export interface FunctionProperty {
  arguments: string;
  name: string;
}

export interface FunctionProperty2 {
  arguments?: string;
  name?: string;
}

export interface FunctionProperty3 {
  name: string;
}

export interface FunctionProperty4 {
  description?: string;
  name: string;
  parameters?: MetadataProperty;
  strict?: LogprobsUnion;
}

export interface GetCurrentKeyResponse {
  /**
   * Current API key information
   */
  data: GetCurrentKeyResponseData;
}

/**
 * Current API key information
 */
export interface GetCurrentKeyResponseData {
  /**
   * Total external BYOK usage (in USD) for the API key
   */
  byokUsage: number;
  /**
   * External BYOK usage (in USD) for the current UTC day
   */
  byokUsageDaily: number;
  /**
   * External BYOK usage (in USD) for current UTC month
   */
  byokUsageMonthly: number;
  /**
   * External BYOK usage (in USD) for the current UTC week (Monday-Sunday)
   */
  byokUsageWeekly: number;
  /**
   * ISO 8601 UTC timestamp when the API key expires, or null if no expiration
   */
  expiresAt?: string;
  /**
   * Whether to include external BYOK usage in the credit limit
   */
  includeByokInLimit: boolean;
  /**
   * Whether this is a free tier API key
   */
  isFreeTier: boolean;
  /**
   * Whether this is a provisioning key
   */
  isProvisioningKey: boolean;
  /**
   * Human-readable label for the API key
   */
  label: string;
  /**
   * Spending limit for the API key in USD
   */
  limit: number;
  /**
   * Remaining spending limit in USD
   */
  limitRemaining: number;
  /**
   * Type of limit reset for the API key
   */
  limitReset: string;
  /**
   * Legacy rate limit information about a key. Will always return -1.
   */
  rateLimit: GetCurrentKeyResponseRateLimit;
  /**
   * Total OpenRouter credit usage (in USD) for the API key
   */
  usage: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC day
   */
  usageDaily: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC month
   */
  usageMonthly: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)
   */
  usageWeekly: number;
}

/**
 * Legacy rate limit information about a key. Will always return -1.
 */
export interface GetCurrentKeyResponseRateLimit {
  /**
   * Rate limit interval
   */
  interval: string;
  /**
   * Note about the rate limit
   */
  note: string;
  /**
   * Number of requests allowed per interval
   */
  requests: number;
}

/**
 * Generation response
 */
export interface GetGenerationResponse {
  /**
   * Generation data
   */
  data: GetGenerationResponseData;
}

/**
 * Generation data
 */
export interface GetGenerationResponseData {
  /**
   * Type of API used for the generation
   */
  apiType: string;
  /**
   * ID of the app that made the request
   */
  appId: number;
  /**
   * Discount applied due to caching
   */
  cacheDiscount: number;
  /**
   * Whether the generation was cancelled
   */
  cancelled: boolean;
  /**
   * ISO 8601 timestamp of when the generation was created
   */
  createdAt: string;
  /**
   * External user identifier
   */
  externalUser: string;
  /**
   * Reason the generation finished
   */
  finishReason: string;
  /**
   * Time taken for generation in milliseconds
   */
  generationTime: number;
  /**
   * Unique identifier for the generation
   */
  id: string;
  /**
   * Whether this used bring-your-own-key
   */
  isByok: boolean;
  /**
   * Total latency in milliseconds
   */
  latency: number;
  /**
   * Model used for the generation
   */
  model: string;
  /**
   * Moderation latency in milliseconds
   */
  moderationLatency: number;
  /**
   * Native finish reason as reported by provider
   */
  nativeFinishReason: string;
  /**
   * Native cached tokens as reported by provider
   */
  nativeTokensCached: number;
  /**
   * Native completion tokens as reported by provider
   */
  nativeTokensCompletion: number;
  /**
   * Native completion image tokens as reported by provider
   */
  nativeTokensCompletionImages: number;
  /**
   * Native prompt tokens as reported by provider
   */
  nativeTokensPrompt: number;
  /**
   * Native reasoning tokens as reported by provider
   */
  nativeTokensReasoning: number;
  /**
   * Number of audio inputs in the prompt
   */
  numInputAudioPrompt: number;
  /**
   * Number of media items in the completion
   */
  numMediaCompletion: number;
  /**
   * Number of media items in the prompt
   */
  numMediaPrompt: number;
  /**
   * Number of search results included
   */
  numSearchResults: number;
  /**
   * Origin URL of the request
   */
  origin: string;
  /**
   * Name of the provider that served the request
   */
  providerName: string;
  /**
   * Whether the response was streamed
   */
  streamed: boolean;
  /**
   * Number of tokens in the completion
   */
  tokensCompletion: number;
  /**
   * Number of tokens in the prompt
   */
  tokensPrompt: number;
  /**
   * Total cost of the generation in USD
   */
  totalCost: number;
  /**
   * Upstream provider's identifier for this generation
   */
  upstreamId: string;
  /**
   * Cost charged by the upstream provider
   */
  upstreamInferenceCost: number;
  /**
   * Usage amount in USD
   */
  usage: number;
}

export interface GetKeyResponse {
  /**
   * The API key information
   */
  data: GetKeyResponseData;
}

/**
 * The API key information
 */
export interface GetKeyResponseData {
  /**
   * Total external BYOK usage (in USD) for the API key
   */
  byokUsage: number;
  /**
   * External BYOK usage (in USD) for the current UTC day
   */
  byokUsageDaily: number;
  /**
   * External BYOK usage (in USD) for current UTC month
   */
  byokUsageMonthly: number;
  /**
   * External BYOK usage (in USD) for the current UTC week (Monday-Sunday)
   */
  byokUsageWeekly: number;
  /**
   * ISO 8601 timestamp of when the API key was created
   */
  createdAt: string;
  /**
   * Whether the API key is disabled
   */
  disabled: boolean;
  /**
   * ISO 8601 UTC timestamp when the API key expires, or null if no expiration
   */
  expiresAt?: string;
  /**
   * Unique hash identifier for the API key
   */
  hash: string;
  /**
   * Whether to include external BYOK usage in the credit limit
   */
  includeByokInLimit: boolean;
  /**
   * Human-readable label for the API key
   */
  label: string;
  /**
   * Spending limit for the API key in USD
   */
  limit: number;
  /**
   * Remaining spending limit in USD
   */
  limitRemaining: number;
  /**
   * Type of limit reset for the API key
   */
  limitReset: string;
  /**
   * Name of the API key
   */
  name: string;
  /**
   * ISO 8601 timestamp of when the API key was last updated
   */
  updatedAt: string;
  /**
   * Total OpenRouter credit usage (in USD) for the API key
   */
  usage: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC day
   */
  usageDaily: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC month
   */
  usageMonthly: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)
   */
  usageWeekly: number;
}

export interface GetParametersResponse {
  /**
   * Parameter analytics data
   */
  data: GetParametersResponseData;
}

/**
 * Parameter analytics data
 */
export interface GetParametersResponseData {
  /**
   * Model identifier
   */
  model: string;
  /**
   * List of parameters supported by this model
   */
  supportedParameters: Array<string>;
}

export interface GetUserActivityResponse {
  /**
   * List of activity items
   */
  data: Array<ActivityItem>;
}

export type IgnoreItemOrRef = ProviderName | string;

export enum ImageGenerationStatus {
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  GENERATING = "generating",
  FAILED = "failed",
}

export interface ImageUrlProperty {
  detail?: string;
  url: string;
}

export interface InlineTypeObject {
  type: "input_video";
  videoUrl: InlineTypeObjectVideoUrl;
}

export interface InlineTypeObject2 {
  type: "video_url";
  videoUrl: InlineTypeObjectVideoUrl;
}

export interface InlineTypeObject3 {
  content: InlineTypeObject3Content;
  name?: string;
  role: "developer";
}

export type InlineTypeObject3Content = string | Array<ChatMessageContentItemText>;

export interface InlineTypeObject4 {
  name: string;
  type: string;
}

export interface InlineTypeObject5 {
  type: InlineTypeObject5Type;
}

export type InlineTypeObject5Type = string | string;

export interface InlineTypeObject6 {
  upstreamInferenceCost?: number;
  upstreamInferenceInputCost: number;
  upstreamInferenceOutputCost: number;
}

export interface InlineTypeObjectVideoUrl {
  url: string;
}

export type InlineTypeUnion = InlineTypeUnionObject | InlineTypeUnionObject2 | InlineTypeUnionObject3 | InlineTypeUnionObject4 | OutputItemImageGenerationCall | OutputMessage;

/**
 * Event emitted when refusal streaming is complete
 */
export interface InlineTypeUnion10 {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  refusal: string;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a text annotation is added to output
 */
export interface InlineTypeUnion11 {
  annotation: OpenAiResponsesAnnotation;
  annotationIndex: number;
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when function call arguments are being streamed
 */
export interface InlineTypeUnion12 {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when function call arguments streaming is complete
 */
export interface InlineTypeUnion13 {
  arguments: string;
  itemId: string;
  name: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a reasoning summary part is complete
 */
export interface InlineTypeUnion14 {
  itemId: string;
  outputIndex: number;
  part: ReasoningSummaryText;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

export type InlineTypeUnion2 = OpenResponsesReasoning | OpenResponsesEasyInputMessage | OpenResponsesInputMessageItem | OpenResponsesFunctionToolCall | OpenResponsesFunctionCallOutput | ResponsesOutputMessage | ResponsesOutputItemReasoning | ResponsesOutputItemFunctionCall | ResponsesWebSearchCallOutput | ResponsesOutputItemFileSearchCall | ResponsesImageGenerationCall;

export type InlineTypeUnion3 = string | string | string;

/**
 * Event emitted when a response is created
 */
export interface InlineTypeUnion4 {
  /**
   * Complete non-streaming response from the Responses API
   */
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a new output item is added to the response
 */
export interface InlineTypeUnion5 {
  /**
   * An output item from the response
   */
  item: OutputItemUnion;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a new content part is added to an output item
 */
export interface InlineTypeUnion6 {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  part: PartUnion;
  sequenceNumber: number;
  type: string;
}

export type InlineTypeUnion6Union = ResponseOutputText | ReasoningTextContent | OpenAiResponsesRefusalContent;

/**
 * Event emitted when a text delta is streamed
 */
export interface InlineTypeUnion7 {
  contentIndex: number;
  delta: string;
  itemId: string;
  logprobs: Array<OpenResponsesLogProbs>;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when text streaming is complete
 */
export interface InlineTypeUnion8 {
  contentIndex: number;
  itemId: string;
  logprobs: Array<OpenResponsesLogProbs>;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

/**
 * Event emitted when a refusal delta is streamed
 */
export interface InlineTypeUnion9 {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export interface InlineTypeUnionObject {
  content: InlineTypeUnionObjectContent;
  role: InlineTypeUnionObjectRole;
  type?: string;
}

export interface InlineTypeUnionObject2 {
  content: Array<InlineTypeUnionObjectContentUnion>;
  id: string;
  role: InlineTypeUnionObject2Role;
  type?: string;
}

export type InlineTypeUnionObject2Role = string | string | string;

export interface InlineTypeUnionObject3 {
  callId: string;
  id?: string;
  output: string;
  status?: ToolCallStatus;
  type: string;
}

export interface InlineTypeUnionObject4 {
  arguments: string;
  callId: string;
  id?: string;
  name: string;
  status?: ToolCallStatus;
  type: string;
}

export type InlineTypeUnionObjectContent = Array<InlineTypeUnionObjectContentUnion> | string;

export type InlineTypeUnionObjectContentUnion = ResponseInputText | ResponseInputImage | ResponseInputFile | ResponseInputAudio;

export type InlineTypeUnionObjectRole = string | string | string | string;

export interface InputAudioProperty {
  data: string;
  format: string;
}

export enum InputModality {
  TEXT = "text",
  IMAGE = "image",
  FILE = "file",
  AUDIO = "audio",
  VIDEO = "video",
}

export interface InputTokensDetailsProperty {
  cachedTokens: number;
}

export enum InstructType {
  NONE = "none",
  AIROBOROS = "airoboros",
  ALPACA = "alpaca",
  ALPACA_MODIF = "alpaca-modif",
  CHATML = "chatml",
  CLAUDE = "claude",
  CODE_LLAMA = "code-llama",
  GEMMA = "gemma",
  LLAMA2 = "llama2",
  LLAMA3 = "llama3",
  MISTRAL = "mistral",
  NEMOTRON = "nemotron",
  NEURAL = "neural",
  OPENCHAT = "openchat",
  PHI3 = "phi3",
  RWKV = "rwkv",
  VICUNA = "vicuna",
  ZEPHYR = "zephyr",
  DEEPSEEK_R1 = "deepseek-r1",
  DEEPSEEK_V3_1 = "deepseek-v3.1",
  QWQ = "qwq",
  QWEN3 = "qwen3",
}

/**
 * Internal Server Error - Unexpected server error
 */
export interface InternalServerResponse {
  /**
   * Error data for InternalServerResponse
   */
  error: InternalServerResponseErrorData;
  userId?: string;
}

/**
 * Error data for InternalServerResponse
 */
export interface InternalServerResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export interface JsonSchemaConfig {
  description?: string;
  name: string;
  schema?: MetadataProperty;
  strict?: LogprobsUnion;
}

/**
 * List of available endpoints for a model
 */
export interface ListEndpointsResponse {
  architecture: ArchitectureUnion;
  /**
   * Unix timestamp of when the model was created
   */
  created: number;
  /**
   * Description of the model
   */
  description: string;
  /**
   * List of available endpoints for this model
   */
  endpoints: Array<PublicEndpoint>;
  /**
   * Unique identifier for the model
   */
  id: string;
  /**
   * Display name of the model
   */
  name: string;
}

export interface ListEndpointsZdrResponse {
  data: Array<PublicEndpoint>;
}

export interface ListProvidersResponse {
  data: Array<ListProvidersResponseDataItem>;
}

export interface ListProvidersResponseDataItem {
  /**
   * Display name of the provider
   */
  name: string;
  /**
   * URL to the provider's privacy policy
   */
  privacyPolicyUrl: string;
  /**
   * URL-friendly identifier for the provider
   */
  slug: string;
  /**
   * URL to the provider's status page
   */
  statusPageUrl?: string;
  /**
   * URL to the provider's terms of service
   */
  termsOfServiceUrl?: string;
}

export interface ListResponse {
  /**
   * List of API keys
   */
  data: Array<ListResponseDataItem>;
}

export interface ListResponseDataItem {
  /**
   * Total external BYOK usage (in USD) for the API key
   */
  byokUsage: number;
  /**
   * External BYOK usage (in USD) for the current UTC day
   */
  byokUsageDaily: number;
  /**
   * External BYOK usage (in USD) for current UTC month
   */
  byokUsageMonthly: number;
  /**
   * External BYOK usage (in USD) for the current UTC week (Monday-Sunday)
   */
  byokUsageWeekly: number;
  /**
   * ISO 8601 timestamp of when the API key was created
   */
  createdAt: string;
  /**
   * Whether the API key is disabled
   */
  disabled: boolean;
  /**
   * ISO 8601 UTC timestamp when the API key expires, or null if no expiration
   */
  expiresAt?: string;
  /**
   * Unique hash identifier for the API key
   */
  hash: string;
  /**
   * Whether to include external BYOK usage in the credit limit
   */
  includeByokInLimit: boolean;
  /**
   * Human-readable label for the API key
   */
  label: string;
  /**
   * Spending limit for the API key in USD
   */
  limit: number;
  /**
   * Remaining spending limit in USD
   */
  limitRemaining: number;
  /**
   * Type of limit reset for the API key
   */
  limitReset: string;
  /**
   * Name of the API key
   */
  name: string;
  /**
   * ISO 8601 timestamp of when the API key was last updated
   */
  updatedAt: string;
  /**
   * Total OpenRouter credit usage (in USD) for the API key
   */
  usage: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC day
   */
  usageDaily: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC month
   */
  usageMonthly: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)
   */
  usageWeekly: number;
}

export type LogitBiasUnion = LogitBiasUnionObject | any | null;

export interface LogitBiasUnionObject {
}

export type LogprobsUnion = boolean | any | null;

export type LogprobsUnion2 = ChatMessageTokenLogprobs | any | null;

export type LogprobsUnion3 = CompletionLogprobs | any | null;

export type LogprobsUnion4 = number | any | null;

export type MaxCompletionTokensUnion = number | any | null;

/**
 * The object specifying the maximum price you want to pay for this request. USD price per million tokens, for prompt and completion.
 */
export interface MaxPriceProperty {
  /**
   * A value in string or number format that is a large number
   */
  audio?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  completion?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  image?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  prompt?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  request?: BigNumberUnion;
}

export type MaxTokensUnion = number | any | null;

export type Message = SystemMessage | UserMessage | InlineTypeObject3 | AssistantMessage | ToolResponseMessage;

export interface MetadataProperty {
}

export type MetadataUnion = MetadataProperty | any | null;

/**
 * Information about an AI model available on OpenRouter
 */
export interface Model {
  /**
   * Model architecture information
   */
  architecture: ModelArchitecture;
  /**
   * Canonical slug for the model
   */
  canonicalSlug: string;
  /**
   * Maximum context length in tokens
   */
  contextLength: number;
  /**
   * Unix timestamp of when the model was created
   */
  created: number;
  /**
   * Default parameters for this model
   */
  defaultParameters: DefaultParameters;
  /**
   * Description of the model
   */
  description?: string;
  /**
   * Hugging Face model identifier, if applicable
   */
  huggingFaceId?: string;
  /**
   * Unique identifier for the model
   */
  id: string;
  /**
   * Display name of the model
   */
  name: string;
  /**
   * Per-request token limits
   */
  perRequestLimits: PerRequestLimits;
  /**
   * Pricing information for the model
   */
  pricing: PublicPricing;
  /**
   * List of supported parameters for this model
   */
  supportedParameters: Array<Parameter>;
  /**
   * Information about the top provider for this model
   */
  topProvider: TopProviderInfo;
}

/**
 * Model architecture information
 */
export interface ModelArchitecture {
  /**
   * Supported input modalities
   */
  inputModalities: Array<InputModality>;
  /**
   * Instruction format type
   */
  instructType?: string;
  /**
   * Primary modality of the model
   */
  modality: string;
  /**
   * Supported output modalities
   */
  outputModalities: Array<OutputModality>;
  /**
   * Tokenizer type used by the model
   */
  tokenizer?: ModelGroup;
}

export enum ModelGroup {
  ROUTER = "Router",
  MEDIA = "Media",
  OTHER = "Other",
  GPT = "GPT",
  CLAUDE = "Claude",
  GEMINI = "Gemini",
  GROK = "Grok",
  COHERE = "Cohere",
  NOVA = "Nova",
  QWEN = "Qwen",
  YI = "Yi",
  DEEP_SEEK = "DeepSeek",
  MISTRAL = "Mistral",
  LLAMA2 = "Llama2",
  LLAMA3 = "Llama3",
  LLAMA4 = "Llama4",
  PA_LM = "PaLM",
  RWKV = "RWKV",
  QWEN3 = "Qwen3",
}

export type ModelName = string;

/**
 * Model count data
 */
export interface ModelsCountResponse {
  /**
   * Model count data
   */
  data: DataProperty2;
}

/**
 * List of available models
 */
export interface ModelsListResponse {
  /**
   * List of available models
   */
  data: ModelsListResponseData;
}

export type ModelsListResponseData = Array<Model>;

export type NUnion = number | any | null;

export interface NamedToolChoice {
  function: FunctionProperty3;
  type: "function";
}

/**
 * Not Found - Resource does not exist
 */
export interface NotFoundResponse {
  /**
   * Error data for NotFoundResponse
   */
  error: NotFoundResponseErrorData;
  userId?: string;
}

/**
 * Error data for NotFoundResponse
 */
export interface NotFoundResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export type OpenAiResponsesAnnotation = FileCitation | UrlCitation | FilePath;

/**
 * Event emitted when an error occurs during streaming
 */
export interface OpenAiResponsesErrorEvent {
  code: string;
  message: string;
  param: string;
  sequenceNumber: number;
  type: string;
}

export interface OpenAiResponsesImageGenCallCompleted {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export interface OpenAiResponsesImageGenCallGenerating {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export interface OpenAiResponsesImageGenCallInProgress {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export interface OpenAiResponsesImageGenCallPartialImage {
  itemId: string;
  outputIndex: number;
  partialImageB64: string;
  partialImageIndex: number;
  sequenceNumber: number;
  type: string;
}

export enum OpenAiResponsesIncludable {
  FILE_SEARCH_CALL_RESULTS = "file_search_call.results",
  MESSAGE_INPUT_IMAGE_IMAGE_URL = "message.input_image.image_url",
  COMPUTER_CALL_OUTPUT_OUTPUT_IMAGE_URL = "computer_call_output.output.image_url",
  REASONING_ENCRYPTED_CONTENT = "reasoning.encrypted_content",
  CODE_INTERPRETER_CALL_OUTPUTS = "code_interpreter_call.outputs",
}

export interface OpenAiResponsesIncompleteDetails {
  reason?: string;
}

export type OpenAiResponsesInput = string | Array<InlineTypeUnion> | any;

export interface OpenAiResponsesNonStreamingResponse {
  background?: boolean;
  createdAt: number;
  /**
   * Error information returned from the API
   */
  error: ResponsesErrorField;
  id: string;
  incompleteDetails: OpenAiResponsesIncompleteDetails;
  instructions: OpenAiResponsesInput;
  maxOutputTokens?: number;
  maxToolCalls?: number;
  /**
   * Metadata key-value pairs for the request. Keys must be ≤64 characters and cannot contain brackets. Values must be ≤512 characters. Maximum 16 pairs allowed.
   */
  metadata: OpenResponsesRequestMetadata;
  model: string;
  object: string;
  output: Array<OutputItemUnion>;
  outputText?: string;
  parallelToolCalls: boolean;
  previousResponseId?: string;
  prompt?: OpenAiResponsesPrompt;
  promptCacheKey?: string;
  reasoning?: OpenAiResponsesReasoningConfig;
  safetyIdentifier?: string;
  serviceTier?: OpenAiResponsesServiceTier;
  status?: OpenAiResponsesResponseStatus;
  store?: boolean;
  temperature: number;
  /**
   * Text output configuration including format and verbosity
   */
  text?: ResponseTextConfig;
  toolChoice: OpenAiResponsesToolChoice;
  tools: Array<ToolsItemUnion>;
  topLogprobs?: number;
  topP: number;
  truncation?: OpenAiResponsesTruncation;
  usage?: OpenAiResponsesUsage;
  user?: string;
}

export interface OpenAiResponsesPrompt {
  id: string;
  variables?: VariablesProperty;
}

export interface OpenAiResponsesReasoningConfig {
  effort?: OpenAiResponsesReasoningEffort;
  summary?: ReasoningSummaryVerbosity;
}

/**
 * Event emitted when reasoning text delta is streamed
 */
export interface OpenAiResponsesReasoningDeltaEvent {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when reasoning text streaming is complete
 */
export interface OpenAiResponsesReasoningDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

export enum OpenAiResponsesReasoningEffort {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
  MINIMAL = "minimal",
  NONE = "none",
}

/**
 * Event emitted when a reasoning summary part is added
 */
export interface OpenAiResponsesReasoningSummaryPartAddedEvent {
  itemId: string;
  outputIndex: number;
  part: ReasoningSummaryText;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

/**
 * Event emitted when reasoning summary text delta is streamed
 */
export interface OpenAiResponsesReasoningSummaryTextDeltaEvent {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

/**
 * Event emitted when reasoning summary text streaming is complete
 */
export interface OpenAiResponsesReasoningSummaryTextDoneEvent {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  text: string;
  type: string;
}

export interface OpenAiResponsesRefusalContent {
  refusal: string;
  type: string;
}

export enum OpenAiResponsesResponseStatus {
  COMPLETED = "completed",
  INCOMPLETE = "incomplete",
  IN_PROGRESS = "in_progress",
  FAILED = "failed",
  CANCELLED = "cancelled",
  QUEUED = "queued",
}

export enum OpenAiResponsesServiceTier {
  AUTO = "auto",
  DEFAULT = "default",
  FLEX = "flex",
  PRIORITY = "priority",
  SCALE = "scale",
}

export type OpenAiResponsesToolChoice = string | string | string | InlineTypeObject4 | InlineTypeObject5;

export enum OpenAiResponsesTruncation {
  AUTO = "auto",
  DISABLED = "disabled",
}

export interface OpenAiResponsesUsage {
  inputTokens: number;
  inputTokensDetails: InputTokensDetailsProperty;
  outputTokens: number;
  outputTokensDetails: OutputTokensDetailsProperty;
  totalTokens: number;
}

/**
 * Event emitted when a response has completed successfully
 */
export interface OpenResponsesCompletedEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a new content part is added to an output item
 */
export interface OpenResponsesContentPartAddedEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  part: PartUnion;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a content part is complete
 */
export interface OpenResponsesContentPartDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  part: PartUnion;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a response is created
 */
export interface OpenResponsesCreatedEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

export interface OpenResponsesEasyInputMessage {
  content: InlineTypeUnionObjectContent;
  role: InlineTypeUnionObjectRole;
  type?: string;
}

/**
 * Event emitted when an error occurs during streaming
 */
export interface OpenResponsesErrorEvent {
  code: string;
  message: string;
  param: string;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a response has failed
 */
export interface OpenResponsesFailedEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when function call arguments are being streamed
 */
export interface OpenResponsesFunctionCallArgumentsDeltaEvent {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when function call arguments streaming is complete
 */
export interface OpenResponsesFunctionCallArgumentsDoneEvent {
  arguments: string;
  itemId: string;
  name: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * The output from a function call execution
 */
export interface OpenResponsesFunctionCallOutput {
  callId: string;
  id?: string;
  output: string;
  status?: ToolCallStatus;
  type: string;
}

/**
 * Function tool definition
 */
export interface OpenResponsesFunctionTool {
  description?: string;
  name: string;
  parameters: MetadataProperty;
  strict?: boolean;
  type: string;
}

/**
 * A function call initiated by the model
 */
export interface OpenResponsesFunctionToolCall {
  arguments: string;
  callId: string;
  id: string;
  name: string;
  status?: ToolCallStatus;
  type: string;
}

/**
 * Image generation call completed
 */
export interface OpenResponsesImageGenCallCompleted {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Image generation call is generating
 */
export interface OpenResponsesImageGenCallGenerating {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Image generation call in progress
 */
export interface OpenResponsesImageGenCallInProgress {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Image generation call with partial image
 */
export interface OpenResponsesImageGenCallPartialImage {
  itemId: string;
  outputIndex: number;
  partialImageB64: string;
  partialImageIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a response is in progress
 */
export interface OpenResponsesInProgressEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a response is incomplete
 */
export interface OpenResponsesIncompleteEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

export type OpenResponsesInput = string | Array<InlineTypeUnion2>;

export interface OpenResponsesInputMessageItem {
  content: Array<InlineTypeUnionObjectContentUnion>;
  id?: string;
  role: InlineTypeUnionObject2Role;
  type?: string;
}

/**
 * Log probability information for a token
 */
export interface OpenResponsesLogProbs {
  logprob: number;
  token: string;
  topLogprobs?: Array<OpenResponsesTopLogprobs>;
}

/**
 * Complete non-streaming response from the Responses API
 */
export interface OpenResponsesNonStreamingResponse {
  background?: boolean;
  createdAt: number;
  /**
   * Error information returned from the API
   */
  error: ResponsesErrorField;
  id: string;
  incompleteDetails: OpenAiResponsesIncompleteDetails;
  instructions: OpenAiResponsesInput;
  maxOutputTokens?: number;
  maxToolCalls?: number;
  /**
   * Metadata key-value pairs for the request. Keys must be ≤64 characters and cannot contain brackets. Values must be ≤512 characters. Maximum 16 pairs allowed.
   */
  metadata: OpenResponsesRequestMetadata;
  model: string;
  object: string;
  output: Array<OutputItemUnion>;
  outputText?: string;
  parallelToolCalls: boolean;
  previousResponseId?: string;
  prompt?: OpenAiResponsesPrompt;
  promptCacheKey?: string;
  reasoning?: OpenAiResponsesReasoningConfig;
  safetyIdentifier?: string;
  serviceTier?: OpenAiResponsesServiceTier;
  status?: OpenAiResponsesResponseStatus;
  store?: boolean;
  temperature: number;
  /**
   * Text output configuration including format and verbosity
   */
  text?: ResponseTextConfig;
  toolChoice: OpenAiResponsesToolChoice;
  tools: Array<ToolsItemUnion>;
  topLogprobs?: number;
  topP: number;
  truncation?: OpenAiResponsesTruncation;
  /**
   * Token usage information for the response
   */
  usage?: OpenAiResponsesUsage;
  user?: string;
}

/**
 * Event emitted when a new output item is added to the response
 */
export interface OpenResponsesOutputItemAddedEvent {
  item: OutputItemUnion;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when an output item is complete
 */
export interface OpenResponsesOutputItemDoneEvent {
  item: OutputItemUnion;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when a text annotation is added to output
 */
export interface OpenResponsesOutputTextAnnotationAddedEvent {
  annotation: OpenAiResponsesAnnotation;
  annotationIndex: number;
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Reasoning output item with signature and format extensions
 */
export interface OpenResponsesReasoning {
  content?: Array<ReasoningTextContent>;
  encryptedContent?: string;
  format?: string;
  id: string;
  signature?: string;
  status?: InlineTypeUnion3;
  summary: Array<ReasoningSummaryText>;
  type: string;
}

/**
 * Configuration for reasoning mode in the response
 */
export interface OpenResponsesReasoningConfig {
  effort?: OpenAiResponsesReasoningEffort;
  enabled?: boolean;
  maxTokens?: number;
  summary?: ReasoningSummaryVerbosity;
}

/**
 * Event emitted when reasoning text delta is streamed
 */
export interface OpenResponsesReasoningDeltaEvent {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when reasoning text streaming is complete
 */
export interface OpenResponsesReasoningDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

/**
 * Event emitted when a reasoning summary part is added
 */
export interface OpenResponsesReasoningSummaryPartAddedEvent {
  itemId: string;
  outputIndex: number;
  part: ReasoningSummaryText;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

/**
 * Event emitted when a reasoning summary part is complete
 */
export interface OpenResponsesReasoningSummaryPartDoneEvent {
  itemId: string;
  outputIndex: number;
  part: ReasoningSummaryText;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

/**
 * Event emitted when reasoning summary text delta is streamed
 */
export interface OpenResponsesReasoningSummaryTextDeltaEvent {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

/**
 * Event emitted when reasoning summary text streaming is complete
 */
export interface OpenResponsesReasoningSummaryTextDoneEvent {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  text: string;
  type: string;
}

/**
 * Event emitted when a refusal delta is streamed
 */
export interface OpenResponsesRefusalDeltaEvent {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when refusal streaming is complete
 */
export interface OpenResponsesRefusalDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  refusal: string;
  sequenceNumber: number;
  type: string;
}

/**
 * Request schema for Responses endpoint
 */
export interface OpenResponsesRequest {
  background?: boolean;
  include?: Array<OpenAiResponsesIncludable>;
  /**
   * Input for a response request - can be a string or array of items
   */
  input?: OpenResponsesInput;
  instructions?: string;
  maxOutputTokens?: number;
  /**
   * Metadata key-value pairs for the request. Keys must be ≤64 characters and cannot contain brackets. Values must be ≤512 characters. Maximum 16 pairs allowed.
   */
  metadata?: OpenResponsesRequestMetadata;
  model?: string;
  models?: Array<string>;
  parallelToolCalls?: boolean;
  /**
   * Plugins you want to enable for this request, including their settings.
   */
  plugins?: Array<PluginsItemUnion>;
  previousResponseId?: string;
  prompt?: OpenAiResponsesPrompt;
  promptCacheKey?: string;
  /**
   * When multiple model providers are available, optionally indicate your routing preference.
   */
  provider?: ProviderProperty;
  /**
   * Configuration for reasoning mode in the response
   */
  reasoning?: OpenResponsesReasoningConfig;
  safetyIdentifier?: string;
  serviceTier?: ServiceTierUnion;
  store?: boolean;
  stream?: boolean;
  temperature?: number;
  /**
   * Text output configuration including format and verbosity
   */
  text?: OpenResponsesResponseText;
  toolChoice?: OpenAiResponsesToolChoice;
  tools?: Array<ToolsItemUnion>;
  topK?: number;
  topP?: number;
  truncation?: TruncationUnion;
  /**
   * A unique identifier representing your end-user, which helps distinguish between different users of your app. This allows your app to identify specific users in case of abuse reports, preventing your entire app from being affected by the actions of individual users. Maximum of 128 characters.
   */
  user?: string;
}

/**
 * Metadata key-value pairs for the request. Keys must be ≤64 characters and cannot contain brackets. Values must be ≤512 characters. Maximum 16 pairs allowed.
 */
export interface OpenResponsesRequestMetadata {
}

/**
 * Text output configuration including format and verbosity
 */
export interface OpenResponsesResponseText {
  /**
   * Text response format configuration
   */
  format?: ResponseFormatTextConfig;
  verbosity?: string;
}

export type OpenResponsesStreamEvent = InlineTypeUnion4 | InlineTypeUnion4 | InlineTypeUnion4 | InlineTypeUnion4 | InlineTypeUnion4 | OpenResponsesErrorEvent | InlineTypeUnion5 | InlineTypeUnion5 | InlineTypeUnion6 | InlineTypeUnion6 | InlineTypeUnion7 | InlineTypeUnion8 | InlineTypeUnion9 | InlineTypeUnion10 | InlineTypeUnion11 | InlineTypeUnion12 | InlineTypeUnion13 | OpenResponsesReasoningDeltaEvent | OpenResponsesReasoningDoneEvent | OpenResponsesReasoningSummaryPartAddedEvent | InlineTypeUnion14 | OpenResponsesReasoningSummaryTextDeltaEvent | OpenResponsesReasoningSummaryTextDoneEvent | OpenResponsesImageGenCallInProgress | OpenResponsesImageGenCallGenerating | OpenResponsesImageGenCallPartialImage | OpenResponsesImageGenCallCompleted;

/**
 * Event emitted when a text delta is streamed
 */
export interface OpenResponsesTextDeltaEvent {
  contentIndex: number;
  delta: string;
  itemId: string;
  logprobs: Array<OpenResponsesLogProbs>;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

/**
 * Event emitted when text streaming is complete
 */
export interface OpenResponsesTextDoneEvent {
  contentIndex: number;
  itemId: string;
  logprobs: Array<OpenResponsesLogProbs>;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

/**
 * Alternative token with its log probability
 */
export interface OpenResponsesTopLogprobs {
  logprob?: number;
  token?: string;
}

/**
 * Token usage information for the response
 */
export interface OpenResponsesUsage {
  /**
   * Cost of the completion
   */
  cost?: number;
  costDetails?: InlineTypeObject6;
  inputTokens: number;
  inputTokensDetails: InputTokensDetailsProperty;
  /**
   * Whether a request was made using a Bring Your Own Key configuration
   */
  isByok?: boolean;
  outputTokens: number;
  outputTokensDetails: OutputTokensDetailsProperty;
  totalTokens: number;
}

/**
 * Web search tool configuration (2025-08-26 version)
 */
export interface OpenResponsesWebSearch20250826Tool {
  filters?: FiltersProperty;
  /**
   * Size of the search context for web search tools
   */
  searchContextSize?: ResponsesSearchContextSize;
  type: string;
  /**
   * User location information for web search
   */
  userLocation?: ResponsesWebSearchUserLocation;
}

/**
 * Web search preview tool configuration (2025-03-11 version)
 */
export interface OpenResponsesWebSearchPreview20250311Tool {
  /**
   * Size of the search context for web search tools
   */
  searchContextSize?: ResponsesSearchContextSize;
  type: string;
  userLocation?: WebSearchPreviewToolUserLocation;
}

/**
 * Web search preview tool configuration
 */
export interface OpenResponsesWebSearchPreviewTool {
  /**
   * Size of the search context for web search tools
   */
  searchContextSize?: ResponsesSearchContextSize;
  type: string;
  userLocation?: WebSearchPreviewToolUserLocation;
}

/**
 * Web search tool configuration
 */
export interface OpenResponsesWebSearchTool {
  filters?: FiltersProperty;
  /**
   * Size of the search context for web search tools
   */
  searchContextSize?: ResponsesSearchContextSize;
  type: string;
  /**
   * User location information for web search
   */
  userLocation?: ResponsesWebSearchUserLocation;
}

export interface OutputItemFileSearchCall {
  id: string;
  queries: Array<string>;
  status: WebSearchStatus;
  type: string;
}

export interface OutputItemFunctionCall {
  arguments: string;
  callId: string;
  id?: string;
  name: string;
  status?: InlineTypeUnion3;
  type: string;
}

export interface OutputItemImageGenerationCall {
  id: string;
  result?: string;
  status: ImageGenerationStatus;
  type: string;
}

export interface OutputItemReasoning {
  content?: Array<ReasoningTextContent>;
  encryptedContent?: string;
  id: string;
  status?: InlineTypeUnion3;
  summary: Array<ReasoningSummaryText>;
  type: string;
}

export type OutputItemUnion = OutputMessage | OutputItemReasoning | OutputItemFunctionCall | OutputItemWebSearchCall | OutputItemFileSearchCall | OutputItemImageGenerationCall;

export interface OutputItemWebSearchCall {
  id: string;
  status: WebSearchStatus;
  type: string;
}

export interface OutputMessage {
  content: Array<PartUnion>;
  id: string;
  role: string;
  status?: InlineTypeUnion3;
  type: string;
}

export enum OutputModality {
  TEXT = "text",
  IMAGE = "image",
  EMBEDDINGS = "embeddings",
}

export interface OutputTokensDetailsProperty {
  reasoningTokens: number;
}

export enum Parameter {
  TEMPERATURE = "temperature",
  TOP_P = "top_p",
  TOP_K = "top_k",
  MIN_P = "min_p",
  TOP_A = "top_a",
  FREQUENCY_PENALTY = "frequency_penalty",
  PRESENCE_PENALTY = "presence_penalty",
  REPETITION_PENALTY = "repetition_penalty",
  MAX_TOKENS = "max_tokens",
  LOGIT_BIAS = "logit_bias",
  LOGPROBS = "logprobs",
  TOP_LOGPROBS = "top_logprobs",
  SEED = "seed",
  RESPONSE_FORMAT = "response_format",
  STRUCTURED_OUTPUTS = "structured_outputs",
  STOP = "stop",
  TOOLS = "tools",
  TOOL_CHOICE = "tool_choice",
  PARALLEL_TOOL_CALLS = "parallel_tool_calls",
  INCLUDE_REASONING = "include_reasoning",
  REASONING = "reasoning",
  WEB_SEARCH_OPTIONS = "web_search_options",
  VERBOSITY = "verbosity",
}

export type PartUnion = ResponseOutputText | OpenAiResponsesRefusalContent;

/**
 * Payload Too Large - Request payload exceeds size limits
 */
export interface PayloadTooLargeResponse {
  /**
   * Error data for PayloadTooLargeResponse
   */
  error: PayloadTooLargeResponseErrorData;
  userId?: string;
}

/**
 * Error data for PayloadTooLargeResponse
 */
export interface PayloadTooLargeResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

/**
 * Payment Required - Insufficient credits or quota to complete request
 */
export interface PaymentRequiredResponse {
  /**
   * Error data for PaymentRequiredResponse
   */
  error: PaymentRequiredResponseErrorData;
  userId?: string;
}

/**
 * Error data for PaymentRequiredResponse
 */
export interface PaymentRequiredResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

/**
 * Per-request token limits
 */
export interface PerRequestLimits {
  /**
   * Maximum completion tokens per request
   */
  completionTokens: number;
  /**
   * Maximum prompt tokens per request
   */
  promptTokens: number;
}

export type PluginsItemUnion = PluginsItemUnionObject | PluginsItemUnionObject2 | PluginsItemUnionObject3;

export interface PluginsItemUnionObject {
  id: string;
}

export interface PluginsItemUnionObject2 {
  engine?: string;
  id: string;
  maxResults?: number;
  searchPrompt?: string;
}

export interface PluginsItemUnionObject3 {
  id: string;
  maxFiles?: number;
  pdf?: PluginsItemUnionObject3Pdf;
}

export interface PluginsItemUnionObject3Pdf {
  engine?: string;
}

export interface PricingProperty {
  /**
   * A value in string or number format that is a large number
   */
  audio?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  completion: BigNumberUnion;
  discount?: number;
  /**
   * A value in string or number format that is a large number
   */
  image?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  imageOutput?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  imageToken?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputAudioCache?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputCacheRead?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputCacheWrite?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  internalReasoning?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  prompt: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  request?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  webSearch?: BigNumberUnion;
}

export type PromptTokensDetailsUnion = PromptTokensDetailsUnionObject | any | null;

export interface PromptTokensDetailsUnionObject {
  audioTokens?: number;
  cachedTokens?: number;
  videoTokens?: number;
}

export type PromptUnion = string | Array<string> | Array<number> | Array<Array<number>>;

export enum ProviderName {
  AI21 = "AI21",
  AION_LABS = "AionLabs",
  ALIBABA = "Alibaba",
  AMAZON_BEDROCK = "Amazon Bedrock",
  ANTHROPIC = "Anthropic",
  ARCEE = "Arcee",
  ATLAS_CLOUD = "AtlasCloud",
  AVIAN = "Avian",
  AZURE = "Azure",
  BASE_TEN = "BaseTen",
  BLACK_FOREST_LABS = "Black Forest Labs",
  CEREBRAS = "Cerebras",
  CHUTES = "Chutes",
  CIRRASCALE = "Cirrascale",
  CLARIFAI = "Clarifai",
  CLOUDFLARE = "Cloudflare",
  COHERE = "Cohere",
  CRUSOE = "Crusoe",
  DEEP_INFRA = "DeepInfra",
  DEEP_SEEK = "DeepSeek",
  FEATHERLESS = "Featherless",
  FIREWORKS = "Fireworks",
  FRIENDLI = "Friendli",
  GMI_CLOUD = "GMICloud",
  GOOGLE = "Google",
  GOOGLE_AI_STUDIO = "Google AI Studio",
  GROQ = "Groq",
  HYPERBOLIC = "Hyperbolic",
  INCEPTION = "Inception",
  INFERENCE_NET = "InferenceNet",
  INFERMATIC = "Infermatic",
  INFLECTION = "Inflection",
  LIQUID = "Liquid",
  MANCER_2 = "Mancer 2",
  MINIMAX = "Minimax",
  MODEL_RUN = "ModelRun",
  MISTRAL = "Mistral",
  MODULAR = "Modular",
  MOONSHOT_AI = "Moonshot AI",
  MORPH = "Morph",
  N_COMPASS = "NCompass",
  NEBIUS = "Nebius",
  NEXT_BIT = "NextBit",
  NOVITA = "Novita",
  NVIDIA = "Nvidia",
  OPEN_AI = "OpenAI",
  OPEN_INFERENCE = "OpenInference",
  PARASAIL = "Parasail",
  PERPLEXITY = "Perplexity",
  PHALA = "Phala",
  RELACE = "Relace",
  SAMBA_NOVA = "SambaNova",
  SILICON_FLOW = "SiliconFlow",
  STEALTH = "Stealth",
  SWITCHPOINT = "Switchpoint",
  TARGON = "Targon",
  TOGETHER = "Together",
  VENICE = "Venice",
  WAND_B = "WandB",
  X_AI = "xAI",
  Z_AI = "Z.AI",
  FAKE_PROVIDER = "FakeProvider",
}

/**
 * Provider Overloaded - Provider is temporarily overloaded
 */
export interface ProviderOverloadedResponse {
  /**
   * Error data for ProviderOverloadedResponse
   */
  error: ProviderOverloadedResponseErrorData;
  userId?: string;
}

/**
 * Error data for ProviderOverloadedResponse
 */
export interface ProviderOverloadedResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

/**
 * When multiple model providers are available, optionally indicate your routing preference.
 */
export interface ProviderProperty {
  /**
   * Whether to allow backup providers to serve requests
- true: (default) when the primary provider (or your custom providers in "order") is unavailable, use the next best provider.
- false: use only the primary/custom provider, and return the upstream error if it's unavailable.

   */
  allowFallbacks?: boolean;
  /**
   * Data collection setting. If no available model provider meets the requirement, your request will return an error.
- allow: (default) allow providers which store user data non-transiently and may train on it

- deny: use only providers which do not collect user data.
   */
  dataCollection?: DataCollection;
  /**
   * Whether to restrict routing to only models that allow text distillation. When true, only models where the author has allowed distillation will be used.
   */
  enforceDistillableText?: boolean;
  /**
   * List of provider slugs to ignore. If provided, this list is merged with your account-wide ignored provider settings for this request.
   */
  ignore?: Array<IgnoreItemOrRef>;
  /**
   * The object specifying the maximum price you want to pay for this request. USD price per million tokens, for prompt and completion.
   */
  maxPrice?: MaxPriceProperty;
  /**
   * List of provider slugs to allow. If provided, this list is merged with your account-wide allowed provider settings for this request.
   */
  only?: Array<IgnoreItemOrRef>;
  /**
   * An ordered list of provider slugs. The router will attempt to use the first provider in the subset of this list that supports your requested model, and fall back to the next if it is unavailable. If no providers are available, the request will fail with an error message.
   */
  order?: Array<IgnoreItemOrRef>;
  /**
   * A list of quantization levels to filter the provider by.
   */
  quantizations?: Array<Quantization>;
  /**
   * Whether to filter providers to only those that support the parameters you've provided. If this setting is omitted or set to false, then providers will receive only the parameters they support, and ignore the rest.
   */
  requireParameters?: boolean;
  /**
   * The sorting strategy to use for this request, if "order" is not specified. When set, no load balancing is performed.
   */
  sort?: ProviderSort;
  /**
   * Whether to restrict routing to only ZDR (Zero Data Retention) endpoints. When true, only endpoints that do not retain prompts will be used.
   */
  zdr?: boolean;
}

export enum ProviderSort {
  PRICE = "price",
  THROUGHPUT = "throughput",
  LATENCY = "latency",
}

/**
 * Information about a specific model endpoint
 */
export interface PublicEndpoint {
  contextLength: number;
  maxCompletionTokens: number;
  maxPromptTokens: number;
  modelName: string;
  name: string;
  pricing: PricingProperty;
  providerName: ProviderName;
  quantization: QuantizationUnion;
  status?: EndpointStatus;
  supportedParameters: Array<Parameter>;
  supportsImplicitCaching: boolean;
  tag: string;
  uptimeLast30m: number;
}

/**
 * Pricing information for the model
 */
export interface PublicPricing {
  /**
   * A value in string or number format that is a large number
   */
  audio?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  completion: BigNumberUnion;
  discount?: number;
  /**
   * A value in string or number format that is a large number
   */
  image?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  imageOutput?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  imageToken?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputAudioCache?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputCacheRead?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  inputCacheWrite?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  internalReasoning?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  prompt: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  request?: BigNumberUnion;
  /**
   * A value in string or number format that is a large number
   */
  webSearch?: BigNumberUnion;
}

export enum Quantization {
  INT4 = "int4",
  INT8 = "int8",
  FP4 = "fp4",
  FP6 = "fp6",
  FP8 = "fp8",
  FP16 = "fp16",
  BF16 = "bf16",
  FP32 = "fp32",
  UNKNOWN = "unknown",
}

export interface QuantizationUnion {
}

export interface ReasoningProperty {
  effort?: EffortUnion;
  summary?: SummaryUnion;
}

export interface ReasoningSummaryText {
  text: string;
  type: string;
}

export enum ReasoningSummaryVerbosity {
  AUTO = "auto",
  CONCISE = "concise",
  DETAILED = "detailed",
}

export interface ReasoningTextContent {
  text: string;
  type: string;
}

export type ReasoningUnion = string | any | null;

/**
 * Request Timeout - Operation exceeded time limit
 */
export interface RequestTimeoutResponse {
  /**
   * Error data for RequestTimeoutResponse
   */
  error: RequestTimeoutResponseErrorData;
  userId?: string;
}

/**
 * Error data for RequestTimeoutResponse
 */
export interface RequestTimeoutResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export interface ResponseFormatJsonSchema {
  jsonSchema: JsonSchemaConfig;
  type: "json_schema";
}

export type ResponseFormatTextConfig = ResponsesFormatText | ResponsesFormatJsonObject | ResponsesFormatTextJsonSchemaConfig;

export interface ResponseFormatTextGrammar {
  grammar: string;
  type: "grammar";
}

export type ResponseFormatUnion = ResponseFormatUnionObject | ResponseFormatUnionObject2 | ResponseFormatJsonSchema | ResponseFormatTextGrammar | ResponseFormatUnionObject3;

export type ResponseFormatUnion2 = ResponseFormatUnion | any | null;

export interface ResponseFormatUnionObject {
  type: "text";
}

export interface ResponseFormatUnionObject2 {
  type: "json_object";
}

export interface ResponseFormatUnionObject3 {
  type: "python";
}

/**
 * Audio input content item
 */
export interface ResponseInputAudio {
  inputAudio: InputAudioProperty;
  type: string;
}

/**
 * File input content item
 */
export interface ResponseInputFile {
  fileData?: string;
  fileId?: string;
  fileUrl?: string;
  filename?: string;
  type: string;
}

/**
 * Image input content item
 */
export interface ResponseInputImage {
  detail: string;
  imageUrl?: string;
  type: string;
}

/**
 * Text input content item
 */
export interface ResponseInputText {
  text: string;
  type: string;
}

export interface ResponseOutputText {
  annotations?: Array<OpenAiResponsesAnnotation>;
  text: string;
  type: string;
}

/**
 * Text output configuration including format and verbosity
 */
export interface ResponseTextConfig {
  /**
   * Text response format configuration
   */
  format?: ResponseFormatTextConfig;
  verbosity?: string;
}

/**
 * Error information returned from the API
 */
export interface ResponsesErrorField {
  code: string;
  message: string;
}

/**
 * JSON object response format
 */
export interface ResponsesFormatJsonObject {
  type: string;
}

/**
 * Plain text response format
 */
export interface ResponsesFormatText {
  type: string;
}

/**
 * JSON schema constrained response format
 */
export interface ResponsesFormatTextJsonSchemaConfig {
  description?: string;
  name: string;
  schema: MetadataProperty;
  strict?: boolean;
  type: string;
}

export interface ResponsesImageGenerationCall {
  id: string;
  result?: string;
  status: ImageGenerationStatus;
  type: string;
}

export type ResponsesOutputItem = ResponsesOutputMessage | ResponsesOutputItemReasoning | ResponsesOutputItemFunctionCall | ResponsesWebSearchCallOutput | ResponsesOutputItemFileSearchCall | ResponsesImageGenerationCall;

export interface ResponsesOutputItemFileSearchCall {
  id: string;
  queries: Array<string>;
  status: WebSearchStatus;
  type: string;
}

export interface ResponsesOutputItemFunctionCall {
  arguments: string;
  callId: string;
  id?: string;
  name: string;
  status?: InlineTypeUnion3;
  type: string;
}

/**
 * An output item containing reasoning
 */
export interface ResponsesOutputItemReasoning {
  content?: Array<ReasoningTextContent>;
  encryptedContent?: string;
  id: string;
  status?: InlineTypeUnion3;
  summary: Array<ReasoningSummaryText>;
  type: string;
}

/**
 * An output message item
 */
export interface ResponsesOutputMessage {
  content: Array<PartUnion>;
  id: string;
  role: string;
  status?: InlineTypeUnion3;
  type: string;
}

export enum ResponsesSearchContextSize {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface ResponsesWebSearchCallOutput {
  id: string;
  status: WebSearchStatus;
  type: string;
}

/**
 * User location information for web search
 */
export interface ResponsesWebSearchUserLocation {
  city?: string;
  country?: string;
  region?: string;
  timezone?: string;
  type?: string;
}

export type SeedUnion = number | any | null;

export interface ServiceTierUnion {
}

/**
 * Service Unavailable - Service temporarily unavailable
 */
export interface ServiceUnavailableResponse {
  /**
   * Error data for ServiceUnavailableResponse
   */
  error: ServiceUnavailableResponseErrorData;
  userId?: string;
}

/**
 * Error data for ServiceUnavailableResponse
 */
export interface ServiceUnavailableResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export type StopUnion = StopUnionUnion | any | null;

export type StopUnion2 = StopUnion2Union | any | null;

export type StopUnion2Union = string | Array<string>;

export type StopUnionUnion = string | Array<string>;

export type StreamOptionsUnion = ChatStreamOptions | any | null;

export type StreamOptionsUnion2 = StreamOptionsUnion2Object | any | null;

export interface StreamOptionsUnion2Object {
  includeUsage?: LogprobsUnion;
}

export type SummaryUnion = ReasoningSummaryVerbosity | any | null;

export interface SystemMessage {
  content: InlineTypeObject3Content;
  name?: string;
  role: "system";
}

export type TemperatureUnion = number | any | null;

/**
 * Too Many Requests - Rate limit exceeded
 */
export interface TooManyRequestsResponse {
  /**
   * Error data for TooManyRequestsResponse
   */
  error: TooManyRequestsResponseErrorData;
  userId?: string;
}

/**
 * Error data for TooManyRequestsResponse
 */
export interface TooManyRequestsResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export enum ToolCallStatus {
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  INCOMPLETE = "incomplete",
}

export type ToolChoiceOption = string | string | string | NamedToolChoice;

export interface ToolDefinitionJson {
  function: FunctionProperty4;
  type: "function";
}

export interface ToolResponseMessage {
  content: ContentUnionUnion;
  role: "tool";
  toolCallId: string;
}

export type ToolsItemUnion = ToolsItemUnionUnion | OpenResponsesWebSearchPreviewTool | OpenResponsesWebSearchPreview20250311Tool | OpenResponsesWebSearchTool | OpenResponsesWebSearch20250826Tool;

/**
 * Function tool definition
 */
export interface ToolsItemUnionUnion {
  description?: string;
  name: string;
  parameters: MetadataProperty;
  strict?: boolean;
  type: string;
}

export interface TopLogprobsItem {
  bytes: BytesUnion;
  logprob: number;
  token: string;
}

export type TopLogprobsUnion = number | any | null;

export type TopLogprobsUnion2 = Array<LogitBiasUnionObject> | any | null;

export type TopPUnion = number | any | null;

/**
 * Information about the top provider for this model
 */
export interface TopProviderInfo {
  /**
   * Context length from the top provider
   */
  contextLength?: number;
  /**
   * Whether the top provider moderates content
   */
  isModerated: boolean;
  /**
   * Maximum completion tokens from the top provider
   */
  maxCompletionTokens?: number;
}

export interface TruncationUnion {
}

export interface UrlCitation {
  endIndex: number;
  startIndex: number;
  title: string;
  type: string;
  url: string;
}

/**
 * Unauthorized - Authentication required or invalid credentials
 */
export interface UnauthorizedResponse {
  /**
   * Error data for UnauthorizedResponse
   */
  error: UnauthorizedResponseErrorData;
  userId?: string;
}

/**
 * Error data for UnauthorizedResponse
 */
export interface UnauthorizedResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

/**
 * Unprocessable Entity - Semantic validation failure
 */
export interface UnprocessableEntityResponse {
  /**
   * Error data for UnprocessableEntityResponse
   */
  error: UnprocessableEntityResponseErrorData;
  userId?: string;
}

/**
 * Error data for UnprocessableEntityResponse
 */
export interface UnprocessableEntityResponseErrorData {
  code: number;
  message: string;
  metadata?: MetadataProperty;
}

export interface UpdateKeysRequest {
  /**
   * Whether to disable the API key
   */
  disabled?: boolean;
  /**
   * Whether to include BYOK usage in the limit
   */
  includeByokInLimit?: boolean;
  /**
   * New spending limit for the API key in USD
   */
  limit?: number;
  /**
   * New limit reset type for the API key (daily, weekly, monthly, or null for no reset). Resets happen automatically at midnight UTC, and weeks are Monday through Sunday.
   */
  limitReset?: string;
  /**
   * New name for the API key
   */
  name?: string;
}

export interface UpdateKeysResponse {
  /**
   * The updated API key information
   */
  data: UpdateKeysResponseData;
}

/**
 * The updated API key information
 */
export interface UpdateKeysResponseData {
  /**
   * Total external BYOK usage (in USD) for the API key
   */
  byokUsage: number;
  /**
   * External BYOK usage (in USD) for the current UTC day
   */
  byokUsageDaily: number;
  /**
   * External BYOK usage (in USD) for current UTC month
   */
  byokUsageMonthly: number;
  /**
   * External BYOK usage (in USD) for the current UTC week (Monday-Sunday)
   */
  byokUsageWeekly: number;
  /**
   * ISO 8601 timestamp of when the API key was created
   */
  createdAt: string;
  /**
   * Whether the API key is disabled
   */
  disabled: boolean;
  /**
   * ISO 8601 UTC timestamp when the API key expires, or null if no expiration
   */
  expiresAt?: string;
  /**
   * Unique hash identifier for the API key
   */
  hash: string;
  /**
   * Whether to include external BYOK usage in the credit limit
   */
  includeByokInLimit: boolean;
  /**
   * Human-readable label for the API key
   */
  label: string;
  /**
   * Spending limit for the API key in USD
   */
  limit: number;
  /**
   * Remaining spending limit in USD
   */
  limitRemaining: number;
  /**
   * Type of limit reset for the API key
   */
  limitReset: string;
  /**
   * Name of the API key
   */
  name: string;
  /**
   * ISO 8601 timestamp of when the API key was last updated
   */
  updatedAt: string;
  /**
   * Total OpenRouter credit usage (in USD) for the API key
   */
  usage: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC day
   */
  usageDaily: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC month
   */
  usageMonthly: number;
  /**
   * OpenRouter credit usage (in USD) for the current UTC week (Monday-Sunday)
   */
  usageWeekly: number;
}

export interface UserMessage {
  content: ContentUnionUnion;
  name?: string;
  role: "user";
}

export interface VariablesProperty {
}

export interface WebSearchPreviewToolUserLocation {
  city?: string;
  country?: string;
  region?: string;
  timezone?: string;
  type: string;
}

export enum WebSearchStatus {
  COMPLETED = "completed",
  SEARCHING = "searching",
  IN_PROGRESS = "in_progress",
  FAILED = "failed",
}

export type Schema0 = ChatCompletionFinishReason | any | null;