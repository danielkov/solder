import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_item_period_start
 */
export interface PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart {
  timestamp?: number;
  type: string;
}

export const PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStartSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart> = typed<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart>(object({
  timestamp: optional(number()),
  type: string(),
}));