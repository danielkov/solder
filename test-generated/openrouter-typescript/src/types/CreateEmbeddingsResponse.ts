import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CreateEmbeddingsResponseDataItem } from './CreateEmbeddingsResponseDataItem';
import { CreateEmbeddingsResponseDataItemSchema } from './CreateEmbeddingsResponseDataItem';
import type { CreateEmbeddingsResponseUsage } from './CreateEmbeddingsResponseUsage';
import { CreateEmbeddingsResponseUsageSchema } from './CreateEmbeddingsResponseUsage';
export interface CreateEmbeddingsResponse {
  data: Array<CreateEmbeddingsResponseDataItem>;
  id?: string;
  model: string;
  object: string;
  usage?: CreateEmbeddingsResponseUsage;
}

export const CreateEmbeddingsResponseSchema: TypedSchema<CreateEmbeddingsResponse> = typed<CreateEmbeddingsResponse>(object({
  data: array(CreateEmbeddingsResponseDataItemSchema),
  id: optional(string()),
  model: string(),
  object: string(),
  get usage() { return optional(CreateEmbeddingsResponseUsageSchema) },
}));