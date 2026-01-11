import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingParentsInvoiceQuoteParent } from './BillingBillResourceInvoicingParentsInvoiceQuoteParent';
import { BillingBillResourceInvoicingParentsInvoiceQuoteParentSchema } from './BillingBillResourceInvoicingParentsInvoiceQuoteParent';
import type { BillingBillResourceInvoicingParentsInvoiceSubscriptionParent } from './BillingBillResourceInvoicingParentsInvoiceSubscriptionParent';
import { BillingBillResourceInvoicingParentsInvoiceSubscriptionParentSchema } from './BillingBillResourceInvoicingParentsInvoiceSubscriptionParent';
/**
 * BillingBillResourceInvoicingParentsInvoiceParent
 *
 * 
 */
export interface BillingBillResourceInvoicingParentsInvoiceParent {
  /**
   * Details about the quote that generated this invoice
   */
  quoteDetails?: BillingBillResourceInvoicingParentsInvoiceQuoteParent;
  /**
   * Details about the subscription that generated this invoice
   */
  subscriptionDetails?: BillingBillResourceInvoicingParentsInvoiceSubscriptionParent;
  /**
   * The type of parent that generated this invoice
   */
  type: string;
}

export const BillingBillResourceInvoicingParentsInvoiceParentSchema: TypedSchema<BillingBillResourceInvoicingParentsInvoiceParent> = typed<BillingBillResourceInvoicingParentsInvoiceParent>(object({
  get quoteDetails() { return optional(BillingBillResourceInvoicingParentsInvoiceQuoteParentSchema) },
  get subscriptionDetails() { return optional(BillingBillResourceInvoicingParentsInvoiceSubscriptionParentSchema) },
  type: string(),
}));