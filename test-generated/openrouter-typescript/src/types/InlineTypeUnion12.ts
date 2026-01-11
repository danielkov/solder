import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when function call arguments are being streamed
 */
export interface InlineTypeUnion12 {
  delta: string;
  itemId: string;
  outputIndex: number;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion12Schema: TypedSchema<InlineTypeUnion12> = typed<InlineTypeUnion12>(object({
  delta: string(),
  itemId: string(),
  outputIndex: number(),
  sequenceNumber: number(),
  type: string(),
}));