import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesReasoningEffort } from './OpenAiResponsesReasoningEffort';
import { OpenAiResponsesReasoningEffortSchema } from './OpenAiResponsesReasoningEffort';
import type { ReasoningSummaryVerbosity } from './ReasoningSummaryVerbosity';
import { ReasoningSummaryVerbositySchema } from './ReasoningSummaryVerbosity';
export interface OpenAiResponsesReasoningConfig {
  effort?: OpenAiResponsesReasoningEffort;
  summary?: ReasoningSummaryVerbosity;
}

export const OpenAiResponsesReasoningConfigSchema: TypedSchema<OpenAiResponsesReasoningConfig> = typed<OpenAiResponsesReasoningConfig>(object({
  get effort() { return optional(OpenAiResponsesReasoningEffortSchema) },
  get summary() { return optional(ReasoningSummaryVerbositySchema) },
}));