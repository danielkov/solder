import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemProductData } from './PostCheckoutSessionsRequestLineItemsItemProductData';
import { PostCheckoutSessionsRequestLineItemsItemProductDataSchema } from './PostCheckoutSessionsRequestLineItemsItemProductData';
import type { PostCheckoutSessionsRequestLineItemsItemRecurring } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
import { PostCheckoutSessionsRequestLineItemsItemRecurringSchema } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
/**
 * custom_amount_price_data_with_product_data
 */
export interface PostPaymentLinksRequestLineItemsItemPriceData {
  currency: string;
  product?: string;
  /**
   * product_data
   */
  productData?: PostCheckoutSessionsRequestLineItemsItemProductData;
  /**
   * recurring_adhoc
   */
  recurring?: PostCheckoutSessionsRequestLineItemsItemRecurring;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostPaymentLinksRequestLineItemsItemPriceDataSchema: TypedSchema<PostPaymentLinksRequestLineItemsItemPriceData> = typed<PostPaymentLinksRequestLineItemsItemPriceData>(object({
  currency: string(),
  product: optional(string()),
  get productData() { return optional(PostCheckoutSessionsRequestLineItemsItemProductDataSchema) },
  get recurring() { return optional(PostCheckoutSessionsRequestLineItemsItemRecurringSchema) },
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));