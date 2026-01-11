import { TypedSchema, string, typed, union, unknown } from '@speakeasy-api/tonic';
export type PostCustomersCustomerSubscriptionsRequestKonbini = any | string;

export const PostCustomersCustomerSubscriptionsRequestKonbiniSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestKonbini> = typed<PostCustomersCustomerSubscriptionsRequestKonbini>(union(unknown(), string()));