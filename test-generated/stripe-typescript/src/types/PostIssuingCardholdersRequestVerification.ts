import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostIssuingCardholdersRequestDocument } from './PostIssuingCardholdersRequestDocument';
import { PostIssuingCardholdersRequestDocumentSchema } from './PostIssuingCardholdersRequestDocument';
/**
 * person_verification_param
 */
export interface PostIssuingCardholdersRequestVerification {
  /**
   * person_verification_document_param
   */
  document?: PostIssuingCardholdersRequestDocument;
}

export const PostIssuingCardholdersRequestVerificationSchema: TypedSchema<PostIssuingCardholdersRequestVerification> = typed<PostIssuingCardholdersRequestVerification>(object({
  get document() { return optional(PostIssuingCardholdersRequestDocumentSchema) },
}));