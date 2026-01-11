import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions } from './InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions';
import { InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsSchema } from './InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions';
/**
 * invoice_payment_method_options_us_bank_account
 *
 * 
 */
export interface InvoicePaymentMethodOptionsUsBankAccount {
  /**
   * invoice_payment_method_options_us_bank_account_linked_account_options
   *
   * 
   */
  financialConnections?: InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions;
  /**
   * Bank account verification method.
   */
  verificationMethod?: string;
}

export const InvoicePaymentMethodOptionsUsBankAccountSchema: TypedSchema<InvoicePaymentMethodOptionsUsBankAccount> = typed<InvoicePaymentMethodOptionsUsBankAccount>(object({
  get financialConnections() { return optional(InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsSchema) },
  verificationMethod: optional(string()),
}));