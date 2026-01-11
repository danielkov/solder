import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { SubscriptionItem } from './SubscriptionItem';
import { SubscriptionItemSchema } from './SubscriptionItem';
/**
 * SubscriptionsItemsSubscriptionItemList
 *
 * 
 */
export interface GetSubscriptionItemsResponse {
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

export const GetSubscriptionItemsResponseSchema: TypedSchema<GetSubscriptionItemsResponse> = typed<GetSubscriptionItemsResponse>(object({
  data: array(SubscriptionItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));