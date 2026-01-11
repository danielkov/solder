import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * create_param
 *
 * If this is a `custom` PaymentMethod, this hash contains details about the Custom payment method.
 */
export interface PostPaymentMethodsRequestCustom {
  type: string;
}

export const PostPaymentMethodsRequestCustomSchema: TypedSchema<PostPaymentMethodsRequestCustom> = typed<PostPaymentMethodsRequestCustom>(object({
  type: string(),
}));