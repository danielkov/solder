import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingToken } from './IssuingToken';
import { IssuingTokenSchema } from './IssuingToken';
/**
 * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this authorization. If a network token was not used for this authorization, this field will be null.
 */
export type TokenOrRef = string | IssuingToken;

export const TokenOrRefSchema: TypedSchema<TokenOrRef> = typed<TokenOrRef>(union(string(), IssuingTokenSchema));
