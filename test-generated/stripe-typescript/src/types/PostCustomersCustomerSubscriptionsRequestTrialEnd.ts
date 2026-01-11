import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsRequestTrialEnd = string | number;

export const PostCustomersCustomerSubscriptionsRequestTrialEndSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestTrialEnd> = typed<PostCustomersCustomerSubscriptionsRequestTrialEnd>(union(string(), number()));