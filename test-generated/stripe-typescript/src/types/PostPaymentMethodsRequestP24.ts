import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
 */
export interface PostPaymentMethodsRequestP24 {
  bank?: string;
}

export const PostPaymentMethodsRequestP24Schema: TypedSchema<PostPaymentMethodsRequestP24> = typed<PostPaymentMethodsRequestP24>(object({
  bank: optional(string()),
}));