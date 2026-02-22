import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
 */
export type PostQuotesRequestFooter = string | string;

export const PostQuotesRequestFooterSchema: TypedSchema<PostQuotesRequestFooter> = typed<PostQuotesRequestFooter>(union(string(), string()));
