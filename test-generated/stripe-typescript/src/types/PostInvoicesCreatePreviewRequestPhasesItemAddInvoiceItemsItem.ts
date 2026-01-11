import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceDataSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData';
import type { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod';
import { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriodSchema } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod';
/**
 * add_invoice_item_entry
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem {
  discounts?: Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItem>;
  metadata?: PostAccountsRequestMetadataObject;
  /**
   * invoice_item_period
   */
  period?: PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriod;
  price?: string;
  /**
   * one_time_price_data_with_negative_amounts
   */
  priceData?: PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceData;
  quantity?: number;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
}

export const PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem> = typed<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem>(object({
  get discounts() { return optional(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemDiscountsItemSchema)) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  get period() { return optional(PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemPeriodSchema) },
  price: optional(string()),
  get priceData() { return optional(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemPriceDataSchema) },
  quantity: optional(number()),
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
}));