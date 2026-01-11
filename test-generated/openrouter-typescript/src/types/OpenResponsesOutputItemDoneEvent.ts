import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OutputItemUnion } from './OutputItemUnion';
import { OutputItemUnionSchema } from './OutputItemUnion';
/**
 * Event emitted when an output item is complete
 */
export interface OpenResponsesOutputItemDoneEvent {
  item: OutputItemUnion;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesOutputItemDoneEventSchema: TypedSchema<OpenResponsesOutputItemDoneEvent> = typed<OpenResponsesOutputItemDoneEvent>(object({
  item: OutputItemUnionSchema,
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));