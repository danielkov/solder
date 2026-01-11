import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesNonStreamingResponse } from './OpenAiResponsesNonStreamingResponse';
import { OpenAiResponsesNonStreamingResponseSchema } from './OpenAiResponsesNonStreamingResponse';
/**
 * Event emitted when a response is incomplete
 */
export interface OpenResponsesIncompleteEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesIncompleteEventSchema: TypedSchema<OpenResponsesIncompleteEvent> = typed<OpenResponsesIncompleteEvent>(object({
  response: OpenAiResponsesNonStreamingResponseSchema,
  sequenceNumber: number(),
  type: string(),
}));