import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity } from './PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity';
import { PostCheckoutSessionsRequestLineItemsItemAdjustableQuantitySchema } from './PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity';
import type { PostCheckoutSessionsRequestLineItemsItemPriceData } from './PostCheckoutSessionsRequestLineItemsItemPriceData';
import { PostCheckoutSessionsRequestLineItemsItemPriceDataSchema } from './PostCheckoutSessionsRequestLineItemsItemPriceData';
/**
 * line_item_params
 */
export interface PostCheckoutSessionsRequestLineItemsItem {
  /**
   * adjustable_quantity_params
   */
  adjustableQuantity?: PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity;
  dynamicTaxRates?: Array<string>;
  price?: string;
  /**
   * price_data_with_product_data
   */
  priceData?: PostCheckoutSessionsRequestLineItemsItemPriceData;
  quantity?: number;
  taxRates?: Array<string>;
}

export const PostCheckoutSessionsRequestLineItemsItemSchema: TypedSchema<PostCheckoutSessionsRequestLineItemsItem> = typed<PostCheckoutSessionsRequestLineItemsItem>(object({
  get adjustableQuantity() { return optional(PostCheckoutSessionsRequestLineItemsItemAdjustableQuantitySchema) },
  dynamicTaxRates: optional(array(string())),
  price: optional(string()),
  get priceData() { return optional(PostCheckoutSessionsRequestLineItemsItemPriceDataSchema) },
  quantity: optional(number()),
  taxRates: optional(array(string())),
}));