import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { CompletionTokensDetailsUnionObject } from './CompletionTokensDetailsUnionObject';
import { CompletionTokensDetailsUnionObjectSchema } from './CompletionTokensDetailsUnionObject';
export type CompletionTokensDetailsUnion = CompletionTokensDetailsUnionObject | any | null;

export const CompletionTokensDetailsUnionSchema: TypedSchema<CompletionTokensDetailsUnion> = typed<CompletionTokensDetailsUnion>(union(CompletionTokensDetailsUnionObjectSchema, nullable(unknown())));