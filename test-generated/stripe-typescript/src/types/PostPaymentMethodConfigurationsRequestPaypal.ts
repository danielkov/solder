import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * PayPal, a digital wallet popular with customers in Europe, allows your customers worldwide to pay using their PayPal account. Check this [page](https://stripe.com/docs/payments/paypal) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestPaypal {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestPaypalSchema: TypedSchema<PostPaymentMethodConfigurationsRequestPaypal> = typed<PostPaymentMethodConfigurationsRequestPaypal>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));