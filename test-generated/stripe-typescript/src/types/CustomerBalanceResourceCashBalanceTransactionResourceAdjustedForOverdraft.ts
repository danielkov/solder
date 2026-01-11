import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
import type { LinkedTransactionOrRef } from './LinkedTransactionOrRef';
import { LinkedTransactionOrRefSchema } from './LinkedTransactionOrRef';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft {
  /**
   * The [Balance Transaction](https://stripe.com/docs/api/balance_transactions/object) that corresponds to funds taken out of your Stripe balance.
   */
  balanceTransaction: BalanceTransactionOrRef;
  /**
   * The [Cash Balance Transaction](https://stripe.com/docs/api/cash_balance_transactions/object) that brought the customer balance negative, triggering the clawback of funds.
   */
  linkedTransaction: LinkedTransactionOrRef;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraftSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft> = typed<CustomerBalanceResourceCashBalanceTransactionResourceAdjustedForOverdraft>(object({
  balanceTransaction: BalanceTransactionOrRefSchema,
  linkedTransaction: LinkedTransactionOrRefSchema,
}));