import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity } from './PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity';
import { PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantitySchema } from './PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity';
/**
 * optional_item_params
 */
export interface PostCheckoutSessionsRequestOptionalItemsItem {
  /**
   * optional_item_adjustable_quantity_params
   */
  adjustableQuantity?: PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity;
  price: string;
  quantity: number;
}

export const PostCheckoutSessionsRequestOptionalItemsItemSchema: TypedSchema<PostCheckoutSessionsRequestOptionalItemsItem> = typed<PostCheckoutSessionsRequestOptionalItemsItem>(object({
  get adjustableQuantity() { return optional(PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantitySchema) },
  price: string(),
  quantity: number(),
}));