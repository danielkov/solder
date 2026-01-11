import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { AssistantMessage } from './AssistantMessage';
import { AssistantMessageSchema } from './AssistantMessage';
import type { LogprobsUnion2 } from './LogprobsUnion2';
import { LogprobsUnion2Schema } from './LogprobsUnion2';
import type { Schema0 } from './Schema0';
import { Schema0Schema } from './Schema0';
export interface ChatResponseChoice {
  finishReason: Schema0;
  index: number;
  logprobs?: LogprobsUnion2;
  message: AssistantMessage;
}

export const ChatResponseChoiceSchema: TypedSchema<ChatResponseChoice> = typed<ChatResponseChoice>(object({
  finishReason: Schema0Schema,
  index: number(),
  get logprobs() { return optional(LogprobsUnion2Schema) },
  message: AssistantMessageSchema,
}));