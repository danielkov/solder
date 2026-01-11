import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ToolCallStatus } from './ToolCallStatus';
import { ToolCallStatusSchema } from './ToolCallStatus';
export interface InlineTypeUnionObject3 {
  callId: string;
  id?: string;
  output: string;
  status?: ToolCallStatus;
  type: string;
}

export const InlineTypeUnionObject3Schema: TypedSchema<InlineTypeUnionObject3> = typed<InlineTypeUnionObject3>(object({
  callId: string(),
  id: optional(string()),
  output: string(),
  get status() { return optional(ToolCallStatusSchema) },
  type: string(),
}));