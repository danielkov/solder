import { TypedSchema, array, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { ChatMessageTokenLogprob } from './ChatMessageTokenLogprob';
import { ChatMessageTokenLogprobSchema } from './ChatMessageTokenLogprob';
export type ContentUnion2 = Array<ChatMessageTokenLogprob> | any | null;

export const ContentUnion2Schema: TypedSchema<ContentUnion2> = typed<ContentUnion2>(union(array(ChatMessageTokenLogprobSchema), nullable(unknown())));