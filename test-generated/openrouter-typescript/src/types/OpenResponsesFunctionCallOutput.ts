import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ToolCallStatus } from './ToolCallStatus';
import { ToolCallStatusSchema } from './ToolCallStatus';
/**
 * The output from a function call execution
 */
export interface OpenResponsesFunctionCallOutput {
  callId: string;
  id?: string;
  output: string;
  status?: ToolCallStatus;
  type: string;
}

export const OpenResponsesFunctionCallOutputSchema: TypedSchema<OpenResponsesFunctionCallOutput> = typed<OpenResponsesFunctionCallOutput>(object({
  callId: string(),
  id: optional(string()),
  output: string(),
  get status() { return optional(ToolCallStatusSchema) },
  type: string(),
}));