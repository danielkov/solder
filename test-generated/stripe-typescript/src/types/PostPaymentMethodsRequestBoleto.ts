import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
 */
export interface PostPaymentMethodsRequestBoleto {
  taxId: string;
}

export const PostPaymentMethodsRequestBoletoSchema: TypedSchema<PostPaymentMethodsRequestBoleto> = typed<PostPaymentMethodsRequestBoleto>(object({
  taxId: string(),
}));