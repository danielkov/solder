import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { CompletionTokensDetailsUnion } from './CompletionTokensDetailsUnion';
import { CompletionTokensDetailsUnionSchema } from './CompletionTokensDetailsUnion';
import type { PromptTokensDetailsUnion } from './PromptTokensDetailsUnion';
import { PromptTokensDetailsUnionSchema } from './PromptTokensDetailsUnion';
export interface ChatGenerationTokenUsage {
  completionTokens: number;
  completionTokensDetails?: CompletionTokensDetailsUnion;
  promptTokens: number;
  promptTokensDetails?: PromptTokensDetailsUnion;
  totalTokens: number;
}

export const ChatGenerationTokenUsageSchema: TypedSchema<ChatGenerationTokenUsage> = typed<ChatGenerationTokenUsage>(object({
  completionTokens: number(),
  get completionTokensDetails() { return optional(CompletionTokensDetailsUnionSchema) },
  promptTokens: number(),
  get promptTokensDetails() { return optional(PromptTokensDetailsUnionSchema) },
  totalTokens: number(),
}));