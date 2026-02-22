import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
 */
export type PostFileLinksLinkRequestExpiresAt = string | number | string;

export const PostFileLinksLinkRequestExpiresAtSchema: TypedSchema<PostFileLinksLinkRequestExpiresAt> = typed<PostFileLinksLinkRequestExpiresAt>(union(string(), number(), string()));
