import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when function call arguments streaming is complete
 */
export interface OpenResponsesFunctionCallArgumentsDoneEvent {
  arguments: string;
  itemId: string;
  name: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesFunctionCallArgumentsDoneEventSchema: TypedSchema<OpenResponsesFunctionCallArgumentsDoneEvent> = typed<OpenResponsesFunctionCallArgumentsDoneEvent>(object({
  arguments: string(),
  itemId: string(),
  name: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));