import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { ChatMessageContentItemText } from './ChatMessageContentItemText';
import { ChatMessageContentItemTextSchema } from './ChatMessageContentItemText';
export type InlineTypeObject3Content = string | Array<ChatMessageContentItemText>;

export const InlineTypeObject3ContentSchema: TypedSchema<InlineTypeObject3Content> = typed<InlineTypeObject3Content>(union(string(), array(ChatMessageContentItemTextSchema)));