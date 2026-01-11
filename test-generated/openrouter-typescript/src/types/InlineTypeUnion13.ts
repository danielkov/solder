import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when function call arguments streaming is complete
 */
export interface InlineTypeUnion13 {
  arguments: string;
  itemId: string;
  name: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion13Schema: TypedSchema<InlineTypeUnion13> = typed<InlineTypeUnion13>(object({
  arguments: string(),
  itemId: string(),
  name: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));