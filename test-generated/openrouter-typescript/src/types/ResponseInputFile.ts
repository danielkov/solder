import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * File input content item
 */
export interface ResponseInputFile {
  fileData?: string;
  fileId?: string;
  fileUrl?: string;
  filename?: string;
  type: string;
}

export const ResponseInputFileSchema: TypedSchema<ResponseInputFile> = typed<ResponseInputFile>(object({
  fileData: optional(string()),
  fileId: optional(string()),
  fileUrl: optional(string()),
  filename: optional(string()),
  type: string(),
}));