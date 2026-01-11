import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when an error occurs during streaming
 */
export interface OpenResponsesErrorEvent {
  code: string;
  message: string;
  param: string;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesErrorEventSchema: TypedSchema<OpenResponsesErrorEvent> = typed<OpenResponsesErrorEvent>(object({
  code: string(),
  message: string(),
  param: string(),
  sequenceNumber: number(),
  type: string(),
}));