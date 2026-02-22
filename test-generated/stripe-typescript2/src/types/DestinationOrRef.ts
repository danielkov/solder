import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Account } from './Account';
import { AccountSchema } from './Account';
/**
 * ID of an existing, connected Stripe account to transfer funds to if `transfer_data` was specified in the charge request.
 */
export type DestinationOrRef = string | Account;

export const DestinationOrRefSchema: TypedSchema<DestinationOrRef> = typed<DestinationOrRef>(union(string(), AccountSchema));
