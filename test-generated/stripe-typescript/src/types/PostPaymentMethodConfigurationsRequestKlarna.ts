import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Klarna gives customers a range of [payment options](https://stripe.com/docs/payments/klarna#payment-options) during checkout. Available payment options vary depending on the customer's billing address and the transaction amount. These payment options make it convenient for customers to purchase items in all price ranges. Check this [page](https://stripe.com/docs/payments/klarna) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestKlarna {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestKlarnaSchema: TypedSchema<PostPaymentMethodConfigurationsRequestKlarna> = typed<PostPaymentMethodConfigurationsRequestKlarna>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));