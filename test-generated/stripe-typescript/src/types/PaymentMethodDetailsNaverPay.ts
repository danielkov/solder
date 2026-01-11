import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_naver_pay
 *
 * 
 */
export interface PaymentMethodDetailsNaverPay {
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string;
  /**
   * The Naver Pay transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsNaverPaySchema: TypedSchema<PaymentMethodDetailsNaverPay> = typed<PaymentMethodDetailsNaverPay>(object({
  buyerId: optional(string()),
  transactionId: optional(string()),
}));