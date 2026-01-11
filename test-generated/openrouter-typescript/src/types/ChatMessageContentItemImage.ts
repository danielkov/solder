import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';

import type { ImageUrlProperty } from './ImageUrlProperty';
import { ImageUrlPropertySchema } from './ImageUrlProperty';
export interface ChatMessageContentItemImage {
  imageUrl: ImageUrlProperty;
  type: "image_url";
}

export const ChatMessageContentItemImageSchema: TypedSchema<ChatMessageContentItemImage> = typed<ChatMessageContentItemImage>(object({
  imageUrl: ImageUrlPropertySchema,
  type: literal("image_url"),
}));