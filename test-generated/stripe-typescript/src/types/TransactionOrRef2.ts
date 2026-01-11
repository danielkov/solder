import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TreasuryTransaction } from './TreasuryTransaction';
import { TreasuryTransactionSchema } from './TreasuryTransaction';
export type TransactionOrRef2 = string | TreasuryTransaction;

export const TransactionOrRef2Schema: TypedSchema<TransactionOrRef2> = typed<TransactionOrRef2>(union(string(), TreasuryTransactionSchema));