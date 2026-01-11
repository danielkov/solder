import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_bacs_debit
 *
 * 
 */
export interface PaymentMethodBacsDebit {
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string;
  /**
   * Sort code of the bank account. (e.g., `10-20-30`)
   */
  sortCode?: string;
}

export const PaymentMethodBacsDebitSchema: TypedSchema<PaymentMethodBacsDebit> = typed<PaymentMethodBacsDebit>(object({
  fingerprint: optional(string()),
  last4: optional(string()),
  sortCode: optional(string()),
}));