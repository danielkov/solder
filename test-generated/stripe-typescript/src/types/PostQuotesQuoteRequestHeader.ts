import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesQuoteRequestHeader = string | string;

export const PostQuotesQuoteRequestHeaderSchema: TypedSchema<PostQuotesQuoteRequestHeader> = typed<PostQuotesQuoteRequestHeader>(union(string(), string()));