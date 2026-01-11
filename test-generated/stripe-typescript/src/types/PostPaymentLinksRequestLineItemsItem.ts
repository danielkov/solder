import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity } from './PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity';
import { PostCheckoutSessionsRequestLineItemsItemAdjustableQuantitySchema } from './PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity';
import type { PostPaymentLinksRequestLineItemsItemPriceData } from './PostPaymentLinksRequestLineItemsItemPriceData';
import { PostPaymentLinksRequestLineItemsItemPriceDataSchema } from './PostPaymentLinksRequestLineItemsItemPriceData';
/**
 * line_items_create_params
 */
export interface PostPaymentLinksRequestLineItemsItem {
  /**
   * adjustable_quantity_params
   */
  adjustableQuantity?: PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity;
  price?: string;
  /**
   * custom_amount_price_data_with_product_data
   */
  priceData?: PostPaymentLinksRequestLineItemsItemPriceData;
  quantity: number;
}

export const PostPaymentLinksRequestLineItemsItemSchema: TypedSchema<PostPaymentLinksRequestLineItemsItem> = typed<PostPaymentLinksRequestLineItemsItem>(object({
  get adjustableQuantity() { return optional(PostCheckoutSessionsRequestLineItemsItemAdjustableQuantitySchema) },
  price: optional(string()),
  get priceData() { return optional(PostPaymentLinksRequestLineItemsItemPriceDataSchema) },
  quantity: number(),
}));