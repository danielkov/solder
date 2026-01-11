import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when a refusal delta is streamed
 */
export interface InlineTypeUnion9 {
  contentIndex: number;
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion9Schema: TypedSchema<InlineTypeUnion9> = typed<InlineTypeUnion9>(object({
  contentIndex: number(),
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));