import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesIncompleteDetails } from './OpenAiResponsesIncompleteDetails';
import { OpenAiResponsesIncompleteDetailsSchema } from './OpenAiResponsesIncompleteDetails';
import type { OpenAiResponsesInput } from './OpenAiResponsesInput';
import { OpenAiResponsesInputSchema } from './OpenAiResponsesInput';
import type { OpenAiResponsesPrompt } from './OpenAiResponsesPrompt';
import { OpenAiResponsesPromptSchema } from './OpenAiResponsesPrompt';
import type { OpenAiResponsesReasoningConfig } from './OpenAiResponsesReasoningConfig';
import { OpenAiResponsesReasoningConfigSchema } from './OpenAiResponsesReasoningConfig';
import type { OpenAiResponsesResponseStatus } from './OpenAiResponsesResponseStatus';
import { OpenAiResponsesResponseStatusSchema } from './OpenAiResponsesResponseStatus';
import type { OpenAiResponsesServiceTier } from './OpenAiResponsesServiceTier';
import { OpenAiResponsesServiceTierSchema } from './OpenAiResponsesServiceTier';
import type { OpenAiResponsesToolChoice } from './OpenAiResponsesToolChoice';
import { OpenAiResponsesToolChoiceSchema } from './OpenAiResponsesToolChoice';
import type { OpenAiResponsesTruncation } from './OpenAiResponsesTruncation';
import { OpenAiResponsesTruncationSchema } from './OpenAiResponsesTruncation';
import type { OpenAiResponsesUsage } from './OpenAiResponsesUsage';
import { OpenAiResponsesUsageSchema } from './OpenAiResponsesUsage';
import type { OpenResponsesRequestMetadata } from './OpenResponsesRequestMetadata';
import { OpenResponsesRequestMetadataSchema } from './OpenResponsesRequestMetadata';
import type { OutputItemUnion } from './OutputItemUnion';
import { OutputItemUnionSchema } from './OutputItemUnion';
import type { ResponseTextConfig } from './ResponseTextConfig';
import { ResponseTextConfigSchema } from './ResponseTextConfig';
import type { ResponsesErrorField } from './ResponsesErrorField';
import { ResponsesErrorFieldSchema } from './ResponsesErrorField';
import type { ToolsItemUnion } from './ToolsItemUnion';
import { ToolsItemUnionSchema } from './ToolsItemUnion';
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

export const OpenResponsesNonStreamingResponseSchema: TypedSchema<OpenResponsesNonStreamingResponse> = typed<OpenResponsesNonStreamingResponse>(object({
  background: optional(boolean()),
  createdAt: number(),
  error: ResponsesErrorFieldSchema,
  id: string(),
  incompleteDetails: OpenAiResponsesIncompleteDetailsSchema,
  instructions: OpenAiResponsesInputSchema,
  maxOutputTokens: optional(number()),
  maxToolCalls: optional(number()),
  metadata: OpenResponsesRequestMetadataSchema,
  model: string(),
  object: string(),
  output: array(OutputItemUnionSchema),
  outputText: optional(string()),
  parallelToolCalls: boolean(),
  previousResponseId: optional(string()),
  get prompt() { return optional(OpenAiResponsesPromptSchema) },
  promptCacheKey: optional(string()),
  get reasoning() { return optional(OpenAiResponsesReasoningConfigSchema) },
  safetyIdentifier: optional(string()),
  get serviceTier() { return optional(OpenAiResponsesServiceTierSchema) },
  get status() { return optional(OpenAiResponsesResponseStatusSchema) },
  store: optional(boolean()),
  temperature: number(),
  get text() { return optional(ResponseTextConfigSchema) },
  toolChoice: OpenAiResponsesToolChoiceSchema,
  tools: array(ToolsItemUnionSchema),
  topLogprobs: optional(number()),
  topP: number(),
  get truncation() { return optional(OpenAiResponsesTruncationSchema) },
  get usage() { return optional(OpenAiResponsesUsageSchema) },
  user: optional(string()),
}));