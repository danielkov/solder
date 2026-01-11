import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { CreateEmbeddingsRequestInputObjectContentItem } from './CreateEmbeddingsRequestInputObjectContentItem';
import { CreateEmbeddingsRequestInputObjectContentItemSchema } from './CreateEmbeddingsRequestInputObjectContentItem';
export interface CreateEmbeddingsRequestInputObject {
  content: Array<CreateEmbeddingsRequestInputObjectContentItem>;
}

export const CreateEmbeddingsRequestInputObjectSchema: TypedSchema<CreateEmbeddingsRequestInputObject> = typed<CreateEmbeddingsRequestInputObject>(object({
  content: array(CreateEmbeddingsRequestInputObjectContentItemSchema),
}));