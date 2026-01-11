import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_oxxo
 *
 * 
 */
export interface PaymentMethodDetailsOxxo {
  /**
   * OXXO reference number
   */
  number?: string;
}

export const PaymentMethodDetailsOxxoSchema: TypedSchema<PaymentMethodDetailsOxxo> = typed<PaymentMethodDetailsOxxo>(object({
  number: optional(string()),
}));