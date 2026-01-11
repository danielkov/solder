import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingBillResourceInvoicingParentsInvoiceQuoteParent
 *
 * 
 */
export interface BillingBillResourceInvoicingParentsInvoiceQuoteParent {
  /**
   * The quote that generated this invoice
   */
  quote: string;
}

export const BillingBillResourceInvoicingParentsInvoiceQuoteParentSchema: TypedSchema<BillingBillResourceInvoicingParentsInvoiceQuoteParent> = typed<BillingBillResourceInvoicingParentsInvoiceQuoteParent>(object({
  quote: string(),
}));