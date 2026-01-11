import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingCardApplePay } from './IssuingCardApplePay';
import { IssuingCardApplePaySchema } from './IssuingCardApplePay';
import type { IssuingCardGooglePay } from './IssuingCardGooglePay';
import { IssuingCardGooglePaySchema } from './IssuingCardGooglePay';
/**
 * IssuingCardWallets
 *
 * 
 */
export interface IssuingCardWallets {
  /**
   * IssuingCardApplePay
   *
   * 
   */
  applePay: IssuingCardApplePay;
  /**
   * IssuingCardGooglePay
   *
   * 
   */
  googlePay: IssuingCardGooglePay;
  /**
   * Unique identifier for a card used with digital wallets
   */
  primaryAccountIdentifier?: string;
}

export const IssuingCardWalletsSchema: TypedSchema<IssuingCardWallets> = typed<IssuingCardWallets>(object({
  applePay: IssuingCardApplePaySchema,
  googlePay: IssuingCardGooglePaySchema,
  primaryAccountIdentifier: optional(string()),
}));