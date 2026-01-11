import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds } from './PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds';
import { PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import { PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemPriceData } from './PostCustomersCustomerSubscriptionsRequestItemsItemPriceData';
import { PostCustomersCustomerSubscriptionsRequestItemsItemPriceDataSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemPriceData';
/**
 * configuration_item_params
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemItemsItem {
  billingThresholds?: PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholds;
  discounts?: PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts;
  metadata?: PostAccountsRequestMetadataObject;
  price?: string;
  /**
   * recurring_price_data
   */
  priceData?: PostCustomersCustomerSubscriptionsRequestItemsItemPriceData;
  quantity?: number;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
}

export const PostInvoicesCreatePreviewRequestPhasesItemItemsItemSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemItemsItem> = typed<PostInvoicesCreatePreviewRequestPhasesItemItemsItem>(object({
  get billingThresholds() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemBillingThresholdsSchema) },
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  price: optional(string()),
  get priceData() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemPriceDataSchema) },
  quantity: optional(number()),
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
}));