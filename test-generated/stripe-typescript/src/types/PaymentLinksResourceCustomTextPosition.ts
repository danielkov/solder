import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentLinksResourceCustomTextPosition
 *
 * 
 */
export interface PaymentLinksResourceCustomTextPosition {
  /**
   * Text may be up to 1200 characters in length.
   */
  message: string;
}

export const PaymentLinksResourceCustomTextPositionSchema: TypedSchema<PaymentLinksResourceCustomTextPosition> = typed<PaymentLinksResourceCustomTextPosition>(object({
  message: string(),
}));