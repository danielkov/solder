import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * MB WAY is the most popular wallet in Portugal. After entering their phone number in your checkout, customers approve the payment directly in their MB WAY app. Check this [page](https://stripe.com/docs/payments/mb-way) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestMbWay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestMbWaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestMbWay> = typed<PostPaymentMethodConfigurationsRequestMbWay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));