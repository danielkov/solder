import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_payment_method_options_bancontact
 *
 * 
 */
export interface InvoicePaymentMethodOptionsBancontact {
  /**
   * Preferred language of the Bancontact authorization page that the customer is redirected to.
   */
  preferredLanguage: string;
}

export const InvoicePaymentMethodOptionsBancontactSchema: TypedSchema<InvoicePaymentMethodOptionsBancontact> = typed<InvoicePaymentMethodOptionsBancontact>(object({
  preferredLanguage: string(),
}));