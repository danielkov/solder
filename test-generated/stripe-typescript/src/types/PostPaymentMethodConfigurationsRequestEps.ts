import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * EPS is an Austria-based payment method that allows customers to complete transactions online using their bank credentials. EPS is supported by all Austrian banks and is accepted by over 80% of Austrian online retailers. Check this [page](https://stripe.com/docs/payments/eps) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestEps {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestEpsSchema: TypedSchema<PostPaymentMethodConfigurationsRequestEps> = typed<PostPaymentMethodConfigurationsRequestEps>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));