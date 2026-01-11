import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Request body for file import - tests multipart with $ref
 */
export interface FileImportRequest {
  /**
   * The file to import
   */
  file: string;
  /**
   * The format of the file (e.g., csv, json, xml)
   */
  format: string;
  /**
   * Whether to validate the file before importing
   */
  validate?: boolean;
}

export const FileImportRequestSchema: TypedSchema<FileImportRequest> = typed<FileImportRequest>(object({
  file: string(),
  format: string(),
  validate: optional(boolean()),
}));