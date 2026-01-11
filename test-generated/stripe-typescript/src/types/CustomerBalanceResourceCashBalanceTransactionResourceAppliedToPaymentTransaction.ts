import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction {
  /**
   * The [Payment Intent](https://stripe.com/docs/api/payment_intents/object) that funds were applied to.
   */
  paymentIntent: PaymentIntentOrRef;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransactionSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction> = typed<CustomerBalanceResourceCashBalanceTransactionResourceAppliedToPaymentTransaction>(object({
  paymentIntent: PaymentIntentOrRefSchema,
}));