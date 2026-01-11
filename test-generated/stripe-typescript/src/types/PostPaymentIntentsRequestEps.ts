import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestEps {
  bank?: string;
}

export const PostPaymentIntentsRequestEpsSchema: TypedSchema<PostPaymentIntentsRequestEps> = typed<PostPaymentIntentsRequestEps>(object({
  bank: optional(string()),
}));