import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when function call arguments are being streamed
 */
export interface OpenResponsesFunctionCallArgumentsDeltaEvent {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesFunctionCallArgumentsDeltaEventSchema: TypedSchema<OpenResponsesFunctionCallArgumentsDeltaEvent> = typed<OpenResponsesFunctionCallArgumentsDeltaEvent>(object({
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));