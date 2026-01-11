import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnion3 } from './InlineTypeUnion3';
import { InlineTypeUnion3Schema } from './InlineTypeUnion3';
import type { ReasoningSummaryText } from './ReasoningSummaryText';
import { ReasoningSummaryTextSchema } from './ReasoningSummaryText';
import type { ReasoningTextContent } from './ReasoningTextContent';
import { ReasoningTextContentSchema } from './ReasoningTextContent';
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

export const ResponsesOutputItemReasoningSchema: TypedSchema<ResponsesOutputItemReasoning> = typed<ResponsesOutputItemReasoning>(object({
  get content() { return optional(array(ReasoningTextContentSchema)) },
  encryptedContent: optional(string()),
  id: string(),
  get status() { return optional(InlineTypeUnion3Schema) },
  summary: array(ReasoningSummaryTextSchema),
  type: string(),
}));