import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_payment_method_options_mandate_options_acss_debit
 *
 * 
 */
export interface PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit {
  /**
   * A URL for custom mandate text
   */
  customMandateUrl?: string;
  /**
   * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
   */
  intervalDescription?: string;
  /**
   * Payment schedule for the mandate.
   */
  paymentSchedule?: string;
  /**
   * Transaction type of the mandate.
   */
  transactionType?: string;
}

export const PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitSchema: TypedSchema<PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit> = typed<PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit>(object({
  customMandateUrl: optional(string()),
  intervalDescription: optional(string()),
  paymentSchedule: optional(string()),
  transactionType: optional(string()),
}));