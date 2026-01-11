import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * person_verification_document_param
 */
export interface PostIssuingCardholdersRequestDocument {
  back?: string;
  front?: string;
}

export const PostIssuingCardholdersRequestDocumentSchema: TypedSchema<PostIssuingCardholdersRequestDocument> = typed<PostIssuingCardholdersRequestDocument>(object({
  back: optional(string()),
  front: optional(string()),
}));