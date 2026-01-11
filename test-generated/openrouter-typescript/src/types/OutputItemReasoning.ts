import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnion3 } from './InlineTypeUnion3';
import { InlineTypeUnion3Schema } from './InlineTypeUnion3';
import type { ReasoningSummaryText } from './ReasoningSummaryText';
import { ReasoningSummaryTextSchema } from './ReasoningSummaryText';
import type { ReasoningTextContent } from './ReasoningTextContent';
import { ReasoningTextContentSchema } from './ReasoningTextContent';
export interface OutputItemReasoning {
  content?: Array<ReasoningTextContent>;
  encryptedContent?: string;
  id: string;
  status?: InlineTypeUnion3;
  summary: Array<ReasoningSummaryText>;
  type: string;
}

export const OutputItemReasoningSchema: TypedSchema<OutputItemReasoning> = typed<OutputItemReasoning>(object({
  get content() { return optional(array(ReasoningTextContentSchema)) },
  encryptedContent: optional(string()),
  id: string(),
  get status() { return optional(InlineTypeUnion3Schema) },
  summary: array(ReasoningSummaryTextSchema),
  type: string(),
}));