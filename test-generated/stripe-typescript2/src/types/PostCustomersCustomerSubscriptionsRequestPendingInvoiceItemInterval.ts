import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject } from './PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject';
import { PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObjectSchema } from './PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject';
/**
 * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
 */
export type PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval = PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObject | string;

export const PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval> = typed<PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval>(union(PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalObjectSchema, string()));
