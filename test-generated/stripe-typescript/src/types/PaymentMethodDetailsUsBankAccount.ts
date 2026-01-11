import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MandateOrRef } from './MandateOrRef';
import { MandateOrRefSchema } from './MandateOrRef';
/**
 * payment_method_details_us_bank_account
 *
 * 
 */
export interface PaymentMethodDetailsUsBankAccount {
  /**
   * Account holder type: individual or company.
   */
  accountHolderType?: string;
  /**
   * Account type: checkings or savings. Defaults to checking if omitted.
   */
  accountType?: string;
  /**
   * Name of the bank associated with the bank account.
   */
  bankName?: string;
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
  mandate?: MandateOrRef;
  /**
   * Reference number to locate ACH payments with customer's bank.
   */
  paymentReference?: string;
  /**
   * Routing number of the bank account.
   */
  routingNumber?: string;
}

export const PaymentMethodDetailsUsBankAccountSchema: TypedSchema<PaymentMethodDetailsUsBankAccount> = typed<PaymentMethodDetailsUsBankAccount>(object({
  accountHolderType: optional(string()),
  accountType: optional(string()),
  bankName: optional(string()),
  fingerprint: optional(string()),
  last4: optional(string()),
  get mandate() { return optional(MandateOrRefSchema) },
  paymentReference: optional(string()),
  routingNumber: optional(string()),
}));