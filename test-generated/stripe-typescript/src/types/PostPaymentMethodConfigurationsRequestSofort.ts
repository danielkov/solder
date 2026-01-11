import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Stripe users in Europe and the United States can use the [Payment Intents API](https://stripe.com/docs/payments/payment-intents)—a single integration path for creating payments using any supported method—to accept [Sofort](https://www.sofort.com/) payments from customers. Check this [page](https://stripe.com/docs/payments/sofort) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestSofort {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestSofortSchema: TypedSchema<PostPaymentMethodConfigurationsRequestSofort> = typed<PostPaymentMethodConfigurationsRequestSofort>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));