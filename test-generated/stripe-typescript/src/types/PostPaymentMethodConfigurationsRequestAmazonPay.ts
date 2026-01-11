import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Amazon Pay is a wallet payment method that lets your customers check out the same way as on Amazon.
 */
export interface PostPaymentMethodConfigurationsRequestAmazonPay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestAmazonPaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestAmazonPay> = typed<PostPaymentMethodConfigurationsRequestAmazonPay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));