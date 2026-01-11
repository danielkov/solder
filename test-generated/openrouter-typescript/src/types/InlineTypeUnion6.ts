import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { PartUnion } from './PartUnion';
import { PartUnionSchema } from './PartUnion';
/**
 * Event emitted when a new content part is added to an output item
 */
export interface InlineTypeUnion6 {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  part: PartUnion;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion6Schema: TypedSchema<InlineTypeUnion6> = typed<InlineTypeUnion6>(object({
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  part: PartUnionSchema,
  sequenceNumber: number(),
  type: string(),
}));