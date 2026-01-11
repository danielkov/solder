import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingAuthorization } from './IssuingAuthorization';
import { IssuingAuthorizationSchema } from './IssuingAuthorization';
export type AuthorizationOrRef = string | IssuingAuthorization;

export const AuthorizationOrRefSchema: TypedSchema<AuthorizationOrRef> = typed<AuthorizationOrRef>(union(string(), IssuingAuthorizationSchema));