import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CreateEmbeddingsRequestInput } from './CreateEmbeddingsRequestInput';
import { CreateEmbeddingsRequestInputSchema } from './CreateEmbeddingsRequestInput';
import type { CreateEmbeddingsRequestProvider } from './CreateEmbeddingsRequestProvider';
import { CreateEmbeddingsRequestProviderSchema } from './CreateEmbeddingsRequestProvider';
export interface CreateEmbeddingsRequest {
  dimensions?: number;
  encodingFormat?: string;
  input: CreateEmbeddingsRequestInput;
  inputType?: string;
  model: string;
  provider?: CreateEmbeddingsRequestProvider;
  user?: string;
}

export const CreateEmbeddingsRequestSchema: TypedSchema<CreateEmbeddingsRequest> = typed<CreateEmbeddingsRequest>(object({
  dimensions: optional(number()),
  encodingFormat: optional(string()),
  input: CreateEmbeddingsRequestInputSchema,
  inputType: optional(string()),
  model: string(),
  get provider() { return optional(CreateEmbeddingsRequestProviderSchema) },
  user: optional(string()),
}));