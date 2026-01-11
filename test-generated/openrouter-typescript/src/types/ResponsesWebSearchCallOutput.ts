import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { WebSearchStatus } from './WebSearchStatus';
import { WebSearchStatusSchema } from './WebSearchStatus';
export interface ResponsesWebSearchCallOutput {
  id: string;
  status: WebSearchStatus;
  type: string;
}

export const ResponsesWebSearchCallOutputSchema: TypedSchema<ResponsesWebSearchCallOutput> = typed<ResponsesWebSearchCallOutput>(object({
  id: string(),
  status: WebSearchStatusSchema,
  type: string(),
}));