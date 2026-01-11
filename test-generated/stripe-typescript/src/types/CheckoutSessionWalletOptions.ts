import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { CheckoutLinkWalletOptions } from './CheckoutLinkWalletOptions';
import { CheckoutLinkWalletOptionsSchema } from './CheckoutLinkWalletOptions';
/**
 * CheckoutSessionWalletOptions
 *
 * 
 */
export interface CheckoutSessionWalletOptions {
  /**
   * CheckoutLinkWalletOptions
   *
   * 
   */
  link?: CheckoutLinkWalletOptions;
}

export const CheckoutSessionWalletOptionsSchema: TypedSchema<CheckoutSessionWalletOptions> = typed<CheckoutSessionWalletOptions>(object({
  get link() { return optional(CheckoutLinkWalletOptionsSchema) },
}));