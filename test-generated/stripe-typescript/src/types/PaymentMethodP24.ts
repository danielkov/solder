import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_p24
 *
 * 
 */
export interface PaymentMethodP24 {
  /**
   * The customer's bank, if provided.
   */
  bank?: string;
}

export const PaymentMethodP24Schema: TypedSchema<PaymentMethodP24> = typed<PaymentMethodP24>(object({
  bank: optional(string()),
}));