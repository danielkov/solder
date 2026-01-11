import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Stripe users can accept [Apple Pay](https://stripe.com/payments/apple-pay) in iOS applications in iOS 9 and later, and on the web in Safari starting with iOS 10 or macOS Sierra. There are no additional fees to process Apple Pay payments, and the [pricing](https://stripe.com/pricing) is the same as other card transactions. Check this [page](https://stripe.com/docs/apple-pay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestApplePay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestApplePaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestApplePay> = typed<PostPaymentMethodConfigurationsRequestApplePay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));