import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { ChatCompletionFinishReason } from './ChatCompletionFinishReason';
import { ChatCompletionFinishReasonSchema } from './ChatCompletionFinishReason';
export type Schema0 = ChatCompletionFinishReason | any | null;

export const Schema0Schema: TypedSchema<Schema0> = typed<Schema0>(union(ChatCompletionFinishReasonSchema, nullable(unknown())));