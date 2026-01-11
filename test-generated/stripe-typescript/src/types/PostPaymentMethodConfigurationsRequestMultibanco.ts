import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Stripe users in Europe and the United States can accept Multibanco payments from customers in Portugal using [Sources](https://stripe.com/docs/sources)—a single integration path for creating payments using any supported method.
 */
export interface PostPaymentMethodConfigurationsRequestMultibanco {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestMultibancoSchema: TypedSchema<PostPaymentMethodConfigurationsRequestMultibanco> = typed<PostPaymentMethodConfigurationsRequestMultibanco>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));