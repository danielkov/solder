import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { QuoteOrRef } from './QuoteOrRef';
import { QuoteOrRefSchema } from './QuoteOrRef';
/**
 * QuotesResourceFromQuote
 *
 * 
 */
export interface QuotesResourceFromQuote {
  /**
   * Whether this quote is a revision of a different quote.
   */
  isRevision: boolean;
  /**
   * The quote that was cloned.
   */
  quote: QuoteOrRef;
}

export const QuotesResourceFromQuoteSchema: TypedSchema<QuotesResourceFromQuote> = typed<QuotesResourceFromQuote>(object({
  isRevision: boolean(),
  quote: QuoteOrRefSchema,
}));