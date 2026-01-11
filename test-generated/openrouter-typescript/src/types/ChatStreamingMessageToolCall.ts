import { TypedSchema, literal, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { FunctionProperty2 } from './FunctionProperty2';
import { FunctionProperty2Schema } from './FunctionProperty2';
export interface ChatStreamingMessageToolCall {
  function?: FunctionProperty2;
  id?: string;
  index: number;
  type?: "function";
}

export const ChatStreamingMessageToolCallSchema: TypedSchema<ChatStreamingMessageToolCall> = typed<ChatStreamingMessageToolCall>(object({
  get function() { return optional(FunctionProperty2Schema) },
  id: optional(string()),
  index: number(),
  type: optional(literal("function")),
}));