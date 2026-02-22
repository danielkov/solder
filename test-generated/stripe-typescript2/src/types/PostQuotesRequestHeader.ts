import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
 */
export type PostQuotesRequestHeader = string | string;

export const PostQuotesRequestHeaderSchema: TypedSchema<PostQuotesRequestHeader> = typed<PostQuotesRequestHeader>(union(string(), string()));
