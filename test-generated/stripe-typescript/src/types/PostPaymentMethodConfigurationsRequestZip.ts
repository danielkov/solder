import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Zip gives your customers a way to split purchases over a series of payments. Check this [page](https://stripe.com/docs/payments/zip) for more details like country availability.
 */
export interface PostPaymentMethodConfigurationsRequestZip {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestZipSchema: TypedSchema<PostPaymentMethodConfigurationsRequestZip> = typed<PostPaymentMethodConfigurationsRequestZip>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));