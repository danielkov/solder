import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning summary text delta is streamed
 */
export interface OpenAiResponsesReasoningSummaryTextDeltaEvent {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

export const OpenAiResponsesReasoningSummaryTextDeltaEventSchema: TypedSchema<OpenAiResponsesReasoningSummaryTextDeltaEvent> = typed<OpenAiResponsesReasoningSummaryTextDeltaEvent>(object({
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  summaryIndex: number(),
  type: string(),
}));