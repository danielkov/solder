import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Przelewy24 is a Poland-based payment method aggregator that allows customers to complete transactions online using bank transfers and other methods. Bank transfers account for 30% of online payments in Poland and Przelewy24 provides a way for customers to pay with over 165 banks. Check this [page](https://stripe.com/docs/payments/p24) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestP24 {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestP24Schema: TypedSchema<PostPaymentMethodConfigurationsRequestP24> = typed<PostPaymentMethodConfigurationsRequestP24>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));