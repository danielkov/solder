import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { ChatMessageContentItem } from './ChatMessageContentItem';
import { ChatMessageContentItemSchema } from './ChatMessageContentItem';
export type ContentUnionUnion = string | Array<ChatMessageContentItem>;

export const ContentUnionUnionSchema: TypedSchema<ContentUnionUnion> = typed<ContentUnionUnion>(union(string(), array(ChatMessageContentItemSchema)));