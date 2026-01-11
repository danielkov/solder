import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * [Link](https://stripe.com/docs/payments/link) is a payment method network. With Link, users save their payment details once, then reuse that information to pay with one click for any business on the network.
 */
export interface PostPaymentMethodConfigurationsRequestLink {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestLinkSchema: TypedSchema<PostPaymentMethodConfigurationsRequestLink> = typed<PostPaymentMethodConfigurationsRequestLink>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));