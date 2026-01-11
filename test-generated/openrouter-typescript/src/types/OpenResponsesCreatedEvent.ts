import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesNonStreamingResponse } from './OpenAiResponsesNonStreamingResponse';
import { OpenAiResponsesNonStreamingResponseSchema } from './OpenAiResponsesNonStreamingResponse';
/**
 * Event emitted when a response is created
 */
export interface OpenResponsesCreatedEvent {
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesCreatedEventSchema: TypedSchema<OpenResponsesCreatedEvent> = typed<OpenResponsesCreatedEvent>(object({
  response: OpenAiResponsesNonStreamingResponseSchema,
  sequenceNumber: number(),
  type: string(),
}));