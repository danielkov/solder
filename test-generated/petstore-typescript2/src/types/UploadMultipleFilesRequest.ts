import { array, object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export interface UploadMultipleFilesRequest {
  /**
   * Array of files to upload
   */
  files: Array<Uint8Array>;
}

export const UploadMultipleFilesRequestSchema: TypedSchema<UploadMultipleFilesRequest> = typed<UploadMultipleFilesRequest>(object({ files: array(string()) }));
