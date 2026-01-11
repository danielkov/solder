import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';
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

export const GetGenerationResponseDataSchema: TypedSchema<GetGenerationResponseData> = typed<GetGenerationResponseData>(object({
  apiType: string(),
  appId: number(),
  cacheDiscount: number(),
  cancelled: boolean(),
  createdAt: string(),
  externalUser: string(),
  finishReason: string(),
  generationTime: number(),
  id: string(),
  isByok: boolean(),
  latency: number(),
  model: string(),
  moderationLatency: number(),
  nativeFinishReason: string(),
  nativeTokensCached: number(),
  nativeTokensCompletion: number(),
  nativeTokensCompletionImages: number(),
  nativeTokensPrompt: number(),
  nativeTokensReasoning: number(),
  numInputAudioPrompt: number(),
  numMediaCompletion: number(),
  numMediaPrompt: number(),
  numSearchResults: number(),
  origin: string(),
  providerName: string(),
  streamed: boolean(),
  tokensCompletion: number(),
  tokensPrompt: number(),
  totalCost: number(),
  upstreamId: string(),
  upstreamInferenceCost: number(),
  usage: number(),
}));