import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnion3 } from './InlineTypeUnion3';
import { InlineTypeUnion3Schema } from './InlineTypeUnion3';
import type { ReasoningSummaryText } from './ReasoningSummaryText';
import { ReasoningSummaryTextSchema } from './ReasoningSummaryText';
import type { ReasoningTextContent } from './ReasoningTextContent';
import { ReasoningTextContentSchema } from './ReasoningTextContent';
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

export const OpenResponsesReasoningSchema: TypedSchema<OpenResponsesReasoning> = typed<OpenResponsesReasoning>(object({
  get content() { return optional(array(ReasoningTextContentSchema)) },
  encryptedContent: optional(string()),
  format: optional(string()),
  id: string(),
  signature: optional(string()),
  get status() { return optional(InlineTypeUnion3Schema) },
  summary: array(ReasoningSummaryTextSchema),
  type: string(),
}));