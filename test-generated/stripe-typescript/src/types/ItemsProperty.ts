import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { SubscriptionItem } from './SubscriptionItem';
import { SubscriptionItemSchema } from './SubscriptionItem';
/**
 * SubscriptionItemList
 *
 * List of subscription items, each with an attached price.
 */
export interface ItemsProperty {
  /**
   * Details about each object.
   */
  data: Array<SubscriptionItem>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const ItemsPropertySchema: TypedSchema<ItemsProperty> = typed<ItemsProperty>(object({
  data: array(SubscriptionItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));