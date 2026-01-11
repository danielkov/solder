import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingLinesCommonProrationDetails } from './BillingBillResourceInvoicingLinesCommonProrationDetails';
import { BillingBillResourceInvoicingLinesCommonProrationDetailsSchema } from './BillingBillResourceInvoicingLinesCommonProrationDetails';
/**
 * BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent
 *
 * 
 */
export interface BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent {
  /**
   * The invoice item that generated this line item
   */
  invoiceItem: string;
  /**
   * Whether this is a proration
   */
  proration: boolean;
  /**
   * Additional details for proration line items
   */
  prorationDetails?: BillingBillResourceInvoicingLinesCommonProrationDetails;
  /**
   * The subscription that the invoice item belongs to
   */
  subscription?: string;
}

export const BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParentSchema: TypedSchema<BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent> = typed<BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent>(object({
  invoiceItem: string(),
  proration: boolean(),
  get prorationDetails() { return optional(BillingBillResourceInvoicingLinesCommonProrationDetailsSchema) },
  subscription: optional(string()),
}));