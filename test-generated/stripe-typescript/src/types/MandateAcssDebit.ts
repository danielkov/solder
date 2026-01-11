import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_acss_debit
 *
 * 
 */
export interface MandateAcssDebit {
  /**
   * List of Stripe products where this mandate can be selected automatically.
   */
  defaultFor?: Array<string>;
  /**
   * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
   */
  intervalDescription?: string;
  /**
   * Payment schedule for the mandate.
   */
  paymentSchedule: string;
  /**
   * Transaction type of the mandate.
   */
  transactionType: string;
}

export const MandateAcssDebitSchema: TypedSchema<MandateAcssDebit> = typed<MandateAcssDebit>(object({
  defaultFor: optional(array(string())),
  intervalDescription: optional(string()),
  paymentSchedule: string(),
  transactionType: string(),
}));