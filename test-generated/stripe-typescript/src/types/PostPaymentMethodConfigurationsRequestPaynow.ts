import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * PayNow is a Singapore-based payment method that allows customers to make a payment using their preferred app from participating banks and participating non-bank financial institutions. Check this [page](https://stripe.com/docs/payments/paynow) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestPaynow {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestPaynowSchema: TypedSchema<PostPaymentMethodConfigurationsRequestPaynow> = typed<PostPaymentMethodConfigurationsRequestPaynow>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));