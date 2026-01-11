import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is a `naver_pay` PaymentMethod, this hash contains details about the Naver Pay payment method.
 */
export interface PostPaymentMethodsRequestNaverPay {
  funding?: string;
}

export const PostPaymentMethodsRequestNaverPaySchema: TypedSchema<PostPaymentMethodsRequestNaverPay> = typed<PostPaymentMethodsRequestNaverPay>(object({
  funding: optional(string()),
}));