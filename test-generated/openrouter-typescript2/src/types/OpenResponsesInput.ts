import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { InlineTypeUnion2 } from './InlineTypeUnion2';
import { InlineTypeUnion2Schema } from './InlineTypeUnion2';
/**
 * Input for a response request - can be a string or array of items
 */
export type OpenResponsesInput = string | Array<InlineTypeUnion2>;

export const OpenResponsesInputSchema: TypedSchema<OpenResponsesInput> = typed<OpenResponsesInput>(union(string(), array(InlineTypeUnion2Schema)));
