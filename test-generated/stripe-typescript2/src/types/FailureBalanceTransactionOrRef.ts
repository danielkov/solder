import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BalanceTransaction } from './BalanceTransaction';
import { BalanceTransactionSchema } from './BalanceTransaction';
/**
 * ID of the balance transaction that describes the reversal of the balance on your account due to payment failure.
 */
export type FailureBalanceTransactionOrRef = string | BalanceTransaction;

export const FailureBalanceTransactionOrRefSchema: TypedSchema<FailureBalanceTransactionOrRef> = typed<FailureBalanceTransactionOrRef>(union(string(), BalanceTransactionSchema));
