import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource = string | string;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSourceSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource>(union(string(), string()));