import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * optional_item_adjustable_quantity_params
 */
export interface PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity {
  enabled: boolean;
  maximum?: number;
  minimum?: number;
}

export const PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantitySchema: TypedSchema<PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity> = typed<PostCheckoutSessionsRequestOptionalItemsItemAdjustableQuantity>(object({
  enabled: boolean(),
  maximum: optional(number()),
  minimum: optional(number()),
}));