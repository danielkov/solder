import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * pending_invoice_item_interval_params
 */
export interface PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject {
  interval: string;
  intervalCount?: number;
}

export const PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject> = typed<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject>(object({
  interval: string(),
  intervalCount: optional(number()),
}));