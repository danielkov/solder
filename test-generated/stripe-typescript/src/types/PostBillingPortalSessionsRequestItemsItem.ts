import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * subscription_update_confirm_item_params
 */
export interface PostBillingPortalSessionsRequestItemsItem {
  id: string;
  price?: string;
  quantity?: number;
}

export const PostBillingPortalSessionsRequestItemsItemSchema: TypedSchema<PostBillingPortalSessionsRequestItemsItem> = typed<PostBillingPortalSessionsRequestItemsItem>(object({
  id: string(),
  price: optional(string()),
  quantity: optional(number()),
}));