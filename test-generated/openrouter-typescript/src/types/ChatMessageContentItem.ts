import { TypedSchema, typed, union } from '@speakeasy-api/tonic';

import type { ChatMessageContentItemAudio } from './ChatMessageContentItemAudio';
import { ChatMessageContentItemAudioSchema } from './ChatMessageContentItemAudio';
import type { ChatMessageContentItemImage } from './ChatMessageContentItemImage';
import { ChatMessageContentItemImageSchema } from './ChatMessageContentItemImage';
import type { ChatMessageContentItemText } from './ChatMessageContentItemText';
import { ChatMessageContentItemTextSchema } from './ChatMessageContentItemText';
import type { ChatMessageContentItemVideo } from './ChatMessageContentItemVideo';
import { ChatMessageContentItemVideoSchema } from './ChatMessageContentItemVideo';
export type ChatMessageContentItem = ChatMessageContentItemText | ChatMessageContentItemImage | ChatMessageContentItemAudio | ChatMessageContentItemVideo;

export const ChatMessageContentItemSchema: TypedSchema<ChatMessageContentItem> = typed<ChatMessageContentItem>(union(ChatMessageContentItemTextSchema, ChatMessageContentItemImageSchema, ChatMessageContentItemAudioSchema, ChatMessageContentItemVideoSchema));