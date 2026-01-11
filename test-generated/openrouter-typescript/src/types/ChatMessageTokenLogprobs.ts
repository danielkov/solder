import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ContentUnion2 } from './ContentUnion2';
import { ContentUnion2Schema } from './ContentUnion2';
export interface ChatMessageTokenLogprobs {
  content: ContentUnion2;
  refusal: ContentUnion2;
}

export const ChatMessageTokenLogprobsSchema: TypedSchema<ChatMessageTokenLogprobs> = typed<ChatMessageTokenLogprobs>(object({
  content: ContentUnion2Schema,
  refusal: ContentUnion2Schema,
}));