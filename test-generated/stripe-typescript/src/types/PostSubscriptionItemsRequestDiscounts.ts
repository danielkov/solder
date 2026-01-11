import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
export type PostSubscriptionItemsRequestDiscounts = Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem> | string;

export const PostSubscriptionItemsRequestDiscountsSchema: TypedSchema<PostSubscriptionItemsRequestDiscounts> = typed<PostSubscriptionItemsRequestDiscounts>(union(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema), string()));