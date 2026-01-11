import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
export type PostQuotesRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostQuotesRequestDiscountsSchema: TypedSchema<PostQuotesRequestDiscounts> = typed<PostQuotesRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));