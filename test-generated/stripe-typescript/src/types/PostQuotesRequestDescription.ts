import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostQuotesRequestDescription = string | string;

export const PostQuotesRequestDescriptionSchema: TypedSchema<PostQuotesRequestDescription> = typed<PostQuotesRequestDescription>(union(string(), string()));