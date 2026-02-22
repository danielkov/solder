import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A description that will be displayed on the quote PDF.
 */
export type PostQuotesQuoteRequestDescription = string | string;

export const PostQuotesQuoteRequestDescriptionSchema: TypedSchema<PostQuotesQuoteRequestDescription> = typed<PostQuotesQuoteRequestDescription>(union(string(), string()));
