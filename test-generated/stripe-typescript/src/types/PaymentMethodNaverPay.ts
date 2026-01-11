import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_naver_pay
 *
 * 
 */
export interface PaymentMethodNaverPay {
  /**
   * Uniquely identifies this particular Naver Pay account. You can use this attribute to check whether two Naver Pay accounts are the same.
   */
  buyerId?: string;
  /**
   * Whether to fund this transaction with Naver Pay points or a card.
   */
  funding: string;
}

export const PaymentMethodNaverPaySchema: TypedSchema<PaymentMethodNaverPay> = typed<PaymentMethodNaverPay>(object({
  buyerId: optional(string()),
  funding: string(),
}));