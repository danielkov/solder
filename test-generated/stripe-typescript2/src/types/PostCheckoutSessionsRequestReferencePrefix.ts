import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostCheckoutSessionsRequestReferencePrefix = string | string;

export const PostCheckoutSessionsRequestReferencePrefixSchema: TypedSchema<PostCheckoutSessionsRequestReferencePrefix> = typed<PostCheckoutSessionsRequestReferencePrefix>(union(string(), string()));
