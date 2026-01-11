import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { UploadFileWithMetadataRequestMetadata } from './UploadFileWithMetadataRequestMetadata';
import { UploadFileWithMetadataRequestMetadataSchema } from './UploadFileWithMetadataRequestMetadata';
export interface UploadFileWithMetadataRequest {
  /**
   * Optional description of the file
   */
  description?: string;
  /**
   * The file to upload
   */
  file: string;
  metadata: UploadFileWithMetadataRequestMetadata;
  /**
   * ID of the owner
   */
  ownerId?: number;
}

export const UploadFileWithMetadataRequestSchema: TypedSchema<UploadFileWithMetadataRequest> = typed<UploadFileWithMetadataRequest>(object({
  description: optional(string()),
  file: string(),
  metadata: UploadFileWithMetadataRequestMetadataSchema,
  ownerId: optional(number()),
}));