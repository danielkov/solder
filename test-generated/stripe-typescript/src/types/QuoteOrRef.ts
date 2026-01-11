import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Quote } from './Quote';
import { QuoteSchema } from './Quote';
export type QuoteOrRef = string | Quote;

export const QuoteOrRefSchema: TypedSchema<QuoteOrRef> = typed<QuoteOrRef>(union(string(), QuoteSchema));