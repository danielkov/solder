import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestOnBehalfOf = string | string;

export const PostQuotesRequestOnBehalfOfSchema: TypedSchema<PostQuotesRequestOnBehalfOf> = typed<PostQuotesRequestOnBehalfOf>(union(string(), string()));