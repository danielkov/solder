import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Boleto is an official (regulated by the Central Bank of Brazil) payment method in Brazil. Check this [page](https://stripe.com/docs/payments/boleto) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestBoleto {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestBoletoSchema: TypedSchema<PostPaymentMethodConfigurationsRequestBoleto> = typed<PostPaymentMethodConfigurationsRequestBoleto>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));