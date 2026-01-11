import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingBillResourceInvoicingLinesCommonCreditedItems
 *
 * 
 */
export interface BillingBillResourceInvoicingLinesCommonCreditedItems {
  /**
   * Invoice containing the credited invoice line items
   */
  invoice: string;
  /**
   * Credited invoice line items
   */
  invoiceLineItems: Array<string>;
}

export const BillingBillResourceInvoicingLinesCommonCreditedItemsSchema: TypedSchema<BillingBillResourceInvoicingLinesCommonCreditedItems> = typed<BillingBillResourceInvoicingLinesCommonCreditedItems>(object({
  invoice: string(),
  invoiceLineItems: array(string()),
}));