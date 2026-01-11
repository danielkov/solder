import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesQuoteRequestDescription = string | string;

export const PostQuotesQuoteRequestDescriptionSchema: TypedSchema<PostQuotesQuoteRequestDescription> = typed<PostQuotesQuoteRequestDescription>(union(string(), string()));