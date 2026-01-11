import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OutputItemUnion } from './OutputItemUnion';
import { OutputItemUnionSchema } from './OutputItemUnion';
/**
 * Event emitted when a new output item is added to the response
 */
export interface OpenResponsesOutputItemAddedEvent {
  item: OutputItemUnion;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesOutputItemAddedEventSchema: TypedSchema<OpenResponsesOutputItemAddedEvent> = typed<OpenResponsesOutputItemAddedEvent>(object({
  item: OutputItemUnionSchema,
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));