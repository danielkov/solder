import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A footer that will be displayed on the quote PDF.
 */
export type PostQuotesQuoteRequestFooter = string | string;

export const PostQuotesQuoteRequestFooterSchema: TypedSchema<PostQuotesQuoteRequestFooter> = typed<PostQuotesQuoteRequestFooter>(union(string(), string()));
