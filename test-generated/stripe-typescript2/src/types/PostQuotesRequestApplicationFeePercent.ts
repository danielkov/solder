import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
 */
export type PostQuotesRequestApplicationFeePercent = number | string;

export const PostQuotesRequestApplicationFeePercentSchema: TypedSchema<PostQuotesRequestApplicationFeePercent> = typed<PostQuotesRequestApplicationFeePercent>(union(number(), string()));
