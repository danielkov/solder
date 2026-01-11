import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
export interface CreateEmbeddingsRequestInputObjectContentItemObject {
  text: string;
  type: string;
}

export const CreateEmbeddingsRequestInputObjectContentItemObjectSchema: TypedSchema<CreateEmbeddingsRequestInputObjectContentItemObject> = typed<CreateEmbeddingsRequestInputObjectContentItemObject>(object({
  text: string(),
  type: string(),
}));