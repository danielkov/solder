import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { PartUnion } from './PartUnion';
import { PartUnionSchema } from './PartUnion';
/**
 * Event emitted when a content part is complete
 */
export interface OpenResponsesContentPartDoneEvent {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  part: PartUnion;
  sequenceNumber: number;
  type: string;
}

export const OpenResponsesContentPartDoneEventSchema: TypedSchema<OpenResponsesContentPartDoneEvent> = typed<OpenResponsesContentPartDoneEvent>(object({
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  part: PartUnionSchema,
  sequenceNumber: number(),
  type: string(),
}));