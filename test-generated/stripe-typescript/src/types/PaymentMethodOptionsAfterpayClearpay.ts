import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_afterpay_clearpay
 *
 * 
 */
export interface PaymentMethodOptionsAfterpayClearpay {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * An internal identifier or reference that this payment corresponds to. You must limit the identifier to 128 characters, and it can only contain letters, numbers, underscores, backslashes, and dashes.
This field differs from the statement descriptor and item name.
   */
  reference?: string;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.

If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.

If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.

When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: string;
}

export const PaymentMethodOptionsAfterpayClearpaySchema: TypedSchema<PaymentMethodOptionsAfterpayClearpay> = typed<PaymentMethodOptionsAfterpayClearpay>(object({
  captureMethod: optional(string()),
  reference: optional(string()),
  setupFutureUsage: optional(string()),
}));