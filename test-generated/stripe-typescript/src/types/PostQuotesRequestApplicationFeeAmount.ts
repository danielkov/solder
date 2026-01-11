import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestApplicationFeeAmount = number | string;

export const PostQuotesRequestApplicationFeeAmountSchema: TypedSchema<PostQuotesRequestApplicationFeeAmount> = typed<PostQuotesRequestApplicationFeeAmount>(union(number(), string()));