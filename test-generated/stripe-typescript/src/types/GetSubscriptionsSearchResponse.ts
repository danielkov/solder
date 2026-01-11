import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Subscription } from './Subscription';
import { SubscriptionSchema } from './Subscription';
/**
 * SearchResult
 *
 * 
 */
export interface GetSubscriptionsSearchResponse {
  data: Array<Subscription>;
  hasMore: boolean;
  nextPage?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The total number of objects that match the query, only accurate up to 10,000.
   */
  totalCount?: number;
  url: string;
}

export const GetSubscriptionsSearchResponseSchema: TypedSchema<GetSubscriptionsSearchResponse> = typed<GetSubscriptionsSearchResponse>(object({
  data: array(SubscriptionSchema),
  hasMore: boolean(),
  nextPage: optional(string()),
  object: string(),
  totalCount: optional(number()),
  url: string(),
}));