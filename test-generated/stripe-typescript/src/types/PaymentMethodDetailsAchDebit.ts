import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_ach_debit
 *
 * 
 */
export interface PaymentMethodDetailsAchDebit {
  /**
   * Type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountHolderType?: string;
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string;
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Last four digits of the bank account number.
   */
  last4?: string;
  /**
   * Routing transit number of the bank account.
   */
  routingNumber?: string;
}

export const PaymentMethodDetailsAchDebitSchema: TypedSchema<PaymentMethodDetailsAchDebit> = typed<PaymentMethodDetailsAchDebit>(object({
  accountHolderType: optional(string()),
  bankName: optional(string()),
  country: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  routingNumber: optional(string()),
}));