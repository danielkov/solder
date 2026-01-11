import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt = number | string | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAtSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt>(union(number(), string(), string()));