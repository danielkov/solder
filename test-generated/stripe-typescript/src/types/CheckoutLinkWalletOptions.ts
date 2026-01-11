import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutLinkWalletOptions
 *
 * 
 */
export interface CheckoutLinkWalletOptions {
  /**
   * Describes whether Checkout should display Link. Defaults to `auto`.
   */
  display?: string;
}

export const CheckoutLinkWalletOptionsSchema: TypedSchema<CheckoutLinkWalletOptions> = typed<CheckoutLinkWalletOptions>(object({
  display: optional(string()),
}));