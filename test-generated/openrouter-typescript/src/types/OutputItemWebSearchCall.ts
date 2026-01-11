import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { WebSearchStatus } from './WebSearchStatus';
import { WebSearchStatusSchema } from './WebSearchStatus';
export interface OutputItemWebSearchCall {
  id: string;
  status: WebSearchStatus;
  type: string;
}

export const OutputItemWebSearchCallSchema: TypedSchema<OutputItemWebSearchCall> = typed<OutputItemWebSearchCall>(object({
  id: string(),
  status: WebSearchStatusSchema,
  type: string(),
}));