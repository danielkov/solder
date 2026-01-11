import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent } from './BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent';
import { BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParentSchema } from './BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent';
/**
 * BillingBillResourceInvoiceItemParentsInvoiceItemParent
 *
 * 
 */
export interface BillingBillResourceInvoiceItemParentsInvoiceItemParent {
  /**
   * Details about the subscription that generated this invoice item
   */
  subscriptionDetails?: BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent;
  /**
   * The type of parent that generated this invoice item
   */
  type: string;
}

export const BillingBillResourceInvoiceItemParentsInvoiceItemParentSchema: TypedSchema<BillingBillResourceInvoiceItemParentsInvoiceItemParent> = typed<BillingBillResourceInvoiceItemParentsInvoiceItemParent>(object({
  get subscriptionDetails() { return optional(BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParentSchema) },
  type: string(),
}));