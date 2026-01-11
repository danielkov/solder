import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * PAYCO is a [single-use](https://docs.stripe.com/payments/payment-methods#usage local wallet available in South Korea.
 */
export interface PostPaymentMethodConfigurationsRequestPayco {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestPaycoSchema: TypedSchema<PostPaymentMethodConfigurationsRequestPayco> = typed<PostPaymentMethodConfigurationsRequestPayco>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));