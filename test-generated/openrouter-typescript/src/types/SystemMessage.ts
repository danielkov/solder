import { TypedSchema, literal, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeObject3Content } from './InlineTypeObject3Content';
import { InlineTypeObject3ContentSchema } from './InlineTypeObject3Content';
export interface SystemMessage {
  content: InlineTypeObject3Content;
  name?: string;
  role: "system";
}

export const SystemMessageSchema: TypedSchema<SystemMessage> = typed<SystemMessage>(object({
  content: InlineTypeObject3ContentSchema,
  name: optional(string()),
  role: literal("system"),
}));