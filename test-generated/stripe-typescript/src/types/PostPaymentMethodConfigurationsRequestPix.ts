import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Pix is a payment method popular in Brazil. When paying with Pix, customers authenticate and approve payments by scanning a QR code in their preferred banking app. Check this [page](https://docs.stripe.com/payments/pix) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestPix {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestPixSchema: TypedSchema<PostPaymentMethodConfigurationsRequestPix> = typed<PostPaymentMethodConfigurationsRequestPix>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));