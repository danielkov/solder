import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * PromptPay is a Thailand-based payment method that allows customers to make a payment using their preferred app from participating banks. Check this [page](https://stripe.com/docs/payments/promptpay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestPromptpay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestPromptpaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestPromptpay> = typed<PostPaymentMethodConfigurationsRequestPromptpay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));