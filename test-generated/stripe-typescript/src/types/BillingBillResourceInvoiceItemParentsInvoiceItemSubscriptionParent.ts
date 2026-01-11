import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent
 *
 * 
 */
export interface BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent {
  /**
   * The subscription that generated this invoice item
   */
  subscription: string;
  /**
   * The subscription item that generated this invoice item
   */
  subscriptionItem?: string;
}

export const BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParentSchema: TypedSchema<BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent> = typed<BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent>(object({
  subscription: string(),
  subscriptionItem: optional(string()),
}));