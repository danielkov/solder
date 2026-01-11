import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodOptionsCardInstallments } from './PaymentMethodOptionsCardInstallments';
import { PaymentMethodOptionsCardInstallmentsSchema } from './PaymentMethodOptionsCardInstallments';
import type { PaymentMethodOptionsCardMandateOptions } from './PaymentMethodOptionsCardMandateOptions';
import { PaymentMethodOptionsCardMandateOptionsSchema } from './PaymentMethodOptionsCardMandateOptions';
/**
 * payment_intent_payment_method_options_card
 *
 * 
 */
export interface PaymentIntentPaymentMethodOptionsCard {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * Installment details for this payment.

For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
   */
  installments?: PaymentMethodOptionsCardInstallments;
  /**
   * Configuration options for setting up an eMandate for cards issued in India.
   */
  mandateOptions?: PaymentMethodOptionsCardMandateOptions;
  /**
   * Selected network to process this payment intent on. Depends on the available networks of the card attached to the payment intent. Can be only set confirm-time.
   */
  network?: string;
  /**
   * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
   */
  requestExtendedAuthorization?: string;
  /**
   * Request ability to [increment the authorization](https://stripe.com/docs/payments/incremental-authorization) for this PaymentIntent.
   */
  requestIncrementalAuthorization?: string;
  /**
   * Request ability to make [multiple captures](https://stripe.com/docs/payments/multicapture) for this PaymentIntent.
   */
  requestMulticapture?: string;
  /**
   * Request ability to [overcapture](https://stripe.com/docs/payments/overcapture) for this PaymentIntent.
   */
  requestOvercapture?: string;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure?: string;
  /**
   * When enabled, using a card that is attached to a customer will require the CVC to be provided again (i.e. using the cvc_token parameter).
   */
  requireCvcRecollection?: boolean;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.

If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.

If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.

When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: string;
  /**
   * Provides information about a card payment that customers see on their statements. Concatenated with the Kana prefix (shortened Kana descriptor) or Kana statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 22 characters.
   */
  statementDescriptorSuffixKana?: string;
  /**
   * Provides information about a card payment that customers see on their statements. Concatenated with the Kanji prefix (shortened Kanji descriptor) or Kanji statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 17 characters. On card statements, the *concatenation* of both prefix and suffix (including separators) will appear truncated to 17 characters.
   */
  statementDescriptorSuffixKanji?: string;
}

export const PaymentIntentPaymentMethodOptionsCardSchema: TypedSchema<PaymentIntentPaymentMethodOptionsCard> = typed<PaymentIntentPaymentMethodOptionsCard>(object({
  captureMethod: optional(string()),
  get installments() { return optional(PaymentMethodOptionsCardInstallmentsSchema) },
  get mandateOptions() { return optional(PaymentMethodOptionsCardMandateOptionsSchema) },
  network: optional(string()),
  requestExtendedAuthorization: optional(string()),
  requestIncrementalAuthorization: optional(string()),
  requestMulticapture: optional(string()),
  requestOvercapture: optional(string()),
  requestThreeDSecure: optional(string()),
  requireCvcRecollection: optional(boolean()),
  setupFutureUsage: optional(string()),
  statementDescriptorSuffixKana: optional(string()),
  statementDescriptorSuffixKanji: optional(string()),
}));