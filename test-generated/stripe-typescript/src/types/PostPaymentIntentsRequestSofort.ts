import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestSofort {
  country: string;
}

export const PostPaymentIntentsRequestSofortSchema: TypedSchema<PostPaymentIntentsRequestSofort> = typed<PostPaymentIntentsRequestSofort>(object({
  country: string(),
}));