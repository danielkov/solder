import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BalanceTransaction } from './BalanceTransaction';
import { BalanceTransactionSchema } from './BalanceTransaction';
/**
 * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
 */
export type BalanceTransactionOrRef = string | BalanceTransaction;

export const BalanceTransactionOrRefSchema: TypedSchema<BalanceTransactionOrRef> = typed<BalanceTransactionOrRef>(union(string(), BalanceTransactionSchema));
