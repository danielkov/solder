import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Afterpay gives your customers a way to pay for purchases in installments, check this [page](https://stripe.com/docs/payments/afterpay-clearpay) for more details like country availability. Afterpay is particularly popular among businesses selling fashion, beauty, and sports products.
 */
export interface PostPaymentMethodConfigurationsRequestAfterpayClearpay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestAfterpayClearpaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestAfterpayClearpay> = typed<PostPaymentMethodConfigurationsRequestAfterpayClearpay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));