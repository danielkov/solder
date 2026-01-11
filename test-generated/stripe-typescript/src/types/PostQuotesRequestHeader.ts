import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestHeader = string | string;

export const PostQuotesRequestHeaderSchema: TypedSchema<PostQuotesRequestHeader> = typed<PostQuotesRequestHeader>(union(string(), string()));