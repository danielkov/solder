import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';

import type { InputTokensDetailsProperty } from './InputTokensDetailsProperty';
import { InputTokensDetailsPropertySchema } from './InputTokensDetailsProperty';
import type { OutputTokensDetailsProperty } from './OutputTokensDetailsProperty';
import { OutputTokensDetailsPropertySchema } from './OutputTokensDetailsProperty';
export interface OpenAiResponsesUsage {
  inputTokens: number;
  inputTokensDetails: InputTokensDetailsProperty;
  outputTokens: number;
  outputTokensDetails: OutputTokensDetailsProperty;
  totalTokens: number;
}

export const OpenAiResponsesUsageSchema: TypedSchema<OpenAiResponsesUsage> = typed<OpenAiResponsesUsage>(object({
  inputTokens: number(),
  inputTokensDetails: InputTokensDetailsPropertySchema,
  outputTokens: number(),
  outputTokensDetails: OutputTokensDetailsPropertySchema,
  totalTokens: number(),
}));