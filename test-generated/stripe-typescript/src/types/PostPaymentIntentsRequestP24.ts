import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestP24 {
  bank?: string;
}

export const PostPaymentIntentsRequestP24Schema: TypedSchema<PostPaymentIntentsRequestP24> = typed<PostPaymentIntentsRequestP24>(object({
  bank: optional(string()),
}));