import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
export interface ChatStreamOptions {
  includeUsage?: boolean;
}

export const ChatStreamOptionsSchema: TypedSchema<ChatStreamOptions> = typed<ChatStreamOptions>(object({
  includeUsage: optional(boolean()),
}));