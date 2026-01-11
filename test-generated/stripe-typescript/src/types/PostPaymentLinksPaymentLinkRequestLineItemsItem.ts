import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity } from './PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity';
import { PostCheckoutSessionsRequestLineItemsItemAdjustableQuantitySchema } from './PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity';
/**
 * line_items_update_params
 */
export interface PostPaymentLinksPaymentLinkRequestLineItemsItem {
  /**
   * adjustable_quantity_params
   */
  adjustableQuantity?: PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity;
  id: string;
  quantity?: number;
}

export const PostPaymentLinksPaymentLinkRequestLineItemsItemSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestLineItemsItem> = typed<PostPaymentLinksPaymentLinkRequestLineItemsItem>(object({
  get adjustableQuantity() { return optional(PostCheckoutSessionsRequestLineItemsItemAdjustableQuantitySchema) },
  id: string(),
  quantity: optional(number()),
}));