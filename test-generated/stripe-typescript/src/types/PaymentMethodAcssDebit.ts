import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_acss_debit
 *
 * 
 */
export interface PaymentMethodAcssDebit {
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Institution number of the bank account.
   */
  institutionNumber?: string;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string;
  /**
   * Transit number of the bank account.
   */
  transitNumber?: string;
}

export const PaymentMethodAcssDebitSchema: TypedSchema<PaymentMethodAcssDebit> = typed<PaymentMethodAcssDebit>(object({
  bankName: optional(string()),
  fingerprint: optional(string()),
  institutionNumber: optional(string()),
  last4: optional(string()),
  transitNumber: optional(string()),
}));