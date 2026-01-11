import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning text streaming is complete
 */
export interface OpenResponsesReasoningDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

export const OpenResponsesReasoningDoneEventSchema: TypedSchema<OpenResponsesReasoningDoneEvent> = typed<OpenResponsesReasoningDoneEvent>(object({
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  text: string(),
  type: string(),
}));