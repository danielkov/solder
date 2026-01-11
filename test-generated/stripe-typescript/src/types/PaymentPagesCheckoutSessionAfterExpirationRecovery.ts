import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionAfterExpirationRecovery
 *
 * 
 */
export interface PaymentPagesCheckoutSessionAfterExpirationRecovery {
  /**
   * Enables user redeemable promotion codes on the recovered Checkout Sessions. Defaults to `false`
   */
  allowPromotionCodes: boolean;
  /**
   * If `true`, a recovery url will be generated to recover this Checkout Session if it
expires before a transaction is completed. It will be attached to the
Checkout Session object upon expiration.
   */
  enabled: boolean;
  /**
   * The timestamp at which the recovery URL will expire.
   */
  expiresAt?: number;
  /**
   * URL that creates a new Checkout Session when clicked that is a copy of this expired Checkout Session
   */
  url?: string;
}

export const PaymentPagesCheckoutSessionAfterExpirationRecoverySchema: TypedSchema<PaymentPagesCheckoutSessionAfterExpirationRecovery> = typed<PaymentPagesCheckoutSessionAfterExpirationRecovery>(object({
  allowPromotionCodes: boolean(),
  enabled: boolean(),
  expiresAt: optional(number()),
  url: optional(string()),
}));