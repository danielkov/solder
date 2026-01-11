import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning summary text streaming is complete
 */
export interface OpenResponsesReasoningSummaryTextDoneEvent {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  text: string;
  type: string;
}

export const OpenResponsesReasoningSummaryTextDoneEventSchema: TypedSchema<OpenResponsesReasoningSummaryTextDoneEvent> = typed<OpenResponsesReasoningSummaryTextDoneEvent>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  summaryIndex: number(),
  text: string(),
  type: string(),
}));