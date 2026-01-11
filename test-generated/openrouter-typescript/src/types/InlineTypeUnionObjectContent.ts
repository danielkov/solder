import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { InlineTypeUnionObjectContentUnion } from './InlineTypeUnionObjectContentUnion';
import { InlineTypeUnionObjectContentUnionSchema } from './InlineTypeUnionObjectContentUnion';
export type InlineTypeUnionObjectContent = Array<InlineTypeUnionObjectContentUnion> | string;

export const InlineTypeUnionObjectContentSchema: TypedSchema<InlineTypeUnionObjectContent> = typed<InlineTypeUnionObjectContent>(union(array(InlineTypeUnionObjectContentUnionSchema), string()));