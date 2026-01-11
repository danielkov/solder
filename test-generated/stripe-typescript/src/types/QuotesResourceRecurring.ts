import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { QuotesResourceTotalDetails } from './QuotesResourceTotalDetails';
import { QuotesResourceTotalDetailsSchema } from './QuotesResourceTotalDetails';
/**
 * QuotesResourceRecurring
 *
 * 
 */
export interface QuotesResourceRecurring {
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
   */
  interval: string;
  /**
   * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
   */
  intervalCount: number;
  /**
   * QuotesResourceTotalDetails
   *
   * 
   */
  totalDetails: QuotesResourceTotalDetails;
}

export const QuotesResourceRecurringSchema: TypedSchema<QuotesResourceRecurring> = typed<QuotesResourceRecurring>(object({
  amountSubtotal: number(),
  amountTotal: number(),
  interval: string(),
  intervalCount: number(),
  totalDetails: QuotesResourceTotalDetailsSchema,
}));