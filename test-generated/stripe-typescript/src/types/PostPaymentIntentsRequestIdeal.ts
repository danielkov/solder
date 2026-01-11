import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestIdeal {
  bank?: string;
}

export const PostPaymentIntentsRequestIdealSchema: TypedSchema<PostPaymentIntentsRequestIdeal> = typed<PostPaymentIntentsRequestIdeal>(object({
  bank: optional(string()),
}));