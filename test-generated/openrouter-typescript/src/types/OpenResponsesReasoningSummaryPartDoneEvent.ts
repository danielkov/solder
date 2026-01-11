import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { ReasoningSummaryText } from './ReasoningSummaryText';
import { ReasoningSummaryTextSchema } from './ReasoningSummaryText';
/**
 * Event emitted when a reasoning summary part is complete
 */
export interface OpenResponsesReasoningSummaryPartDoneEvent {
  itemId: string;
  outputIndex: number;
  part: ReasoningSummaryText;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

export const OpenResponsesReasoningSummaryPartDoneEventSchema: TypedSchema<OpenResponsesReasoningSummaryPartDoneEvent> = typed<OpenResponsesReasoningSummaryPartDoneEvent>(object({
  itemId: string(),
  outputIndex: number(),
  part: ReasoningSummaryTextSchema,
  sequenceNumber: number(),
  summaryIndex: number(),
  type: string(),
}));