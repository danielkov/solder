import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';

import type { BytesUnion } from './BytesUnion';
import { BytesUnionSchema } from './BytesUnion';
import type { TopLogprobsItem } from './TopLogprobsItem';
import { TopLogprobsItemSchema } from './TopLogprobsItem';
export interface ChatMessageTokenLogprob {
  bytes: BytesUnion;
  logprob: number;
  token: string;
  topLogprobs: Array<TopLogprobsItem>;
}

export const ChatMessageTokenLogprobSchema: TypedSchema<ChatMessageTokenLogprob> = typed<ChatMessageTokenLogprob>(object({
  bytes: BytesUnionSchema,
  logprob: number(),
  token: string(),
  topLogprobs: array(TopLogprobsItemSchema),
}));