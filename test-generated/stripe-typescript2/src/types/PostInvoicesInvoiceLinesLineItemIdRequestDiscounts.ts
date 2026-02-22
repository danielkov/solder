import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
/**
 * The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
 */
export type PostInvoicesInvoiceLinesLineItemIdRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostInvoicesInvoiceLinesLineItemIdRequestDiscountsSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequestDiscounts> = typed<PostInvoicesInvoiceLinesLineItemIdRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));
