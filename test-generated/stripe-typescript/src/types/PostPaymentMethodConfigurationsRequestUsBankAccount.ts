import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Stripe users in the United States can accept ACH direct debit payments from customers with a US bank account using the Automated Clearing House (ACH) payments system operated by Nacha. Check this [page](https://stripe.com/docs/payments/ach-direct-debit) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestUsBankAccount {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestUsBankAccountSchema: TypedSchema<PostPaymentMethodConfigurationsRequestUsBankAccount> = typed<PostPaymentMethodConfigurationsRequestUsBankAccount>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));