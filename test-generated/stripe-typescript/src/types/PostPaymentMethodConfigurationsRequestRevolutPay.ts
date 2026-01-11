import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Revolut Pay, developed by Revolut, a global finance app, is a digital wallet payment method. Revolut Pay uses the customer’s stored balance or cards to fund the payment, and offers the option for non-Revolut customers to save their details after their first purchase.
 */
export interface PostPaymentMethodConfigurationsRequestRevolutPay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestRevolutPaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestRevolutPay> = typed<PostPaymentMethodConfigurationsRequestRevolutPay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));