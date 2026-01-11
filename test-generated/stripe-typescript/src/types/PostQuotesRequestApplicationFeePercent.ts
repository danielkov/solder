import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestApplicationFeePercent = number | string;

export const PostQuotesRequestApplicationFeePercentSchema: TypedSchema<PostQuotesRequestApplicationFeePercent> = typed<PostQuotesRequestApplicationFeePercent>(union(number(), string()));