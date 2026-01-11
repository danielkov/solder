import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ToolCallStatus } from './ToolCallStatus';
import { ToolCallStatusSchema } from './ToolCallStatus';
/**
 * A function call initiated by the model
 */
export interface OpenResponsesFunctionToolCall {
  arguments: string;
  callId: string;
  id: string;
  name: string;
  status?: ToolCallStatus;
  type: string;
}

export const OpenResponsesFunctionToolCallSchema: TypedSchema<OpenResponsesFunctionToolCall> = typed<OpenResponsesFunctionToolCall>(object({
  arguments: string(),
  callId: string(),
  id: string(),
  name: string(),
  get status() { return optional(ToolCallStatusSchema) },
  type: string(),
}));