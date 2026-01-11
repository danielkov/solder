import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { VariablesProperty } from './VariablesProperty';
import { VariablesPropertySchema } from './VariablesProperty';
export interface OpenAiResponsesPrompt {
  id: string;
  variables?: VariablesProperty;
}

export const OpenAiResponsesPromptSchema: TypedSchema<OpenAiResponsesPrompt> = typed<OpenAiResponsesPrompt>(object({
  id: string(),
  get variables() { return optional(VariablesPropertySchema) },
}));