import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Uses a customer’s [cash balance](https://stripe.com/docs/payments/customer-balance) for the payment. The cash balance can be funded via a bank transfer. Check this [page](https://stripe.com/docs/payments/bank-transfers) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestCustomerBalance {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestCustomerBalanceSchema: TypedSchema<PostPaymentMethodConfigurationsRequestCustomerBalance> = typed<PostPaymentMethodConfigurationsRequestCustomerBalance>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));