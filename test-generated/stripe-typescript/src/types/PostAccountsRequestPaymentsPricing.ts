import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostAccountsRequestPaymentsPricing = string | string;

export const PostAccountsRequestPaymentsPricingSchema: TypedSchema<PostAccountsRequestPaymentsPricing> = typed<PostAccountsRequestPaymentsPricing>(union(string(), string()));