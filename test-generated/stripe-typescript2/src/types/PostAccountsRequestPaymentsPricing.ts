import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostAccountsRequestPaymentsPricing = string | string;

export const PostAccountsRequestPaymentsPricingSchema: TypedSchema<PostAccountsRequestPaymentsPricing> = typed<PostAccountsRequestPaymentsPricing>(union(string(), string()));
