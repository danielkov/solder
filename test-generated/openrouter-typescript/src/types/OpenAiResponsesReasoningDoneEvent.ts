import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when reasoning text streaming is complete
 */
export interface OpenAiResponsesReasoningDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  text: string;
  type: string;
}

export const OpenAiResponsesReasoningDoneEventSchema: TypedSchema<OpenAiResponsesReasoningDoneEvent> = typed<OpenAiResponsesReasoningDoneEvent>(object({
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  text: string(),
  type: string(),
}));