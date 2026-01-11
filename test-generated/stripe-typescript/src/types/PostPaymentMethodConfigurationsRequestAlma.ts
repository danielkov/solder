import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Alma is a Buy Now, Pay Later payment method that offers customers the ability to pay in 2, 3, or 4 installments.
 */
export interface PostPaymentMethodConfigurationsRequestAlma {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestAlmaSchema: TypedSchema<PostPaymentMethodConfigurationsRequestAlma> = typed<PostPaymentMethodConfigurationsRequestAlma>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));