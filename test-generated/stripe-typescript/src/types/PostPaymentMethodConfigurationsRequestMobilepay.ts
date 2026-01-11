import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * MobilePay is a [single-use](https://stripe.com/docs/payments/payment-methods#usage) card wallet payment method used in Denmark and Finland. It allows customers to [authenticate and approve](https://stripe.com/docs/payments/payment-methods#customer-actions) payments using the MobilePay app. Check this [page](https://stripe.com/docs/payments/mobilepay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestMobilepay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestMobilepaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestMobilepay> = typed<PostPaymentMethodConfigurationsRequestMobilepay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));