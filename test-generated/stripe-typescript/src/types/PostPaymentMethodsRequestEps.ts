import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
 */
export interface PostPaymentMethodsRequestEps {
  bank?: string;
}

export const PostPaymentMethodsRequestEpsSchema: TypedSchema<PostPaymentMethodsRequestEps> = typed<PostPaymentMethodsRequestEps>(object({
  bank: optional(string()),
}));