import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent } from './BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent';
import { BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParentSchema } from './BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent';
import type { BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent } from './BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent';
import { BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParentSchema } from './BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent';
/**
 * BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent
 *
 * 
 */
export interface BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent {
  /**
   * Details about the invoice item that generated this line item
   */
  invoiceItemDetails?: BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParent;
  /**
   * Details about the subscription item that generated this line item
   */
  subscriptionItemDetails?: BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParent;
  /**
   * The type of parent that generated this line item
   */
  type: string;
}

export const BillingBillResourceInvoicingLinesParentsInvoiceLineItemParentSchema: TypedSchema<BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent> = typed<BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent>(object({
  get invoiceItemDetails() { return optional(BillingBillResourceInvoicingLinesParentsInvoiceLineItemInvoiceItemParentSchema) },
  get subscriptionItemDetails() { return optional(BillingBillResourceInvoicingLinesParentsInvoiceLineItemSubscriptionItemParentSchema) },
  type: string(),
}));