import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { CustomerCashBalanceTransaction } from './CustomerCashBalanceTransaction';
import { CustomerCashBalanceTransactionSchema } from './CustomerCashBalanceTransaction';
export type LinkedTransactionOrRef = string | CustomerCashBalanceTransaction;

export const LinkedTransactionOrRefSchema: TypedSchema<LinkedTransactionOrRef> = typed<LinkedTransactionOrRef>(union(string(), CustomerCashBalanceTransactionSchema));