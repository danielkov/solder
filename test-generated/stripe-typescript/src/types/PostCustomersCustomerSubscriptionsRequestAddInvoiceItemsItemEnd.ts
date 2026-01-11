import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_item_period_end
 */
export interface PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd {
  timestamp?: number;
  type: string;
}

export const PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEndSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd> = typed<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd>(object({
  timestamp: optional(number()),
  type: string(),
}));