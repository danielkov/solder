import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_au_becs_debit
 *
 * 
 */
export interface PaymentMethodAuBecsDebit {
  /**
   * Six-digit number identifying bank and branch associated with this bank account.
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
}

export const PaymentMethodAuBecsDebitSchema: TypedSchema<PaymentMethodAuBecsDebit> = typed<PaymentMethodAuBecsDebit>(object({
  bsbNumber: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
}));