import { TypedSchema, literal, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeObject3Content } from './InlineTypeObject3Content';
import { InlineTypeObject3ContentSchema } from './InlineTypeObject3Content';
export interface InlineTypeObject3 {
  content: InlineTypeObject3Content;
  name?: string;
  role: "developer";
}

export const InlineTypeObject3Schema: TypedSchema<InlineTypeObject3> = typed<InlineTypeObject3>(object({
  content: InlineTypeObject3ContentSchema,
  name: optional(string()),
  role: literal("developer"),
}));