import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { IssuingTransaction } from './IssuingTransaction';
import { IssuingTransactionSchema } from './IssuingTransaction';
export type TransactionOrRef = string | IssuingTransaction;

export const TransactionOrRefSchema: TypedSchema<TransactionOrRef> = typed<TransactionOrRef>(union(string(), IssuingTransactionSchema));