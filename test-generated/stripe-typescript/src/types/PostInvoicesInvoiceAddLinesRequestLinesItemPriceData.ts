import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemProductData } from './PostCheckoutSessionsRequestLineItemsItemProductData';
import { PostCheckoutSessionsRequestLineItemsItemProductDataSchema } from './PostCheckoutSessionsRequestLineItemsItemProductData';
/**
 * one_time_price_data_with_product_data
 */
export interface PostInvoicesInvoiceAddLinesRequestLinesItemPriceData {
  currency: string;
  product?: string;
  /**
   * product_data
   */
  productData?: PostCheckoutSessionsRequestLineItemsItemProductData;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostInvoicesInvoiceAddLinesRequestLinesItemPriceDataSchema: TypedSchema<PostInvoicesInvoiceAddLinesRequestLinesItemPriceData> = typed<PostInvoicesInvoiceAddLinesRequestLinesItemPriceData>(object({
  currency: string(),
  product: optional(string()),
  get productData() { return optional(PostCheckoutSessionsRequestLineItemsItemProductDataSchema) },
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));