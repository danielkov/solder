import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { CustomerBalanceTransaction } from './CustomerBalanceTransaction';
import { CustomerBalanceTransactionSchema } from './CustomerBalanceTransaction';
export type CustomerBalanceTransactionOrRef = string | CustomerBalanceTransaction;

export const CustomerBalanceTransactionOrRefSchema: TypedSchema<CustomerBalanceTransactionOrRef> = typed<CustomerBalanceTransactionOrRef>(union(string(), CustomerBalanceTransactionSchema));