import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
 */
export interface PostPaymentMethodsRequestIdeal {
  bank?: string;
}

export const PostPaymentMethodsRequestIdealSchema: TypedSchema<PostPaymentMethodsRequestIdeal> = typed<PostPaymentMethodsRequestIdeal>(object({
  bank: optional(string()),
}));