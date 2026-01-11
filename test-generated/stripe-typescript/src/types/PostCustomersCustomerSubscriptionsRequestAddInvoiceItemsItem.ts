import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriodSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceDataSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData';
/**
 * add_invoice_item_entry
 */
export interface PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem {
  discounts?: Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>;
  metadata?: PostAccountsRequestMetadataObject;
  /**
   * invoice_item_period
   */
  period?: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriod;
  price?: string;
  /**
   * one_time_price_data_with_negative_amounts
   */
  priceData?: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData;
  quantity?: number;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
}

export const PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem> = typed<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem>(object({
  get discounts() { return optional(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema)) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  get period() { return optional(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPeriodSchema) },
  price: optional(string()),
  get priceData() { return optional(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceDataSchema) },
  quantity: optional(number()),
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
}));