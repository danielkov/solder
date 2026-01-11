import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionAfterExpirationRecovery } from './PaymentPagesCheckoutSessionAfterExpirationRecovery';
import { PaymentPagesCheckoutSessionAfterExpirationRecoverySchema } from './PaymentPagesCheckoutSessionAfterExpirationRecovery';
/**
 * PaymentPagesCheckoutSessionAfterExpiration
 *
 * 
 */
export interface PaymentPagesCheckoutSessionAfterExpiration {
  /**
   * When set, configuration used to recover the Checkout Session on expiry.
   */
  recovery?: PaymentPagesCheckoutSessionAfterExpirationRecovery;
}

export const PaymentPagesCheckoutSessionAfterExpirationSchema: TypedSchema<PaymentPagesCheckoutSessionAfterExpiration> = typed<PaymentPagesCheckoutSessionAfterExpiration>(object({
  get recovery() { return optional(PaymentPagesCheckoutSessionAfterExpirationRecoverySchema) },
}));