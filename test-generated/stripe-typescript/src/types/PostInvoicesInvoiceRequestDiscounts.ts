import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
export type PostInvoicesInvoiceRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostInvoicesInvoiceRequestDiscountsSchema: TypedSchema<PostInvoicesInvoiceRequestDiscounts> = typed<PostInvoicesInvoiceRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));