import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';

import type { CompletionFinishReason } from './CompletionFinishReason';
import { CompletionFinishReasonSchema } from './CompletionFinishReason';
import type { LogprobsUnion3 } from './LogprobsUnion3';
import { LogprobsUnion3Schema } from './LogprobsUnion3';
export interface CompletionChoice {
  finishReason: CompletionFinishReason;
  index: number;
  logprobs: LogprobsUnion3;
  text: string;
}

export const CompletionChoiceSchema: TypedSchema<CompletionChoice> = typed<CompletionChoice>(object({
  finishReason: CompletionFinishReasonSchema,
  index: number(),
  logprobs: LogprobsUnion3Schema,
  text: string(),
}));