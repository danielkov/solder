import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
 */
export interface PostPaymentMethodsRequestSofort {
  country: string;
}

export const PostPaymentMethodsRequestSofortSchema: TypedSchema<PostPaymentMethodsRequestSofort> = typed<PostPaymentMethodsRequestSofort>(object({
  country: string(),
}));