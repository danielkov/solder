import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { ChatStreamingMessageChunk } from './ChatStreamingMessageChunk';
import { ChatStreamingMessageChunkSchema } from './ChatStreamingMessageChunk';
import type { LogprobsUnion2 } from './LogprobsUnion2';
import { LogprobsUnion2Schema } from './LogprobsUnion2';
import type { Schema0 } from './Schema0';
import { Schema0Schema } from './Schema0';
export interface ChatStreamingChoice {
  delta: ChatStreamingMessageChunk;
  finishReason: Schema0;
  index: number;
  logprobs?: LogprobsUnion2;
}

export const ChatStreamingChoiceSchema: TypedSchema<ChatStreamingChoice> = typed<ChatStreamingChoice>(object({
  delta: ChatStreamingMessageChunkSchema,
  finishReason: Schema0Schema,
  index: number(),
  get logprobs() { return optional(LogprobsUnion2Schema) },
}));