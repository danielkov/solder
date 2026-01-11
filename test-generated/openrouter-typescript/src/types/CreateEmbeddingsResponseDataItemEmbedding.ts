import { TypedSchema, array, number, string, typed, union } from '@speakeasy-api/tonic';
export type CreateEmbeddingsResponseDataItemEmbedding = Array<number> | string;

export const CreateEmbeddingsResponseDataItemEmbeddingSchema: TypedSchema<CreateEmbeddingsResponseDataItemEmbedding> = typed<CreateEmbeddingsResponseDataItemEmbedding>(union(array(number()), string()));