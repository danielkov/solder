import { TypedSchema, array, literal, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChatGenerationTokenUsage } from './ChatGenerationTokenUsage';
import { ChatGenerationTokenUsageSchema } from './ChatGenerationTokenUsage';
import type { ChatResponseChoice } from './ChatResponseChoice';
import { ChatResponseChoiceSchema } from './ChatResponseChoice';
import type { ReasoningUnion } from './ReasoningUnion';
import { ReasoningUnionSchema } from './ReasoningUnion';
export interface ChatResponse {
  choices: Array<ChatResponseChoice>;
  created: number;
  id: string;
  model: string;
  object: "chat.completion";
  systemFingerprint?: ReasoningUnion;
  usage?: ChatGenerationTokenUsage;
}

export const ChatResponseSchema: TypedSchema<ChatResponse> = typed<ChatResponse>(object({
  choices: array(ChatResponseChoiceSchema),
  created: number(),
  id: string(),
  model: string(),
  object: literal("chat.completion"),
  get systemFingerprint() { return optional(ReasoningUnionSchema) },
  get usage() { return optional(ChatGenerationTokenUsageSchema) },
}));