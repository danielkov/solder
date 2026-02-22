import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { CustomerBalanceTransaction } from './CustomerBalanceTransaction';
import { CustomerBalanceTransactionSchema } from './CustomerBalanceTransaction';
/**
 * Customer balance transaction related to this credit note.
 */
export type CustomerBalanceTransactionOrRef = string | CustomerBalanceTransaction;

export const CustomerBalanceTransactionOrRefSchema: TypedSchema<CustomerBalanceTransactionOrRef> = typed<CustomerBalanceTransactionOrRef>(union(string(), CustomerBalanceTransactionSchema));
