import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingLinesCommonProrationDetails } from './BillingBillResourceInvoicingLinesCommonProrationDetails';
import { BillingBillResourceInvoicingLinesCommonProrationDetailsSchema } from './BillingBillResourceInvoicingLinesCommonProrationDetails';
/**
 * BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent
 *
 * 
 */
export interface BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent {
  /**
   * The invoice item that generated this line item
   */
  invoiceItem?: string;
  /**
   * Whether this is a proration
   */
  proration: boolean;
  /**
   * Additional details for proration line items
   */
  prorationDetails?: BillingBillResourceInvoicingLinesCommonProrationDetails;
  /**
   * The subscription that the subscription item belongs to
   */
  subscription?: string;
  /**
   * The subscription item that generated this line item
   */
  subscriptionItem: string;
}

export const BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParentSchema: TypedSchema<BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent> = typed<BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent>(object({
  invoiceItem: optional(string()),
  proration: boolean(),
  get prorationDetails() { return optional(BillingBillResourceInvoicingLinesCommonProrationDetailsSchema) },
  subscription: optional(string()),
  subscriptionItem: string(),
}));