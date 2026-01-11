import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * setup_attempt_payment_method_details_naver_pay
 *
 * 
 */
export interface SetupAttemptPaymentMethodDetailsNaverPay {
  /**
   * Uniquely identifies this particular Naver Pay account. You can use this attribute to check whether two Naver Pay accounts are the same.
   */
  buyerId?: string;
}

export const SetupAttemptPaymentMethodDetailsNaverPaySchema: TypedSchema<SetupAttemptPaymentMethodDetailsNaverPay> = typed<SetupAttemptPaymentMethodDetailsNaverPay>(object({
  buyerId: optional(string()),
}));