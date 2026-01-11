import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Meal vouchers in France, or “titres-restaurant”, is a local benefits program commonly offered by employers for their employees to purchase prepared food and beverages on working days. Check this [page](https://stripe.com/docs/payments/benefits/fr-meal-vouchers) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestFrMealVoucherConecs {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestFrMealVoucherConecsSchema: TypedSchema<PostPaymentMethodConfigurationsRequestFrMealVoucherConecs> = typed<PostPaymentMethodConfigurationsRequestFrMealVoucherConecs>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));