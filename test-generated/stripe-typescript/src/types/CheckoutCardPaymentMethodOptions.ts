import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CheckoutCardInstallmentsOptions } from './CheckoutCardInstallmentsOptions';
import { CheckoutCardInstallmentsOptionsSchema } from './CheckoutCardInstallmentsOptions';
import type { PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions } from './PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions';
import { PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictionsSchema } from './PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions';
/**
 * CheckoutCardPaymentMethodOptions
 *
 * 
 */
export interface CheckoutCardPaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * CheckoutCardInstallmentsOptions
   *
   * 
   */
  installments?: CheckoutCardInstallmentsOptions;
  /**
   * Request ability to [capture beyond the standard authorization validity window](/payments/extended-authorization) for this CheckoutSession.
   */
  requestExtendedAuthorization?: string;
  /**
   * Request ability to [increment the authorization](/payments/incremental-authorization) for this CheckoutSession.
   */
  requestIncrementalAuthorization?: string;
  /**
   * Request ability to make [multiple captures](/payments/multicapture) for this CheckoutSession.
   */
  requestMulticapture?: string;
  /**
   * Request ability to [overcapture](/payments/overcapture) for this CheckoutSession.
   */
  requestOvercapture?: string;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure: string;
  /**
   * PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions
   *
   * 
   */
  restrictions?: PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions;
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

export const CheckoutCardPaymentMethodOptionsSchema: TypedSchema<CheckoutCardPaymentMethodOptions> = typed<CheckoutCardPaymentMethodOptions>(object({
  captureMethod: optional(string()),
  get installments() { return optional(CheckoutCardInstallmentsOptionsSchema) },
  requestExtendedAuthorization: optional(string()),
  requestIncrementalAuthorization: optional(string()),
  requestMulticapture: optional(string()),
  requestOvercapture: optional(string()),
  requestThreeDSecure: string(),
  get restrictions() { return optional(PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictionsSchema) },
  setupFutureUsage: optional(string()),
  statementDescriptorSuffixKana: optional(string()),
  statementDescriptorSuffixKanji: optional(string()),
}));