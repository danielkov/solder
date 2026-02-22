import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Quote } from './Quote';
import { QuoteSchema } from './Quote';
/**
 * The quote that was cloned.
 */
export type QuoteOrRef = string | Quote;

export const QuoteOrRefSchema: TypedSchema<QuoteOrRef> = typed<QuoteOrRef>(union(string(), QuoteSchema));
