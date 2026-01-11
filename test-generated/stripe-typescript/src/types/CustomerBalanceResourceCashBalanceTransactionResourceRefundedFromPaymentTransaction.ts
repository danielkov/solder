import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { RefundOrRef } from './RefundOrRef';
import { RefundOrRefSchema } from './RefundOrRef';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction {
  /**
   * The [Refund](https://stripe.com/docs/api/refunds/object) that moved these funds into the customer's cash balance.
   */
  refund: RefundOrRef;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransactionSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction> = typed<CustomerBalanceResourceCashBalanceTransactionResourceRefundedFromPaymentTransaction>(object({
  refund: RefundOrRefSchema,
}));