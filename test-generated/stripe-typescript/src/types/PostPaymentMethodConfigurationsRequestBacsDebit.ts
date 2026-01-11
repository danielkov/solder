import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Stripe users in the UK can accept Bacs Direct Debit payments from customers with a UK bank account, check this [page](https://stripe.com/docs/payments/payment-methods/bacs-debit) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestBacsDebit {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestBacsDebitSchema: TypedSchema<PostPaymentMethodConfigurationsRequestBacsDebit> = typed<PostPaymentMethodConfigurationsRequestBacsDebit>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));