import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Account } from './Account';
import { AccountSchema } from './Account';
/**
 * ID of the Stripe account this fee was taken from.
 */
export type AccountOrRef = string | Account;

export const AccountOrRefSchema: TypedSchema<AccountOrRef> = typed<AccountOrRef>(union(string(), AccountSchema));
