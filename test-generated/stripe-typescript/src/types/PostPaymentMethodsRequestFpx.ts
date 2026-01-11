import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
 */
export interface PostPaymentMethodsRequestFpx {
  bank: string;
}

export const PostPaymentMethodsRequestFpxSchema: TypedSchema<PostPaymentMethodsRequestFpx> = typed<PostPaymentMethodsRequestFpx>(object({
  bank: string(),
}));