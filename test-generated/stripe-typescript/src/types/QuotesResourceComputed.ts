import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { QuotesResourceRecurring } from './QuotesResourceRecurring';
import { QuotesResourceRecurringSchema } from './QuotesResourceRecurring';
import type { QuotesResourceUpfront } from './QuotesResourceUpfront';
import { QuotesResourceUpfrontSchema } from './QuotesResourceUpfront';
/**
 * QuotesResourceComputed
 *
 * 
 */
export interface QuotesResourceComputed {
  /**
   * The definitive totals and line items the customer will be charged on a recurring basis. Takes into account the line items with recurring prices and discounts with `duration=forever` coupons only. Defaults to `null` if no inputted line items with recurring prices.
   */
  recurring?: QuotesResourceRecurring;
  /**
   * QuotesResourceUpfront
   *
   * 
   */
  upfront: QuotesResourceUpfront;
}

export const QuotesResourceComputedSchema: TypedSchema<QuotesResourceComputed> = typed<QuotesResourceComputed>(object({
  get recurring() { return optional(QuotesResourceRecurringSchema) },
  upfront: QuotesResourceUpfrontSchema,
}));