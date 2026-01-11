import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { ReasoningSummaryText } from './ReasoningSummaryText';
import { ReasoningSummaryTextSchema } from './ReasoningSummaryText';
/**
 * Event emitted when a reasoning summary part is added
 */
export interface OpenResponsesReasoningSummaryPartAddedEvent {
  itemId: string;
  outputIndex: number;
  part: ReasoningSummaryText;
  sequenceNumber: number;
  summaryIndex: number;
  type: string;
}

export const OpenResponsesReasoningSummaryPartAddedEventSchema: TypedSchema<OpenResponsesReasoningSummaryPartAddedEvent> = typed<OpenResponsesReasoningSummaryPartAddedEvent>(object({
  itemId: string(),
  outputIndex: number(),
  part: ReasoningSummaryTextSchema,
  sequenceNumber: number(),
  summaryIndex: number(),
  type: string(),
}));