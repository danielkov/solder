import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenResponsesLogProbs } from './OpenResponsesLogProbs';
import { OpenResponsesLogProbsSchema } from './OpenResponsesLogProbs';
/**
 * Event emitted when a text delta is streamed
 */
export interface InlineTypeUnion7 {
  contentIndex: number;
  delta: string;
  itemId: string;
  logprobs: Array<OpenResponsesLogProbs>;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion7Schema: TypedSchema<InlineTypeUnion7> = typed<InlineTypeUnion7>(object({
  contentIndex: number(),
  delta: string(),
  itemId: string(),
  logprobs: array(OpenResponsesLogProbsSchema),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));