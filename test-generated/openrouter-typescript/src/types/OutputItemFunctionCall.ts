import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeUnion3 } from './InlineTypeUnion3';
import { InlineTypeUnion3Schema } from './InlineTypeUnion3';
export interface OutputItemFunctionCall {
  arguments: string;
  callId: string;
  id?: string;
  name: string;
  status?: InlineTypeUnion3;
  type: string;
}

export const OutputItemFunctionCallSchema: TypedSchema<OutputItemFunctionCall> = typed<OutputItemFunctionCall>(object({
  arguments: string(),
  callId: string(),
  id: optional(string()),
  name: string(),
  get status() { return optional(InlineTypeUnion3Schema) },
  type: string(),
}));