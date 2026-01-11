import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { InlineTypeObject6 } from './InlineTypeObject6';
import { InlineTypeObject6Schema } from './InlineTypeObject6';
import type { InputTokensDetailsProperty } from './InputTokensDetailsProperty';
import { InputTokensDetailsPropertySchema } from './InputTokensDetailsProperty';
import type { OutputTokensDetailsProperty } from './OutputTokensDetailsProperty';
import { OutputTokensDetailsPropertySchema } from './OutputTokensDetailsProperty';
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

export const OpenResponsesUsageSchema: TypedSchema<OpenResponsesUsage> = typed<OpenResponsesUsage>(object({
  cost: optional(number()),
  get costDetails() { return optional(InlineTypeObject6Schema) },
  inputTokens: number(),
  inputTokensDetails: InputTokensDetailsPropertySchema,
  isByok: optional(boolean()),
  outputTokens: number(),
  outputTokensDetails: OutputTokensDetailsPropertySchema,
  totalTokens: number(),
}));