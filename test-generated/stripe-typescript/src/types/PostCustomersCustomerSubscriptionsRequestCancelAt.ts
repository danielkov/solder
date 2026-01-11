import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsRequestCancelAt = number | string;

export const PostCustomersCustomerSubscriptionsRequestCancelAtSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestCancelAt> = typed<PostCustomersCustomerSubscriptionsRequestCancelAt>(union(number(), string()));