import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { TreasuryTransaction } from './TreasuryTransaction';
import { TreasuryTransactionSchema } from './TreasuryTransaction';
/**
 * The Transaction associated with this object.
 */
export type TransactionOrRef2 = string | TreasuryTransaction;

export const TransactionOrRef2Schema: TypedSchema<TransactionOrRef2> = typed<TransactionOrRef2>(union(string(), TreasuryTransactionSchema));
