import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesNonStreamingResponse } from './OpenAiResponsesNonStreamingResponse';
import { OpenAiResponsesNonStreamingResponseSchema } from './OpenAiResponsesNonStreamingResponse';
/**
 * Event emitted when a response is in progress
 */
export interface OpenResponsesInProgressEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesInProgressEventSchema: TypedSchema<OpenResponsesInProgressEvent> = typed<OpenResponsesInProgressEvent>(object({
  response: OpenAiResponsesNonStreamingResponseSchema,
  sequenceNumber: number(),
  type: string(),
}));