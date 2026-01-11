import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';

import type { TopLogprobsUnion2 } from './TopLogprobsUnion2';
import { TopLogprobsUnion2Schema } from './TopLogprobsUnion2';
export interface CompletionLogprobs {
  textOffset: Array<number>;
  tokenLogprobs: Array<number>;
  tokens: Array<string>;
  topLogprobs: TopLogprobsUnion2;
}

export const CompletionLogprobsSchema: TypedSchema<CompletionLogprobs> = typed<CompletionLogprobs>(object({
  textOffset: array(number()),
  tokenLogprobs: array(number()),
  tokens: array(string()),
  topLogprobs: TopLogprobsUnion2Schema,
}));