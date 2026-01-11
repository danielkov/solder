import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * adjustable_quantity_params
 */
export interface PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity {
  enabled: boolean;
  maximum?: number;
  minimum?: number;
}

export const PostCheckoutSessionsRequestLineItemsItemAdjustableQuantitySchema: TypedSchema<PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity> = typed<PostCheckoutSessionsRequestLineItemsItemAdjustableQuantity>(object({
  enabled: boolean(),
  maximum: optional(number()),
  minimum: optional(number()),
}));