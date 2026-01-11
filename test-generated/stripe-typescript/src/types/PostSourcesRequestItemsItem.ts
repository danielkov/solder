import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * order_item_specs
 */
export interface PostSourcesRequestItemsItem {
  amount?: number;
  currency?: string;
  description?: string;
  parent?: string;
  quantity?: number;
  type?: string;
}

export const PostSourcesRequestItemsItemSchema: TypedSchema<PostSourcesRequestItemsItem> = typed<PostSourcesRequestItemsItem>(object({
  amount: optional(number()),
  currency: optional(string()),
  description: optional(string()),
  parent: optional(string()),
  quantity: optional(number()),
  type: optional(string()),
}));