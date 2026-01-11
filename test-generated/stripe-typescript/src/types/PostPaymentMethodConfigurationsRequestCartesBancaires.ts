import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Cartes Bancaires is France's local card network. More than 95% of these cards are co-branded with either Visa or Mastercard, meaning you can process these cards over either Cartes Bancaires or the Visa or Mastercard networks. Check this [page](https://stripe.com/docs/payments/cartes-bancaires) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestCartesBancaires {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestCartesBancairesSchema: TypedSchema<PostPaymentMethodConfigurationsRequestCartesBancaires> = typed<PostPaymentMethodConfigurationsRequestCartesBancaires>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));