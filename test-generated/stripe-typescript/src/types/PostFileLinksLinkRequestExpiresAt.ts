import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type PostFileLinksLinkRequestExpiresAt = string | number | string;

export const PostFileLinksLinkRequestExpiresAtSchema: TypedSchema<PostFileLinksLinkRequestExpiresAt> = typed<PostFileLinksLinkRequestExpiresAt>(union(string(), number(), string()));