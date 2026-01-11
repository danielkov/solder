import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingToken } from './IssuingToken';
import { IssuingTokenSchema } from './IssuingToken';
export type TokenOrRef = string | IssuingToken;

export const TokenOrRefSchema: TypedSchema<TokenOrRef> = typed<TokenOrRef>(union(string(), IssuingTokenSchema));