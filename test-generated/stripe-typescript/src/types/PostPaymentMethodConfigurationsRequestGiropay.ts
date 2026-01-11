import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * giropay is a German payment method based on online banking, introduced in 2006. It allows customers to complete transactions online using their online banking environment, with funds debited from their bank account. Depending on their bank, customers confirm payments on giropay using a second factor of authentication or a PIN. giropay accounts for 10% of online checkouts in Germany. Check this [page](https://stripe.com/docs/payments/giropay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestGiropay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestGiropaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestGiropay> = typed<PostPaymentMethodConfigurationsRequestGiropay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));