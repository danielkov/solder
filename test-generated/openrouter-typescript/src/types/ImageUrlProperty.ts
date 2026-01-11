import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface ImageUrlProperty {
  detail?: string;
  url: string;
}

export const ImageUrlPropertySchema: TypedSchema<ImageUrlProperty> = typed<ImageUrlProperty>(object({
  detail: optional(string()),
  url: string(),
}));