import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import { PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import type { PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod } from './PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod';
import { PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriodSchema } from './PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod';
import type { PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData } from './PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData';
import { PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceDataSchema } from './PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData';
/**
 * invoice_item_preview_params
 */
export interface PostInvoicesCreatePreviewRequestInvoiceItemsItem {
  amount?: number;
  currency?: string;
  description?: string;
  discountable?: boolean;
  discounts?: PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts;
  invoiceitem?: string;
  metadata?: PostAccountsRequestMetadata;
  /**
   * period
   */
  period?: PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod;
  price?: string;
  /**
   * one_time_price_data
   */
  priceData?: PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceData;
  quantity?: number;
  taxBehavior?: string;
  taxCode?: PostAccountsRequestSupportUrl;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostInvoicesCreatePreviewRequestInvoiceItemsItemSchema: TypedSchema<PostInvoicesCreatePreviewRequestInvoiceItemsItem> = typed<PostInvoicesCreatePreviewRequestInvoiceItemsItem>(object({
  amount: optional(number()),
  currency: optional(string()),
  description: optional(string()),
  discountable: optional(boolean()),
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema) },
  invoiceitem: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  get period() { return optional(PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriodSchema) },
  price: optional(string()),
  get priceData() { return optional(PostInvoicesCreatePreviewRequestInvoiceItemsItemPriceDataSchema) },
  quantity: optional(number()),
  taxBehavior: optional(string()),
  get taxCode() { return optional(PostAccountsRequestSupportUrlSchema) },
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));