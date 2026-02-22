import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A header that will be displayed on the quote PDF.
 */
export type PostQuotesQuoteRequestHeader = string | string;

export const PostQuotesQuoteRequestHeaderSchema: TypedSchema<PostQuotesQuoteRequestHeader> = typed<PostQuotesQuoteRequestHeader>(union(string(), string()));
