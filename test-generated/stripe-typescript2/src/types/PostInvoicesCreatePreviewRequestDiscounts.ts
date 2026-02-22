import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
/**
 * The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the subscription or customer. This works for both coupons directly applied to an invoice and coupons applied to a subscription. Pass an empty string to avoid inheriting any discounts.
 */
export type PostInvoicesCreatePreviewRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostInvoicesCreatePreviewRequestDiscountsSchema: TypedSchema<PostInvoicesCreatePreviewRequestDiscounts> = typed<PostInvoicesCreatePreviewRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));
