import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestDocument } from './PostAccountsRequestDocument';
import { PostAccountsRequestDocumentSchema } from './PostAccountsRequestDocument';
/**
 * verification_specs
 */
export interface PostAccountsRequestVerification {
  /**
   * verification_document_specs
   */
  document?: PostAccountsRequestDocument;
}

export const PostAccountsRequestVerificationSchema: TypedSchema<PostAccountsRequestVerification> = typed<PostAccountsRequestVerification>(object({
  get document() { return optional(PostAccountsRequestDocumentSchema) },
}));