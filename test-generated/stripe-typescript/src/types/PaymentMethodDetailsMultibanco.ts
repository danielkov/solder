import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_multibanco
 *
 * 
 */
export interface PaymentMethodDetailsMultibanco {
  /**
   * Entity number associated with this Multibanco payment.
   */
  entity?: string;
  /**
   * Reference number associated with this Multibanco payment.
   */
  reference?: string;
}

export const PaymentMethodDetailsMultibancoSchema: TypedSchema<PaymentMethodDetailsMultibanco> = typed<PaymentMethodDetailsMultibanco>(object({
  entity: optional(string()),
  reference: optional(string()),
}));