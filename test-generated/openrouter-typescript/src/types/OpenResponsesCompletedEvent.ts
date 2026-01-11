import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesNonStreamingResponse } from './OpenAiResponsesNonStreamingResponse';
import { OpenAiResponsesNonStreamingResponseSchema } from './OpenAiResponsesNonStreamingResponse';
/**
 * Event emitted when a response has completed successfully
 */
export interface OpenResponsesCompletedEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesCompletedEventSchema: TypedSchema<OpenResponsesCompletedEvent> = typed<OpenResponsesCompletedEvent>(object({
  response: OpenAiResponsesNonStreamingResponseSchema,
  sequenceNumber: number(),
  type: string(),
}));