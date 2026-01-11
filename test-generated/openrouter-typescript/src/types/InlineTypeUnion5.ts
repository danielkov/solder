import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { OutputItemUnion } from './OutputItemUnion';
import { OutputItemUnionSchema } from './OutputItemUnion';
/**
 * Event emitted when a new output item is added to the response
 */
export interface InlineTypeUnion5 {
  /**
   * An output item from the response
   */
  item: OutputItemUnion;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion5Schema: TypedSchema<InlineTypeUnion5> = typed<InlineTypeUnion5>(object({
  item: OutputItemUnionSchema,
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));