import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
 */
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt = number | string | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAtSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt>(union(number(), string(), string()));
