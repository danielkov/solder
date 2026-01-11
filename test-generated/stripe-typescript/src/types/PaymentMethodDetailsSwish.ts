import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_swish
 *
 * 
 */
export interface PaymentMethodDetailsSwish {
  /**
   * Uniquely identifies the payer's Swish account. You can use this attribute to check whether two Swish transactions were paid for by the same payer
   */
  fingerprint?: string;
  /**
   * Payer bank reference number for the payment
   */
  paymentReference?: string;
  /**
   * The last four digits of the Swish account phone number
   */
  verifiedPhoneLast4?: string;
}

export const PaymentMethodDetailsSwishSchema: TypedSchema<PaymentMethodDetailsSwish> = typed<PaymentMethodDetailsSwish>(object({
  fingerprint: optional(string()),
  paymentReference: optional(string()),
  verifiedPhoneLast4: optional(string()),
}));