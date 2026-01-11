import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface UploadFileRequest {
  /**
   * Optional description of the file
   */
  description?: string;
  /**
   * The file to upload
   */
  file: string;
}

export const UploadFileRequestSchema: TypedSchema<UploadFileRequest> = typed<UploadFileRequest>(object({
  description: optional(string()),
  file: string(),
}));