import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
export interface CreateEmbeddingsResponseUsage {
  cost?: number;
  promptTokens: number;
  totalTokens: number;
}

export const CreateEmbeddingsResponseUsageSchema: TypedSchema<CreateEmbeddingsResponseUsage> = typed<CreateEmbeddingsResponseUsage>(object({
  cost: optional(number()),
  promptTokens: number(),
  totalTokens: number(),
}));