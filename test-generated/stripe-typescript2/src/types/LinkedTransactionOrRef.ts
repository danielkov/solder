import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { CustomerCashBalanceTransaction } from './CustomerCashBalanceTransaction';
import { CustomerCashBalanceTransactionSchema } from './CustomerCashBalanceTransaction';
/**
 * The [Cash Balance Transaction](https://stripe.com/docs/api/cash_balance_transactions/object) that brought the customer balance negative, triggering the clawback of funds.
 */
export type LinkedTransactionOrRef = string | CustomerCashBalanceTransaction;

export const LinkedTransactionOrRefSchema: TypedSchema<LinkedTransactionOrRef> = typed<LinkedTransactionOrRef>(union(string(), CustomerCashBalanceTransactionSchema));
