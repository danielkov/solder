import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Konbini allows customers in Japan to pay for bills and online purchases at convenience stores with cash. Check this [page](https://stripe.com/docs/payments/konbini) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestKonbini {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestKonbiniSchema: TypedSchema<PostPaymentMethodConfigurationsRequestKonbini> = typed<PostPaymentMethodConfigurationsRequestKonbini>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));