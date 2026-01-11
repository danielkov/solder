import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * GrabPay is a payment method developed by [Grab](https://www.grab.com/sg/consumer/finance/pay/). GrabPay is a digital wallet - customers maintain a balance in their wallets that they pay out with. Check this [page](https://stripe.com/docs/payments/grabpay) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestGrabpay {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestGrabpaySchema: TypedSchema<PostPaymentMethodConfigurationsRequestGrabpay> = typed<PostPaymentMethodConfigurationsRequestGrabpay>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));