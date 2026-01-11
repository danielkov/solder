import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_payment_method_options_acss_debit_mandate_options
 *
 * 
 */
export interface InvoicePaymentMethodOptionsAcssDebitMandateOptions {
  /**
   * Transaction type of the mandate.
   */
  transactionType?: string;
}

export const InvoicePaymentMethodOptionsAcssDebitMandateOptionsSchema: TypedSchema<InvoicePaymentMethodOptionsAcssDebitMandateOptions> = typed<InvoicePaymentMethodOptionsAcssDebitMandateOptions>(object({
  transactionType: optional(string()),
}));