import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface UploadFileWithMetadataRequestMetadata {
  /**
   * ID of the owner
   */
  ownerId?: string;
  /**
   * Tags to associate with the file
   */
  tags?: Array<string>;
}

export const UploadFileWithMetadataRequestMetadataSchema: TypedSchema<UploadFileWithMetadataRequestMetadata> = typed<UploadFileWithMetadataRequestMetadata>(object({
  ownerId: optional(string()),
  tags: optional(array(string())),
}));