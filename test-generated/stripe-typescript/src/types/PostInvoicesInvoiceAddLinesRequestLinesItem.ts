import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import { PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import type { PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod } from './PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod';
import { PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriodSchema } from './PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod';
import type { PostInvoicesInvoiceAddLinesRequestLinesItemPriceData } from './PostInvoicesInvoiceAddLinesRequestLinesItemPriceData';
import { PostInvoicesInvoiceAddLinesRequestLinesItemPriceDataSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItemPriceData';
import type { PostInvoicesInvoiceAddLinesRequestLinesItemPricing } from './PostInvoicesInvoiceAddLinesRequestLinesItemPricing';
import { PostInvoicesInvoiceAddLinesRequestLinesItemPricingSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItemPricing';
import type { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts';
import { PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsSchema } from './PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts';
/**
 * lines_data_param
 */
export interface PostInvoicesInvoiceAddLinesRequestLinesItem {
  amount?: number;
  description?: string;
  discountable?: boolean;
  discounts?: PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts;
  invoiceItem?: string;
  metadata?: PostAccountsRequestMetadata;
  /**
   * period
   */
  period?: PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriod;
  /**
   * one_time_price_data_with_product_data
   */
  priceData?: PostInvoicesInvoiceAddLinesRequestLinesItemPriceData;
  /**
   * pricing_param
   */
  pricing?: PostInvoicesInvoiceAddLinesRequestLinesItemPricing;
  quantity?: number;
  taxAmounts?: PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmounts;
  taxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
}

export const PostInvoicesInvoiceAddLinesRequestLinesItemSchema: TypedSchema<PostInvoicesInvoiceAddLinesRequestLinesItem> = typed<PostInvoicesInvoiceAddLinesRequestLinesItem>(object({
  amount: optional(number()),
  description: optional(string()),
  discountable: optional(boolean()),
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema) },
  invoiceItem: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  get period() { return optional(PostInvoicesCreatePreviewRequestInvoiceItemsItemPeriodSchema) },
  get priceData() { return optional(PostInvoicesInvoiceAddLinesRequestLinesItemPriceDataSchema) },
  get pricing() { return optional(PostInvoicesInvoiceAddLinesRequestLinesItemPricingSchema) },
  quantity: optional(number()),
  get taxAmounts() { return optional(PostInvoicesInvoiceAddLinesRequestLinesItemTaxAmountsSchema) },
  get taxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
}));