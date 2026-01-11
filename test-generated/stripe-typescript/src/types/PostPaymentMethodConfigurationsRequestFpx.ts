import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * Financial Process Exchange (FPX) is a Malaysia-based payment method that allows customers to complete transactions online using their bank credentials. Bank Negara Malaysia (BNM), the Central Bank of Malaysia, and eleven other major Malaysian financial institutions are members of the PayNet Group, which owns and operates FPX. It is one of the most popular online payment methods in Malaysia, with nearly 90 million transactions in 2018 according to BNM. Check this [page](https://stripe.com/docs/payments/fpx) for more details.
 */
export interface PostPaymentMethodConfigurationsRequestFpx {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestFpxSchema: TypedSchema<PostPaymentMethodConfigurationsRequestFpx> = typed<PostPaymentMethodConfigurationsRequestFpx>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));