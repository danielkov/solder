import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Stripe users in Australia can accept Bulk Electronic Clearing System (BECS) direct debit payments from customers with an Australian bank account. Check this [page](https://stripe.com/docs/payments/au-becs-debit) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestAuBecsDebit {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestAuBecsDebitSchema: TypedSchema<PostPaymentMethodConfigurationsRequestAuBecsDebit> = typed<PostPaymentMethodConfigurationsRequestAuBecsDebit>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));