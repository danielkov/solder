import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OpenAiResponsesNonStreamingResponse } from './OpenAiResponsesNonStreamingResponse';
import { OpenAiResponsesNonStreamingResponseSchema } from './OpenAiResponsesNonStreamingResponse';
/**
 * Event emitted when a response is created
 */
export interface InlineTypeUnion4 {
  /**
   * Complete non-streaming response from the Responses API
   */
  response: OpenAiResponsesNonStreamingResponse;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion4Schema: TypedSchema<InlineTypeUnion4> = typed<InlineTypeUnion4>(object({
  response: OpenAiResponsesNonStreamingResponseSchema,
  sequenceNumber: number(),
  type: string(),
}));