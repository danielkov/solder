import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CreateEmbeddingsResponseDataItemEmbedding } from './CreateEmbeddingsResponseDataItemEmbedding';
import { CreateEmbeddingsResponseDataItemEmbeddingSchema } from './CreateEmbeddingsResponseDataItemEmbedding';
export interface CreateEmbeddingsResponseDataItem {
  embedding: CreateEmbeddingsResponseDataItemEmbedding;
  index?: number;
  object: string;
}

export const CreateEmbeddingsResponseDataItemSchema: TypedSchema<CreateEmbeddingsResponseDataItem> = typed<CreateEmbeddingsResponseDataItem>(object({
  embedding: CreateEmbeddingsResponseDataItemEmbeddingSchema,
  index: optional(number()),
  object: string(),
}));