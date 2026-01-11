import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_paypal
 *
 * 
 */
export interface PaymentMethodPaypal {
  /**
   * Two-letter ISO code representing the buyer's country. Values are provided by PayPal directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  country?: string;
  /**
   * Owner's email. Values are provided by PayPal directly
(if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  payerEmail?: string;
  /**
   * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
   */
  payerId?: string;
}

export const PaymentMethodPaypalSchema: TypedSchema<PaymentMethodPaypal> = typed<PaymentMethodPaypal>(object({
  country: optional(string()),
  payerEmail: optional(string()),
  payerId: optional(string()),
}));