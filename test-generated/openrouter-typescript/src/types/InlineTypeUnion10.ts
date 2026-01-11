import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * Event emitted when refusal streaming is complete
 */
export interface InlineTypeUnion10 {
  contentIndex: number;
  itemId: string;
  outputIndex: number;
  refusal: string;
  sequenceNumber: number;
  type: string;
}

export const InlineTypeUnion10Schema: TypedSchema<InlineTypeUnion10> = typed<InlineTypeUnion10>(object({
  contentIndex: number(),
  itemId: string(),
  outputIndex: number(),
  refusal: string(),
  sequenceNumber: number(),
  type: string(),
}));