import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesIncludable } from './OpenAiResponsesIncludable';
import { OpenAiResponsesIncludableSchema } from './OpenAiResponsesIncludable';
import type { OpenAiResponsesPrompt } from './OpenAiResponsesPrompt';
import { OpenAiResponsesPromptSchema } from './OpenAiResponsesPrompt';
import type { OpenAiResponsesToolChoice } from './OpenAiResponsesToolChoice';
import { OpenAiResponsesToolChoiceSchema } from './OpenAiResponsesToolChoice';
import type { OpenResponsesInput } from './OpenResponsesInput';
import { OpenResponsesInputSchema } from './OpenResponsesInput';
import type { OpenResponsesReasoningConfig } from './OpenResponsesReasoningConfig';
import { OpenResponsesReasoningConfigSchema } from './OpenResponsesReasoningConfig';
import type { OpenResponsesRequestMetadata } from './OpenResponsesRequestMetadata';
import { OpenResponsesRequestMetadataSchema } from './OpenResponsesRequestMetadata';
import type { OpenResponsesResponseText } from './OpenResponsesResponseText';
import { OpenResponsesResponseTextSchema } from './OpenResponsesResponseText';
import type { PluginsItemUnion } from './PluginsItemUnion';
import { PluginsItemUnionSchema } from './PluginsItemUnion';
import type { ProviderProperty } from './ProviderProperty';
import { ProviderPropertySchema } from './ProviderProperty';
import type { ServiceTierUnion } from './ServiceTierUnion';
import { ServiceTierUnionSchema } from './ServiceTierUnion';
import type { ToolsItemUnion } from './ToolsItemUnion';
import { ToolsItemUnionSchema } from './ToolsItemUnion';
import type { TruncationUnion } from './TruncationUnion';
import { TruncationUnionSchema } from './TruncationUnion';
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

export const OpenResponsesRequestSchema: TypedSchema<OpenResponsesRequest> = typed<OpenResponsesRequest>(object({
  background: optional(boolean()),
  get include() { return optional(array(OpenAiResponsesIncludableSchema)) },
  get input() { return optional(OpenResponsesInputSchema) },
  instructions: optional(string()),
  maxOutputTokens: optional(number()),
  get metadata() { return optional(OpenResponsesRequestMetadataSchema) },
  model: optional(string()),
  models: optional(array(string())),
  parallelToolCalls: optional(boolean()),
  get plugins() { return optional(array(PluginsItemUnionSchema)) },
  previousResponseId: optional(string()),
  get prompt() { return optional(OpenAiResponsesPromptSchema) },
  promptCacheKey: optional(string()),
  get provider() { return optional(ProviderPropertySchema) },
  get reasoning() { return optional(OpenResponsesReasoningConfigSchema) },
  safetyIdentifier: optional(string()),
  get serviceTier() { return optional(ServiceTierUnionSchema) },
  store: optional(boolean()),
  stream: optional(boolean()),
  temperature: optional(number()),
  get text() { return optional(OpenResponsesResponseTextSchema) },
  get toolChoice() { return optional(OpenAiResponsesToolChoiceSchema) },
  get tools() { return optional(array(ToolsItemUnionSchema)) },
  topK: optional(number()),
  topP: optional(number()),
  get truncation() { return optional(TruncationUnionSchema) },
  user: optional(string()),
}));