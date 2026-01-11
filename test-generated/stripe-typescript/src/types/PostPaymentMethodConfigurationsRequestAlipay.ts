import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Alipay is a digital wallet in China that has more than a billion active users worldwide. Alipay users can pay on the web or on a mobile device using login credentials or their Alipay app. Alipay has a low dispute rate and reduces fraud by authenticating payments using the customer's login credentials. Check this [page](https://stripe.com/docs/payments/alipay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestAlipay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestAlipaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestAlipay> = typed<PostPaymentMethodConfigurationsRequestAlipay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));