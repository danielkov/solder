import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The account on behalf of which to charge.
 */
export type PostQuotesRequestOnBehalfOf = string | string;

export const PostQuotesRequestOnBehalfOfSchema: TypedSchema<PostQuotesRequestOnBehalfOf> = typed<PostQuotesRequestOnBehalfOf>(union(string(), string()));
