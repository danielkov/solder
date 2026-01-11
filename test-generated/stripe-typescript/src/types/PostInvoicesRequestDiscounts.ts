import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
export type PostInvoicesRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostInvoicesRequestDiscountsSchema: TypedSchema<PostInvoicesRequestDiscounts> = typed<PostInvoicesRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));