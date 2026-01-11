import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestNaverPay {
  funding?: string;
}

export const PostPaymentIntentsRequestNaverPaySchema: TypedSchema<PostPaymentIntentsRequestNaverPay> = typed<PostPaymentIntentsRequestNaverPay>(object({
  funding: optional(string()),
}));