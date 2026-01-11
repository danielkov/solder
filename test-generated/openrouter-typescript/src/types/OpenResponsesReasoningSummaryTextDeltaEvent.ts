import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning summary text delta is streamed
 */
export interface OpenResponsesReasoningSummaryTextDeltaEvent {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

export const OpenResponsesReasoningSummaryTextDeltaEventSchema: TypedSchema<OpenResponsesReasoningSummaryTextDeltaEvent> = typed<OpenResponsesReasoningSummaryTextDeltaEvent>(object({
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  summaryIndex: number(),
  type: string(),
}));