import { TypedSchema, array, literal, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChatMessageToolCall } from './ChatMessageToolCall';
import { ChatMessageToolCallSchema } from './ChatMessageToolCall';
import type { ContentUnion } from './ContentUnion';
import { ContentUnionSchema } from './ContentUnion';
import type { ReasoningUnion } from './ReasoningUnion';
import { ReasoningUnionSchema } from './ReasoningUnion';
export interface AssistantMessage {
  content?: ContentUnion;
  name?: string;
  reasoning?: ReasoningUnion;
  refusal?: ReasoningUnion;
  role: "assistant";
  toolCalls?: Array<ChatMessageToolCall>;
}

export const AssistantMessageSchema: TypedSchema<AssistantMessage> = typed<AssistantMessage>(object({
  get content() { return optional(ContentUnionSchema) },
  name: optional(string()),
  get reasoning() { return optional(ReasoningUnionSchema) },
  get refusal() { return optional(ReasoningUnionSchema) },
  role: literal("assistant"),
  get toolCalls() { return optional(array(ChatMessageToolCallSchema)) },
}));