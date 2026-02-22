import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Account } from './Account';
import { AccountSchema } from './Account';
/**
 * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
 */
export type OnBehalfOfOrRef = string | Account;

export const OnBehalfOfOrRefSchema: TypedSchema<OnBehalfOfOrRef> = typed<OnBehalfOfOrRef>(union(string(), AccountSchema));
