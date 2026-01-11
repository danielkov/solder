import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesQuoteRequestFooter = string | string;

export const PostQuotesQuoteRequestFooterSchema: TypedSchema<PostQuotesQuoteRequestFooter> = typed<PostQuotesQuoteRequestFooter>(union(string(), string()));