import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when refusal streaming is complete
 */
export interface OpenResponsesRefusalDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  refusal: string;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesRefusalDoneEventSchema: TypedSchema<OpenResponsesRefusalDoneEvent> = typed<OpenResponsesRefusalDoneEvent>(object({
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  refusal: string(),
  sequenceNumber: number(),
  type: string(),
}));