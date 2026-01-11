import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd = string | number;

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEndSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd>(union(string(), number()));