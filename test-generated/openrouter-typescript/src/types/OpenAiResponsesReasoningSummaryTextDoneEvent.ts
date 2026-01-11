import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning summary text streaming is complete
 */
export interface OpenAiResponsesReasoningSummaryTextDoneEvent {
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  text: string;
  type: string;
}

export const OpenAiResponsesReasoningSummaryTextDoneEventSchema: TypedSchema<OpenAiResponsesReasoningSummaryTextDoneEvent> = typed<OpenAiResponsesReasoningSummaryTextDoneEvent>(object({
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  summaryIndex: number(),
  text: string(),
  type: string(),
}));