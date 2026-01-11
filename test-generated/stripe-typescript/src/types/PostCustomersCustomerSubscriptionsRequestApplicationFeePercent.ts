import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsRequestApplicationFeePercent = number | string;

export const PostCustomersCustomerSubscriptionsRequestApplicationFeePercentSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent> = typed<PostCustomersCustomerSubscriptionsRequestApplicationFeePercent>(union(number(), string()));