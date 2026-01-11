import { TypedSchema, literal, object, string, typed } from '@speakeasy-api/tonic';

import type { ContentUnionUnion } from './ContentUnionUnion';
import { ContentUnionUnionSchema } from './ContentUnionUnion';
export interface ToolResponseMessage {
  content: ContentUnionUnion;
  role: "tool";
  toolCallId: string;
}

export const ToolResponseMessageSchema: TypedSchema<ToolResponseMessage> = typed<ToolResponseMessage>(object({
  content: ContentUnionUnionSchema,
  role: literal("tool"),
  toolCallId: string(),
}));