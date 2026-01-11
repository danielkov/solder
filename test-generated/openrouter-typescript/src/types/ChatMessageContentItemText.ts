import { TypedSchema, literal, object, string, typed } from '@speakeasy-api/tonic';
export interface ChatMessageContentItemText {
  text: string;
  type: "text";
}

export const ChatMessageContentItemTextSchema: TypedSchema<ChatMessageContentItemText> = typed<ChatMessageContentItemText>(object({
  text: string(),
  type: literal("text"),
}));