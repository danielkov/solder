import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestAdditionalDocument } from './PostAccountsRequestAdditionalDocument';
import { PostAccountsRequestAdditionalDocumentSchema } from './PostAccountsRequestAdditionalDocument';
/**
 * person_verification_specs
 */
export interface DefaultPostAccountsRequestVerification {
  /**
   * person_verification_document_specs
   */
  additionalDocument?: PostAccountsRequestAdditionalDocument;
  /**
   * person_verification_document_specs
   */
  document?: PostAccountsRequestAdditionalDocument;
}

export const DefaultPostAccountsRequestVerificationSchema: TypedSchema<DefaultPostAccountsRequestVerification> = typed<DefaultPostAccountsRequestVerification>(object({
  get additionalDocument() { return optional(PostAccountsRequestAdditionalDocumentSchema) },
  get document() { return optional(PostAccountsRequestAdditionalDocumentSchema) },
}));