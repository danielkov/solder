import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { LineItemsProperty } from './LineItemsProperty';
import { LineItemsPropertySchema } from './LineItemsProperty';
import type { QuotesResourceTotalDetails } from './QuotesResourceTotalDetails';
import { QuotesResourceTotalDetailsSchema } from './QuotesResourceTotalDetails';
/**
 * QuotesResourceUpfront
 *
 * 
 */
export interface QuotesResourceUpfront {
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * QuotesResourceListLineItems
   *
   * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
   */
  lineItems?: LineItemsProperty;
  /**
   * QuotesResourceTotalDetails
   *
   * 
   */
  totalDetails: QuotesResourceTotalDetails;
}

export const QuotesResourceUpfrontSchema: TypedSchema<QuotesResourceUpfront> = typed<QuotesResourceUpfront>(object({
  amountSubtotal: number(),
  amountTotal: number(),
  get lineItems() { return optional(LineItemsPropertySchema) },
  totalDetails: QuotesResourceTotalDetailsSchema,
}));