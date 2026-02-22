import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObjectSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject';
/**
 * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
 */
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection = PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObject | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection>(union(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionObjectSchema, string()));
