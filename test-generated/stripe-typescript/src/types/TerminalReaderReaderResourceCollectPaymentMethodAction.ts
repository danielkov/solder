import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
import type { TerminalReaderReaderResourceCollectConfig } from './TerminalReaderReaderResourceCollectConfig';
import { TerminalReaderReaderResourceCollectConfigSchema } from './TerminalReaderReaderResourceCollectConfig';
/**
 * TerminalReaderReaderResourceCollectPaymentMethodAction
 *
 * Represents a reader action to collect a payment method
 */
export interface TerminalReaderReaderResourceCollectPaymentMethodAction {
  /**
   * TerminalReaderReaderResourceCollectConfig
   *
   * Represents a per-transaction override of a reader configuration
   */
  collectConfig?: TerminalReaderReaderResourceCollectConfig;
  /**
   * Most recent PaymentIntent processed by the reader.
   */
  paymentIntent: PaymentIntentOrRef;
  /**
   * PaymentMethod
   *
   * PaymentMethod objects represent your customer's payment instruments.
You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
Customer objects to store instrument details for future payments.

Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
   */
  paymentMethod?: PaymentMethod;
}

export const TerminalReaderReaderResourceCollectPaymentMethodActionSchema: TypedSchema<TerminalReaderReaderResourceCollectPaymentMethodAction> = typed<TerminalReaderReaderResourceCollectPaymentMethodAction>(object({
  get collectConfig() { return optional(TerminalReaderReaderResourceCollectConfigSchema) },
  paymentIntent: PaymentIntentOrRefSchema,
  get paymentMethod() { return optional(PaymentMethodSchema) },
}));