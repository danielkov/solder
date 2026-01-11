import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BalanceTransaction } from './BalanceTransaction';
import { BalanceTransactionSchema } from './BalanceTransaction';
export type BalanceTransactionOrRef = string | BalanceTransaction;

export const BalanceTransactionOrRefSchema: TypedSchema<BalanceTransactionOrRef> = typed<BalanceTransactionOrRef>(union(string(), BalanceTransactionSchema));