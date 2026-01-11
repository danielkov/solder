import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance {
  /**
   * The [Balance Transaction](https://stripe.com/docs/api/balance_transactions/object) that corresponds to funds transferred to your Stripe balance.
   */
  balanceTransaction: BalanceTransactionOrRef;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalanceSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance> = typed<CustomerBalanceResourceCashBalanceTransactionResourceTransferredToBalance>(object({
  balanceTransaction: BalanceTransactionOrRefSchema,
}));