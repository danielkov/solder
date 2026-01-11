import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Pay by bank is a redirect payment method backed by bank transfers. A customer is redirected to their bank to authorize a bank transfer for a given amount. This removes a lot of the error risks inherent in waiting for the customer to initiate a transfer themselves, and is less expensive than card payments.
 */
export interface PostPaymentMethodConfigurationsRequestPayByBank {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestPayByBankSchema: TypedSchema<PostPaymentMethodConfigurationsRequestPayByBank> = typed<PostPaymentMethodConfigurationsRequestPayByBank>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));