import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Google Pay allows customers to make payments in your app or website using any credit or debit card saved to their Google Account, including those from Google Play, YouTube, Chrome, or an Android device. Use the Google Pay API to request any credit or debit card stored in your customer's Google account. Check this [page](https://stripe.com/docs/google-pay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestGooglePay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestGooglePaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestGooglePay> = typed<PostPaymentMethodConfigurationsRequestGooglePay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));