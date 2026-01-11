import { TypedSchema, array, string, typed, union, unknown } from '@speakeasy-api/tonic';

import type { InlineTypeUnion } from './InlineTypeUnion';
import { InlineTypeUnionSchema } from './InlineTypeUnion';
export type OpenAiResponsesInput = string | Array<InlineTypeUnion> | any;

export const OpenAiResponsesInputSchema: TypedSchema<OpenAiResponsesInput> = typed<OpenAiResponsesInput>(union(string(), array(InlineTypeUnionSchema), unknown()));