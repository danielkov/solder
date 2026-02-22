import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { IssuingTransaction } from './IssuingTransaction';
import { IssuingTransactionSchema } from './IssuingTransaction';
/**
 * The transaction being disputed.
 */
export type TransactionOrRef = string | IssuingTransaction;

export const TransactionOrRefSchema: TypedSchema<TransactionOrRef> = typed<TransactionOrRef>(union(string(), IssuingTransactionSchema));
