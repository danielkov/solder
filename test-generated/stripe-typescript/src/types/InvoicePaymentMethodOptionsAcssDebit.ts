import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoicePaymentMethodOptionsAcssDebitMandateOptions } from './InvoicePaymentMethodOptionsAcssDebitMandateOptions';
import { InvoicePaymentMethodOptionsAcssDebitMandateOptionsSchema } from './InvoicePaymentMethodOptionsAcssDebitMandateOptions';
/**
 * invoice_payment_method_options_acss_debit
 *
 * 
 */
export interface InvoicePaymentMethodOptionsAcssDebit {
  /**
   * invoice_payment_method_options_acss_debit_mandate_options
   *
   * 
   */
  mandateOptions?: InvoicePaymentMethodOptionsAcssDebitMandateOptions;
  /**
   * Bank account verification method.
   */
  verificationMethod?: string;
}

export const InvoicePaymentMethodOptionsAcssDebitSchema: TypedSchema<InvoicePaymentMethodOptionsAcssDebit> = typed<InvoicePaymentMethodOptionsAcssDebit>(object({
  get mandateOptions() { return optional(InvoicePaymentMethodOptionsAcssDebitMandateOptionsSchema) },
  verificationMethod: optional(string()),
}));