import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChatStreamingMessageToolCall } from './ChatStreamingMessageToolCall';
import { ChatStreamingMessageToolCallSchema } from './ChatStreamingMessageToolCall';
import type { ReasoningUnion } from './ReasoningUnion';
import { ReasoningUnionSchema } from './ReasoningUnion';
export interface ChatStreamingMessageChunk {
  content?: ReasoningUnion;
  reasoning?: ReasoningUnion;
  refusal?: ReasoningUnion;
  role?: string;
  toolCalls?: Array<ChatStreamingMessageToolCall>;
}

export const ChatStreamingMessageChunkSchema: TypedSchema<ChatStreamingMessageChunk> = typed<ChatStreamingMessageChunk>(object({
  get content() { return optional(ReasoningUnionSchema) },
  get reasoning() { return optional(ReasoningUnionSchema) },
  get refusal() { return optional(ReasoningUnionSchema) },
  role: optional(string()),
  get toolCalls() { return optional(array(ChatStreamingMessageToolCallSchema)) },
}));