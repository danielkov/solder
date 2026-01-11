import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ToolCallStatus } from './ToolCallStatus';
import { ToolCallStatusSchema } from './ToolCallStatus';
export interface InlineTypeUnionObject4 {
  arguments: string;
  callId: string;
  id?: string;
  name: string;
  status?: ToolCallStatus;
  type: string;
}

export const InlineTypeUnionObject4Schema: TypedSchema<InlineTypeUnionObject4> = typed<InlineTypeUnionObject4>(object({
  arguments: string(),
  callId: string(),
  id: optional(string()),
  name: string(),
  get status() { return optional(ToolCallStatusSchema) },
  type: string(),
}));