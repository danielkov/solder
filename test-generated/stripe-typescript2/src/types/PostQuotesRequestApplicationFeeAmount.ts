import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
 */
export type PostQuotesRequestApplicationFeeAmount = number | string;

export const PostQuotesRequestApplicationFeeAmountSchema: TypedSchema<PostQuotesRequestApplicationFeeAmount> = typed<PostQuotesRequestApplicationFeeAmount>(union(number(), string()));
