import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestAdditionalDocument } from './PostAccountsRequestAdditionalDocument';
import { PostAccountsRequestAdditionalDocumentSchema } from './PostAccountsRequestAdditionalDocument';
/**
 * person_verification_specs
 *
 * The person's verification status.
 */
export interface PostAccountsAccountPeopleRequestVerification {
  /**
   * person_verification_document_specs
   */
  additionalDocument?: PostAccountsRequestAdditionalDocument;
  /**
   * person_verification_document_specs
   */
  document?: PostAccountsRequestAdditionalDocument;
}

export const PostAccountsAccountPeopleRequestVerificationSchema: TypedSchema<PostAccountsAccountPeopleRequestVerification> = typed<PostAccountsAccountPeopleRequestVerification>(object({
  get additionalDocument() { return optional(PostAccountsRequestAdditionalDocumentSchema) },
  get document() { return optional(PostAccountsRequestAdditionalDocumentSchema) },
}));