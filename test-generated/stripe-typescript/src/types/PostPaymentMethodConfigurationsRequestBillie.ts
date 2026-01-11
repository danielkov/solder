import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Billie is a [single-use](https://docs.stripe.com/payments/payment-methods#usage) payment method that offers businesses Pay by Invoice where they offer payment terms ranging from 7-120 days. Customers are redirected from your website or app, authorize the payment with Billie, then return to your website or app. You get [immediate notification](/payments/payment-methods#payment-notification) of whether the payment succeeded or failed.
 */
export interface PostPaymentMethodConfigurationsRequestBillie {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestBillieSchema: TypedSchema<PostPaymentMethodConfigurationsRequestBillie> = typed<PostPaymentMethodConfigurationsRequestBillie>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));