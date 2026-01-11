import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * iDEAL is a Netherlands-based payment method that allows customers to complete transactions online using their bank credentials. All major Dutch banks are members of Currence, the scheme that operates iDEAL, making it the most popular online payment method in the Netherlands with a share of online transactions close to 55%. Check this [page](https://stripe.com/docs/payments/ideal) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestIdeal {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestIdealSchema: TypedSchema<PostPaymentMethodConfigurationsRequestIdeal> = typed<PostPaymentMethodConfigurationsRequestIdeal>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));