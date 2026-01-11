import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_boleto
 *
 * 
 */
export interface PaymentMethodDetailsBoleto {
  /**
   * The tax ID of the customer (CPF for individuals consumers or CNPJ for businesses consumers)
   */
  taxId: string;
}

export const PaymentMethodDetailsBoletoSchema: TypedSchema<PaymentMethodDetailsBoleto> = typed<PaymentMethodDetailsBoleto>(object({
  taxId: string(),
}));