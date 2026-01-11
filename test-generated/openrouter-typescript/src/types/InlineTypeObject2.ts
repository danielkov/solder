import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';

import type { InlineTypeObjectVideoUrl } from './InlineTypeObjectVideoUrl';
import { InlineTypeObjectVideoUrlSchema } from './InlineTypeObjectVideoUrl';
export interface InlineTypeObject2 {
  type: "video_url";
  videoUrl: InlineTypeObjectVideoUrl;
}

export const InlineTypeObject2Schema: TypedSchema<InlineTypeObject2> = typed<InlineTypeObject2>(object({
  type: literal("video_url"),
  videoUrl: InlineTypeObjectVideoUrlSchema,
}));