import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_kakao_pay
 *
 * 
 */
export interface PaymentMethodDetailsKakaoPay {
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string;
  /**
   * The Kakao Pay transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsKakaoPaySchema: TypedSchema<PaymentMethodDetailsKakaoPay> = typed<PaymentMethodDetailsKakaoPay>(object({
  buyerId: optional(string()),
  transactionId: optional(string()),
}));