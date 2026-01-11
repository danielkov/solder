import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesReasoningEffort } from './OpenAiResponsesReasoningEffort';
import { OpenAiResponsesReasoningEffortSchema } from './OpenAiResponsesReasoningEffort';
import type { ReasoningSummaryVerbosity } from './ReasoningSummaryVerbosity';
import { ReasoningSummaryVerbositySchema } from './ReasoningSummaryVerbosity';
/**
 * Configuration for reasoning mode in the response
 */
export interface OpenResponsesReasoningConfig {
  effort?: OpenAiResponsesReasoningEffort;
  enabled?: boolean;
  maxTokens?: number;
  summary?: ReasoningSummaryVerbosity;
}

export const OpenResponsesReasoningConfigSchema: TypedSchema<OpenResponsesReasoningConfig> = typed<OpenResponsesReasoningConfig>(object({
  get effort() { return optional(OpenAiResponsesReasoningEffortSchema) },
  enabled: optional(boolean()),
  maxTokens: optional(number()),
  get summary() { return optional(ReasoningSummaryVerbositySchema) },
}));