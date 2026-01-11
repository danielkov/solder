import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenResponsesLogProbs } from './OpenResponsesLogProbs';
import { OpenResponsesLogProbsSchema } from './OpenResponsesLogProbs';
/**
 * Event emitted when text streaming is complete
 */
export interface InlineTypeUnion8 {
  contentIndex: number;
  itemId: string;
  logprobs: Array<OpenResponsesLogProbs>;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

export const InlineTypeUnion8Schema: TypedSchema<InlineTypeUnion8> = typed<InlineTypeUnion8>(object({
  contentIndex: number(),
  itemId: string(),
  logprobs: array(OpenResponsesLogProbsSchema),
  outputIndex: number(),
  sequenceNumber: number(),
  text: string(),
  type: string(),
}));