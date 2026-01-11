import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_acss_debit
 *
 * 
 */
export interface PaymentMethodDetailsAcssDebit {
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Institution number of the bank account
   */
  institutionNumber?: string;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string;
  /**
   * ID of the mandate used to make this payment.
   */
  mandate?: string;
  /**
   * Transit number of the bank account.
   */
  transitNumber?: string;
}

export const PaymentMethodDetailsAcssDebitSchema: TypedSchema<PaymentMethodDetailsAcssDebit> = typed<PaymentMethodDetailsAcssDebit>(object({
  bankName: optional(string()),
  fingerprint: optional(string()),
  institutionNumber: optional(string()),
  last4: optional(string()),
  mandate: optional(string()),
  transitNumber: optional(string()),
}));