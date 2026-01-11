import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { CompletionLogprobs } from './CompletionLogprobs';
import { CompletionLogprobsSchema } from './CompletionLogprobs';
export type LogprobsUnion3 = CompletionLogprobs | any | null;

export const LogprobsUnion3Schema: TypedSchema<LogprobsUnion3> = typed<LogprobsUnion3>(union(CompletionLogprobsSchema, nullable(unknown())));