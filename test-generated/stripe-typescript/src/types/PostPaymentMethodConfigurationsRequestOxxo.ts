import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * OXXO is a Mexican chain of convenience stores with thousands of locations across Latin America and represents nearly 20% of online transactions in Mexico. OXXO allows customers to pay bills and online purchases in-store with cash. Check this [page](https://stripe.com/docs/payments/oxxo) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestOxxo {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestOxxoSchema: TypedSchema<PostPaymentMethodConfigurationsRequestOxxo> = typed<PostPaymentMethodConfigurationsRequestOxxo>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));