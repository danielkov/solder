import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * pause_collection_param
 */
export interface PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject {
  behavior: string;
  resumesAt?: number;
}

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject>(object({
  behavior: string(),
  resumesAt: optional(number()),
}));