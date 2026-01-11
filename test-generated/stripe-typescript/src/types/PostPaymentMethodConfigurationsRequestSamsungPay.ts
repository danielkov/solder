import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Samsung Pay is a [single-use](https://docs.stripe.com/payments/payment-methods#usage local wallet available in South Korea.
 */
export interface PostPaymentMethodConfigurationsRequestSamsungPay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestSamsungPaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestSamsungPay> = typed<PostPaymentMethodConfigurationsRequestSamsungPay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));