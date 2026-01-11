import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { InlineTypeUnion2 } from './InlineTypeUnion2';
import { InlineTypeUnion2Schema } from './InlineTypeUnion2';
export type OpenResponsesInput = string | Array<InlineTypeUnion2>;

export const OpenResponsesInputSchema: TypedSchema<OpenResponsesInput> = typed<OpenResponsesInput>(union(string(), array(InlineTypeUnion2Schema)));