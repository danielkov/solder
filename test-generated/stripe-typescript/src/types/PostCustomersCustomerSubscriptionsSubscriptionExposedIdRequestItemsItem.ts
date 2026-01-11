import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds } from './PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds';
import { PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import { PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemPriceData } from './PostCustomersCustomerSubscriptionsRequestItemsItemPriceData';
import { PostCustomersCustomerSubscriptionsRequestItemsItemPriceDataSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemPriceData';
/**
 * subscription_item_update_params
 */
export interface PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem {
  billingThresholds?: PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds;
  clearUsage?: boolean;
  deleted?: boolean;
  discounts?: PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts;
  id?: string;
  metadata?: PostAccountsRequestMetadata;
  price?: string;
  /**
   * recurring_price_data
   */
  priceData?: PostCustomersCustomerSubscriptionsRequestItemsItemPriceData;
  quantity?: number;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
}

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItemSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem>(object({
  get billingThresholds() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsSchema) },
  clearUsage: optional(boolean()),
  deleted: optional(boolean()),
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema) },
  id: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  price: optional(string()),
  get priceData() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemPriceDataSchema) },
  quantity: optional(number()),
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
}));