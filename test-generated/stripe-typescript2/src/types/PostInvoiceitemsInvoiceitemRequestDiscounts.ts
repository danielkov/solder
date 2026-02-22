import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
/**
 * The coupons, promotion codes & existing discounts which apply to the invoice item or invoice line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
 */
export type PostInvoiceitemsInvoiceitemRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostInvoiceitemsInvoiceitemRequestDiscountsSchema: TypedSchema<PostInvoiceitemsInvoiceitemRequestDiscounts> = typed<PostInvoiceitemsInvoiceitemRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));
