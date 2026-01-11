import { TypedSchema, literal, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ContentUnionUnion } from './ContentUnionUnion';
import { ContentUnionUnionSchema } from './ContentUnionUnion';
export interface UserMessage {
  content: ContentUnionUnion;
  name?: string;
  role: "user";
}

export const UserMessageSchema: TypedSchema<UserMessage> = typed<UserMessage>(object({
  content: ContentUnionUnionSchema,
  name: optional(string()),
  role: literal("user"),
}));