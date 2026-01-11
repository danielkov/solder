import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentMethodConfigurationsRequestDisplayPreference } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
import { PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema } from './PostPaymentMethodConfigurationsRequestDisplayPreference';
/**
 * payment_method_param
 *
 * [Stablecoin payments](https://stripe.com/docs/payments/stablecoin-payments) enable customers to pay in stablecoins like USDC from 100s of wallets including Phantom and Metamask.
 */
export interface PostPaymentMethodConfigurationsRequestCrypto {
  /**
   * display_preference_param
   */
  displayPreference?: PostPaymentMethodConfigurationsRequestDisplayPreference;
}

export const PostPaymentMethodConfigurationsRequestCryptoSchema: TypedSchema<PostPaymentMethodConfigurationsRequestCrypto> = typed<PostPaymentMethodConfigurationsRequestCrypto>(object({
  get displayPreference() { return optional(PostPaymentMethodConfigurationsRequestDisplayPreferenceSchema) },
}));