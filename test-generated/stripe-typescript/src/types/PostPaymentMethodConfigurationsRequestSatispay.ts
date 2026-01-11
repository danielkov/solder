import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Satispay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method where customers are required to [authenticate](/payments/payment-methods#customer-actions) their payment. Customers pay by being redirected from your website or app, authorizing the payment with Satispay, then returning to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
 */
export interface PostPaymentMethodConfigurationsRequestSatispay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestSatispaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestSatispay> = typed<PostPaymentMethodConfigurationsRequestSatispay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));