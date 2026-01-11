import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
export type PostInvoiceitemsRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostInvoiceitemsRequestDiscountsSchema: TypedSchema<PostInvoiceitemsRequestDiscounts> = typed<PostInvoiceitemsRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));