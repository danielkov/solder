import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestFooter = string | string;

export const PostQuotesRequestFooterSchema: TypedSchema<PostQuotesRequestFooter> = typed<PostQuotesRequestFooter>(union(string(), string()));