import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { BytesUnion } from './BytesUnion';
import { BytesUnionSchema } from './BytesUnion';
export interface TopLogprobsItem {
  bytes: BytesUnion;
  logprob: number;
  token: string;
}

export const TopLogprobsItemSchema: TypedSchema<TopLogprobsItem> = typed<TopLogprobsItem>(object({
  bytes: BytesUnionSchema,
  logprob: number(),
  token: string(),
}));