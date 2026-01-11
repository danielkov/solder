import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { PromptTokensDetailsUnionObject } from './PromptTokensDetailsUnionObject';
import { PromptTokensDetailsUnionObjectSchema } from './PromptTokensDetailsUnionObject';
export type PromptTokensDetailsUnion = PromptTokensDetailsUnionObject | any | null;

export const PromptTokensDetailsUnionSchema: TypedSchema<PromptTokensDetailsUnion> = typed<PromptTokensDetailsUnion>(union(PromptTokensDetailsUnionObjectSchema, nullable(unknown())));