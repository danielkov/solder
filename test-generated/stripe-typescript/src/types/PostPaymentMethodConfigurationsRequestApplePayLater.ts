import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Apple Pay Later, a payment method for customers to buy now and pay later, gives your customers a way to split purchases into four installments across six weeks.
 */
export interface PostPaymentMethodConfigurationsRequestApplePayLater {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestApplePayLaterSchema: TypedSchema<PostPaymentMethodConfigurationsRequestApplePayLater> = typed<PostPaymentMethodConfigurationsRequestApplePayLater>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));