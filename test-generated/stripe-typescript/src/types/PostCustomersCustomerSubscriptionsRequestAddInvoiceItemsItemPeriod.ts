import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEndSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStartSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart';
/**
 * invoice_item_period
 */
export interface PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod {
  /**
   * invoice_item_period_end
   */
  end: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEnd;
  /**
   * invoice_item_period_start
   */
  start: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStart;
}

export const PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriodSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod> = typed<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod>(object({
  end: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemEndSchema,
  start: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemStartSchema,
}));