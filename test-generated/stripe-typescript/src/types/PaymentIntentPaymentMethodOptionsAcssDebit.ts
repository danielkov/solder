import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit } from './PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit';
import { PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitSchema } from './PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit';
/**
 * payment_intent_payment_method_options_acss_debit
 *
 * 
 */
export interface PaymentIntentPaymentMethodOptionsAcssDebit {
  /**
   * payment_intent_payment_method_options_mandate_options_acss_debit
   *
   * 
   */
  mandateOptions?: PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.

If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.

If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.

When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: string;
  /**
   * Controls when Stripe will attempt to debit the funds from the customer's account. The date must be a string in YYYY-MM-DD format. The date must be in the future and between 3 and 15 calendar days from now.
   */
  targetDate?: string;
  /**
   * Bank account verification method.
   */
  verificationMethod?: string;
}

export const PaymentIntentPaymentMethodOptionsAcssDebitSchema: TypedSchema<PaymentIntentPaymentMethodOptionsAcssDebit> = typed<PaymentIntentPaymentMethodOptionsAcssDebit>(object({
  get mandateOptions() { return optional(PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitSchema) },
  setupFutureUsage: optional(string()),
  targetDate: optional(string()),
  verificationMethod: optional(string()),
}));