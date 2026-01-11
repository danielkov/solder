import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
export interface UploadMultipleFilesRequest {
  /**
   * Array of files to upload
   */
  files: Array<string>;
}

export const UploadMultipleFilesRequestSchema: TypedSchema<UploadMultipleFilesRequest> = typed<UploadMultipleFilesRequest>(object({
  files: array(string()),
}));