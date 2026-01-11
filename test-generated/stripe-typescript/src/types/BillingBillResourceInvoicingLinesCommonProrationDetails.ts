import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingLinesCommonCreditedItems } from './BillingBillResourceInvoicingLinesCommonCreditedItems';
import { BillingBillResourceInvoicingLinesCommonCreditedItemsSchema } from './BillingBillResourceInvoicingLinesCommonCreditedItems';
/**
 * BillingBillResourceInvoicingLinesCommonProrationDetails
 *
 * 
 */
export interface BillingBillResourceInvoicingLinesCommonProrationDetails {
  /**
   * For a credit proration `line_item`, the original debit line_items to which the credit proration applies.
   */
  creditedItems?: BillingBillResourceInvoicingLinesCommonCreditedItems;
}

export const BillingBillResourceInvoicingLinesCommonProrationDetailsSchema: TypedSchema<BillingBillResourceInvoicingLinesCommonProrationDetails> = typed<BillingBillResourceInvoicingLinesCommonProrationDetails>(object({
  get creditedItems() { return optional(BillingBillResourceInvoicingLinesCommonCreditedItemsSchema) },
}));