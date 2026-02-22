import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingAuthorization } from './IssuingAuthorization';
import { IssuingAuthorizationSchema } from './IssuingAuthorization';
/**
 * The `Authorization` object that led to this transaction.
 */
export type AuthorizationOrRef = string | IssuingAuthorization;

export const AuthorizationOrRefSchema: TypedSchema<AuthorizationOrRef> = typed<AuthorizationOrRef>(union(string(), IssuingAuthorizationSchema));
