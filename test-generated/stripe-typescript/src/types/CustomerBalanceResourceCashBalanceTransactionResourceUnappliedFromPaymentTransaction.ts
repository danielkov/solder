import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction {
  /**
   * The [Payment Intent](https://stripe.com/docs/api/payment_intents/object) that funds were unapplied from.
   */
  paymentIntent: PaymentIntentOrRef;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransactionSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction> = typed<CustomerBalanceResourceCashBalanceTransactionResourceUnappliedFromPaymentTransaction>(object({
  paymentIntent: PaymentIntentOrRefSchema,
}));