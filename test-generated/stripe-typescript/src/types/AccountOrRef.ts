import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Account } from './Account';
import { AccountSchema } from './Account';
export type AccountOrRef = string | Account;

export const AccountOrRefSchema: TypedSchema<AccountOrRef> = typed<AccountOrRef>(union(string(), AccountSchema));