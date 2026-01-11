import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_sofort
 *
 * 
 */
export interface PaymentMethodSofort {
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country?: string;
}

export const PaymentMethodSofortSchema: TypedSchema<PaymentMethodSofort> = typed<PaymentMethodSofort>(object({
  country: optional(string()),
}));