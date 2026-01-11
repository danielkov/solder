import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when an error occurs during streaming
 */
export interface OpenAiResponsesErrorEvent {
  code: string;
  message: string;
  param: string;
  sequenceNumber: number;
  type: string;
}

export const OpenAiResponsesErrorEventSchema: TypedSchema<OpenAiResponsesErrorEvent> = typed<OpenAiResponsesErrorEvent>(object({
  code: string(),
  message: string(),
  param: string(),
  sequenceNumber: number(),
  type: string(),
}));