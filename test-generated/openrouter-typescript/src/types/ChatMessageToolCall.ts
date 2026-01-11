import { TypedSchema, literal, object, string, typed } from '@speakeasy-api/tonic';

import type { FunctionProperty } from './FunctionProperty';
import { FunctionPropertySchema } from './FunctionProperty';
export interface ChatMessageToolCall {
  function: FunctionProperty;
  id: string;
  type: "function";
}

export const ChatMessageToolCallSchema: TypedSchema<ChatMessageToolCall> = typed<ChatMessageToolCall>(object({
  function: FunctionPropertySchema,
  id: string(),
  type: literal("function"),
}));