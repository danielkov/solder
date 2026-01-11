import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Account } from './Account';
import { AccountSchema } from './Account';
export type OnBehalfOfOrRef = string | Account;

export const OnBehalfOfOrRefSchema: TypedSchema<OnBehalfOfOrRef> = typed<OnBehalfOfOrRef>(union(string(), AccountSchema));