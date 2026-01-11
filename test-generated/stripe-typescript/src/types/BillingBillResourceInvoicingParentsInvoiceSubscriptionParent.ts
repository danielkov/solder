import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { SubscriptionOrRef } from './SubscriptionOrRef';
import { SubscriptionOrRefSchema } from './SubscriptionOrRef';
/**
 * BillingBillResourceInvoicingParentsInvoiceSubscriptionParent
 *
 * 
 */
export interface BillingBillResourceInvoicingParentsInvoiceSubscriptionParent {
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) defined as subscription metadata when an invoice is created. Becomes an immutable snapshot of the subscription metadata at the time of invoice finalization.
 *Note: This attribute is populated only for invoices created on or after June 29, 2023.*
   */
  metadata?: MetadataProperty;
  /**
   * The subscription that generated this invoice
   */
  subscription: SubscriptionOrRef;
  /**
   * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
   */
  subscriptionProrationDate?: number;
}

export const BillingBillResourceInvoicingParentsInvoiceSubscriptionParentSchema: TypedSchema<BillingBillResourceInvoicingParentsInvoiceSubscriptionParent> = typed<BillingBillResourceInvoicingParentsInvoiceSubscriptionParent>(object({
  get metadata() { return optional(MetadataPropertySchema) },
  subscription: SubscriptionOrRefSchema,
  subscriptionProrationDate: optional(number()),
}));