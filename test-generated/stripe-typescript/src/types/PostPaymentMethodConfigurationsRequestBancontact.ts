import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Bancontact is the most popular online payment method in Belgium, with over 15 million cards in circulation. [Customers](https://stripe.com/docs/api/customers) use a Bancontact card or mobile app linked to a Belgian bank account to make online payments that are secure, guaranteed, and confirmed immediately. Check this [page](https://stripe.com/docs/payments/bancontact) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestBancontact {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestBancontactSchema: TypedSchema<PostPaymentMethodConfigurationsRequestBancontact> = typed<PostPaymentMethodConfigurationsRequestBancontact>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));