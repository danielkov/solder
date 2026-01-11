import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_au_becs_debit
 *
 * 
 */
export interface PaymentMethodDetailsAuBecsDebit {
  /**
   * Bank-State-Branch number of the bank account.
   */
  bsbNumber?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string;
  /**
   * ID of the mandate used to make this payment.
   */
  mandate?: string;
}

export const PaymentMethodDetailsAuBecsDebitSchema: TypedSchema<PaymentMethodDetailsAuBecsDebit> = typed<PaymentMethodDetailsAuBecsDebit>(object({
  bsbNumber: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  mandate: optional(string()),
}));