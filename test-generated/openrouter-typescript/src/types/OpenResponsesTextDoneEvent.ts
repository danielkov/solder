import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenResponsesLogProbs } from './OpenResponsesLogProbs';
import { OpenResponsesLogProbsSchema } from './OpenResponsesLogProbs';
/**
 * Event emitted when text streaming is complete
 */
export interface OpenResponsesTextDoneEvent {
  contentIndex: number;
  itemId: string;
  logprobs: Array<OpenResponsesLogProbs>;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

export const OpenResponsesTextDoneEventSchema: TypedSchema<OpenResponsesTextDoneEvent> = typed<OpenResponsesTextDoneEvent>(object({
  contentIndex: number(),
  itemId: string(),
  logprobs: array(OpenResponsesLogProbsSchema),
  outputIndex: number(),
  sequenceNumber: number(),
  text: string(),
  type: string(),
}));