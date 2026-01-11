import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning text delta is streamed
 */
export interface OpenResponsesReasoningDeltaEvent {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesReasoningDeltaEventSchema: TypedSchema<OpenResponsesReasoningDeltaEvent> = typed<OpenResponsesReasoningDeltaEvent>(object({
  contentIndex: number(),
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));