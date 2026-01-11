import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { QuotesResourceTotalDetailsResourceBreakdown } from './QuotesResourceTotalDetailsResourceBreakdown';
import { QuotesResourceTotalDetailsResourceBreakdownSchema } from './QuotesResourceTotalDetailsResourceBreakdown';
/**
 * QuotesResourceTotalDetails
 *
 * 
 */
export interface QuotesResourceTotalDetails {
  /**
   * This is the sum of all the discounts.
   */
  amountDiscount: number;
  /**
   * This is the sum of all the shipping amounts.
   */
  amountShipping?: number;
  /**
   * This is the sum of all the tax amounts.
   */
  amountTax: number;
  /**
   * QuotesResourceTotalDetailsResourceBreakdown
   *
   * 
   */
  breakdown?: QuotesResourceTotalDetailsResourceBreakdown;
}

export const QuotesResourceTotalDetailsSchema: TypedSchema<QuotesResourceTotalDetails> = typed<QuotesResourceTotalDetails>(object({
  amountDiscount: number(),
  amountShipping: optional(number()),
  amountTax: number(),
  get breakdown() { return optional(QuotesResourceTotalDetailsResourceBreakdownSchema) },
}));