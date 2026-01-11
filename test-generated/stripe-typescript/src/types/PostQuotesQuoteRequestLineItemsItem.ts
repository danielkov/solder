import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import { PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import type { PostQuotesRequestLineItemsItemPriceData } from './PostQuotesRequestLineItemsItemPriceData';
import { PostQuotesRequestLineItemsItemPriceDataSchema } from './PostQuotesRequestLineItemsItemPriceData';
/**
 * line_item_update_params
 */
export interface PostQuotesQuoteRequestLineItemsItem {
  discounts?: PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts;
  id?: string;
  price?: string;
  /**
   * price_data
   */
  priceData?: PostQuotesRequestLineItemsItemPriceData;
  quantity?: number;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
}

export const PostQuotesQuoteRequestLineItemsItemSchema: TypedSchema<PostQuotesQuoteRequestLineItemsItem> = typed<PostQuotesQuoteRequestLineItemsItem>(object({
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema) },
  id: optional(string()),
  price: optional(string()),
  get priceData() { return optional(PostQuotesRequestLineItemsItemPriceDataSchema) },
  quantity: optional(number()),
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
}));