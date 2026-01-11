import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning text delta is streamed
 */
export interface OpenAiResponsesReasoningDeltaEvent {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenAiResponsesReasoningDeltaEventSchema: TypedSchema<OpenAiResponsesReasoningDeltaEvent> = typed<OpenAiResponsesReasoningDeltaEvent>(object({
  contentIndex: number(),
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));