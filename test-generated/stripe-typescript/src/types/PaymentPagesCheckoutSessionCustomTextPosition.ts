import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionCustomTextPosition
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomTextPosition {
  /**
   * Text may be up to 1200 characters in length.
   */
  message: string;
}

export const PaymentPagesCheckoutSessionCustomTextPositionSchema: TypedSchema<PaymentPagesCheckoutSessionCustomTextPosition> = typed<PaymentPagesCheckoutSessionCustomTextPosition>(object({
  message: string(),
}));