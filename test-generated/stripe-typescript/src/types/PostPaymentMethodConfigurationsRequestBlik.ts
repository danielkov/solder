import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * BLIK is a [single use](https://stripe.com/docs/payments/payment-methods#usage) payment method that requires customers to authenticate their payments. When customers want to pay online using BLIK, they request a six-digit code from their banking application and enter it into the payment collection form. Check this [page](https://stripe.com/docs/payments/blik) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestBlik {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestBlikSchema: TypedSchema<PostPaymentMethodConfigurationsRequestBlik> = typed<PostPaymentMethodConfigurationsRequestBlik>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));