import { TypedSchema, array, literal, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChatGenerationTokenUsage } from './ChatGenerationTokenUsage';
import { ChatGenerationTokenUsageSchema } from './ChatGenerationTokenUsage';
import type { ChatStreamingChoice } from './ChatStreamingChoice';
import { ChatStreamingChoiceSchema } from './ChatStreamingChoice';
import type { ErrorProperty2 } from './ErrorProperty2';
import { ErrorProperty2Schema } from './ErrorProperty2';
import type { ReasoningUnion } from './ReasoningUnion';
import { ReasoningUnionSchema } from './ReasoningUnion';
export interface DataProperty {
  choices: Array<ChatStreamingChoice>;
  created: number;
  error?: ErrorProperty2;
  id: string;
  model: string;
  object: "chat.completion.chunk";
  systemFingerprint?: ReasoningUnion;
  usage?: ChatGenerationTokenUsage;
}

export const DataPropertySchema: TypedSchema<DataProperty> = typed<DataProperty>(object({
  choices: array(ChatStreamingChoiceSchema),
  created: number(),
  get error() { return optional(ErrorProperty2Schema) },
  id: string(),
  model: string(),
  object: literal("chat.completion.chunk"),
  get systemFingerprint() { return optional(ReasoningUnionSchema) },
  get usage() { return optional(ChatGenerationTokenUsageSchema) },
}));