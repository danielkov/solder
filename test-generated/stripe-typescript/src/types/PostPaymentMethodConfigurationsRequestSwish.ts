import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Swish is a [real-time](https://stripe.com/docs/payments/real-time) payment method popular in Sweden. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the Swish mobile app and the Swedish BankID mobile app. Check this [page](https://stripe.com/docs/payments/swish) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestSwish {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestSwishSchema: TypedSchema<PostPaymentMethodConfigurationsRequestSwish> = typed<PostPaymentMethodConfigurationsRequestSwish>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));