import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Cash App is a popular consumer app in the US that allows customers to bank, invest, send, and receive money using their digital wallet. Check this [page](https://stripe.com/docs/payments/cash-app-pay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestCashapp {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestCashappSchema: TypedSchema<PostPaymentMethodConfigurationsRequestCashapp> = typed<PostPaymentMethodConfigurationsRequestCashapp>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));