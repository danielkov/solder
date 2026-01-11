import { TypedSchema, array, literal, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CompletionChoice } from './CompletionChoice';
import { CompletionChoiceSchema } from './CompletionChoice';
import type { CompletionUsage } from './CompletionUsage';
import { CompletionUsageSchema } from './CompletionUsage';
export interface CompletionResponse {
  choices: Array<CompletionChoice>;
  created: number;
  id: string;
  model: string;
  object: "text_completion";
  systemFingerprint?: string;
  usage?: CompletionUsage;
}

export const CompletionResponseSchema: TypedSchema<CompletionResponse> = typed<CompletionResponse>(object({
  choices: array(CompletionChoiceSchema),
  created: number(),
  id: string(),
  model: string(),
  object: literal("text_completion"),
  systemFingerprint: optional(string()),
  get usage() { return optional(CompletionUsageSchema) },
}));