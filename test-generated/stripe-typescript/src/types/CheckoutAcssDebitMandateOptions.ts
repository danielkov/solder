import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CheckoutAcssDebitMandateOptions
 *
 * 
 */
export interface CheckoutAcssDebitMandateOptions {
  /**
   * A URL for custom mandate text
   */
  customMandateUrl?: string;
  /**
   * List of Stripe products where this mandate can be selected automatically. Returned when the Session is in `setup` mode.
   */
  defaultFor?: Array<string>;
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

export const CheckoutAcssDebitMandateOptionsSchema: TypedSchema<CheckoutAcssDebitMandateOptions> = typed<CheckoutAcssDebitMandateOptions>(object({
  customMandateUrl: optional(string()),
  defaultFor: optional(array(string())),
  intervalDescription: optional(string()),
  paymentSchedule: optional(string()),
  transactionType: optional(string()),
}));