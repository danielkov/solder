import { TypedSchema, literal, object, typed } from '@speakeasy-api/tonic';

import type { InlineTypeObjectVideoUrl } from './InlineTypeObjectVideoUrl';
import { InlineTypeObjectVideoUrlSchema } from './InlineTypeObjectVideoUrl';
export interface InlineTypeObject {
  type: "input_video";
  videoUrl: InlineTypeObjectVideoUrl;
}

export const InlineTypeObjectSchema: TypedSchema<InlineTypeObject> = typed<InlineTypeObject>(object({
  type: literal("input_video"),
  videoUrl: InlineTypeObjectVideoUrlSchema,
}));