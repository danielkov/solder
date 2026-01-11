import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { InlineTypeObjectVideoUrl } from './InlineTypeObjectVideoUrl';
import { InlineTypeObjectVideoUrlSchema } from './InlineTypeObjectVideoUrl';
export interface EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject {
  imageUrl: InlineTypeObjectVideoUrl;
  type: string;
}

export const EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObjectSchema: TypedSchema<EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject> = typed<EmbeddingsCreateEmbeddingsRequestInputObjectContentItemObject>(object({
  imageUrl: InlineTypeObjectVideoUrlSchema,
  type: string(),
}));