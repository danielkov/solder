import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * payment_method_details_card_wallet_visa_checkout
 *
 * 
 */
export interface PaymentMethodDetailsCardWalletVisaCheckout {
  /**
   * Owner's verified billing address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  billingAddress?: Address;
  /**
   * Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  email?: string;
  /**
   * Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  name?: string;
  /**
   * Owner's verified shipping address. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  shippingAddress?: Address;
}

export const PaymentMethodDetailsCardWalletVisaCheckoutSchema: TypedSchema<PaymentMethodDetailsCardWalletVisaCheckout> = typed<PaymentMethodDetailsCardWalletVisaCheckout>(object({
  get billingAddress() { return optional(AddressSchema) },
  email: optional(string()),
  name: optional(string()),
  get shippingAddress() { return optional(AddressSchema) },
}));