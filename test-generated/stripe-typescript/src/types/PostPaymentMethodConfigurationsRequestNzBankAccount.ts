import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Stripe users in New Zealand can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with a New Zeland bank account. Check this [page](https://stripe.com/docs/payments/nz-bank-account) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestNzBankAccount {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestNzBankAccountSchema: TypedSchema<PostPaymentMethodConfigurationsRequestNzBankAccount> = typed<PostPaymentMethodConfigurationsRequestNzBankAccount>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));