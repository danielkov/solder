import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BalanceTransaction } from './BalanceTransaction';
import { BalanceTransactionSchema } from './BalanceTransaction';
export type FailureBalanceTransactionOrRef = string | BalanceTransaction;

export const FailureBalanceTransactionOrRefSchema: TypedSchema<FailureBalanceTransactionOrRef> = typed<FailureBalanceTransactionOrRef>(union(string(), BalanceTransactionSchema));