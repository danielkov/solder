import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_nz_bank_account
 *
 * 
 */
export interface PaymentMethodNzBankAccount {
  /**
   * The name on the bank account. Only present if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod’s billing details.
   */
  accountHolderName?: string;
  /**
   * The numeric code for the bank account's bank.
   */
  bankCode: string;
  /**
   * The name of the bank.
   */
  bankName: string;
  /**
   * The numeric code for the bank account's bank branch.
   */
  branchCode: string;
  /**
   * Last four digits of the bank account number.
   */
  last4: string;
  /**
   * The suffix of the bank account number.
   */
  suffix?: string;
}

export const PaymentMethodNzBankAccountSchema: TypedSchema<PaymentMethodNzBankAccount> = typed<PaymentMethodNzBankAccount>(object({
  accountHolderName: optional(string()),
  bankCode: string(),
  bankName: string(),
  branchCode: string(),
  last4: string(),
  suffix: optional(string()),
}));