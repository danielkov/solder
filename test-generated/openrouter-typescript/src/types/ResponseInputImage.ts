import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Image input content item
 */
export interface ResponseInputImage {
  detail: string;
  imageUrl?: string;
  type: string;
}

export const ResponseInputImageSchema: TypedSchema<ResponseInputImage> = typed<ResponseInputImage>(object({
  detail: string(),
  imageUrl: optional(string()),
  type: string(),
}));