import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SepaDebitGeneratedFrom } from './SepaDebitGeneratedFrom';
import { SepaDebitGeneratedFromSchema } from './SepaDebitGeneratedFrom';
/**
 * payment_method_sepa_debit
 *
 * 
 */
export interface PaymentMethodSepaDebit {
  /**
   * Bank code of bank associated with the bank account.
   */
  bankCode?: string;
  /**
   * Branch code of bank associated with the bank account.
   */
  branchCode?: string;
  /**
   * Two-letter ISO code representing the country the bank account is located in.
   */
  country?: string;
  /**
   * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
   */
  fingerprint?: string;
  /**
   * Information about the object that generated this PaymentMethod.
   */
  generatedFrom?: SepaDebitGeneratedFrom;
  /**
   * Last four characters of the IBAN.
   */
  last4?: string;
}

export const PaymentMethodSepaDebitSchema: TypedSchema<PaymentMethodSepaDebit> = typed<PaymentMethodSepaDebit>(object({
  bankCode: optional(string()),
  branchCode: optional(string()),
  country: optional(string()),
  fingerprint: optional(string()),
  get generatedFrom() { return optional(SepaDebitGeneratedFromSchema) },
  last4: optional(string()),
}));