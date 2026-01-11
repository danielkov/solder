import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * JCB is a credit card company based in Japan. JCB is currently available in Japan to businesses approved by JCB, and available to all businesses in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, United Kingdom, United States, and all countries in the European Economic Area except Iceland. Check this [page](https://support.stripe.com/questions/accepting-japan-credit-bureau-%28jcb%29-payments) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestJcb {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestJcbSchema: TypedSchema<PostPaymentMethodConfigurationsRequestJcb> = typed<PostPaymentMethodConfigurationsRequestJcb>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));