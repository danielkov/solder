import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * SubscriptionPendingInvoiceItemInterval
 *
 * 
 */
export interface SubscriptionPendingInvoiceItemInterval {
  /**
   * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
   */
  interval: string;
  /**
   * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
   */
  intervalCount: number;
}

export const SubscriptionPendingInvoiceItemIntervalSchema: TypedSchema<SubscriptionPendingInvoiceItemInterval> = typed<SubscriptionPendingInvoiceItemInterval>(object({
  interval: string(),
  intervalCount: number(),
}));