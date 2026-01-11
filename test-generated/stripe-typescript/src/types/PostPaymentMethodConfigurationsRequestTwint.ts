import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Twint is a payment method popular in Switzerland. It allows customers to pay using their mobile phone. Check this [page](https://docs.stripe.com/payments/twint) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestTwint {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestTwintSchema: TypedSchema<PostPaymentMethodConfigurationsRequestTwint> = typed<PostPaymentMethodConfigurationsRequestTwint>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));