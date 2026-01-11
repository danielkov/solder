import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when a refusal delta is streamed
 */
export interface OpenResponsesRefusalDeltaEvent {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesRefusalDeltaEventSchema: TypedSchema<OpenResponsesRefusalDeltaEvent> = typed<OpenResponsesRefusalDeltaEvent>(object({
  contentIndex: number(),
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));