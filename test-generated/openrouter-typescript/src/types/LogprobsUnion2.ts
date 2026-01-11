import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { ChatMessageTokenLogprobs } from './ChatMessageTokenLogprobs';
import { ChatMessageTokenLogprobsSchema } from './ChatMessageTokenLogprobs';
export type LogprobsUnion2 = ChatMessageTokenLogprobs | any | null;

export const LogprobsUnion2Schema: TypedSchema<LogprobsUnion2> = typed<LogprobsUnion2>(union(ChatMessageTokenLogprobsSchema, nullable(unknown())));