import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * from_quote_params
 *
 * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
 */
export interface PostQuotesRequestFromQuote {
  isRevision?: boolean;
  quote: string;
}

export const PostQuotesRequestFromQuoteSchema: TypedSchema<PostQuotesRequestFromQuote> = typed<PostQuotesRequestFromQuote>(object({
  isRevision: optional(boolean()),
  quote: string(),
}));