import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_boleto
 *
 * 
 */
export interface PaymentMethodBoleto {
  /**
   * Uniquely identifies the customer tax id (CNPJ or CPF)
   */
  taxId: string;
}

export const PaymentMethodBoletoSchema: TypedSchema<PaymentMethodBoleto> = typed<PaymentMethodBoleto>(object({
  taxId: string(),
}));