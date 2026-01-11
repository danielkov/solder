import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';

import type { WebSearchStatus } from './WebSearchStatus';
import { WebSearchStatusSchema } from './WebSearchStatus';
export interface ResponsesOutputItemFileSearchCall {
  id: string;
  queries: Array<string>;
  status: WebSearchStatus;
  type: string;
}

export const ResponsesOutputItemFileSearchCallSchema: TypedSchema<ResponsesOutputItemFileSearchCall> = typed<ResponsesOutputItemFileSearchCall>(object({
  id: string(),
  queries: array(string()),
  status: WebSearchStatusSchema,
  type: string(),
}));