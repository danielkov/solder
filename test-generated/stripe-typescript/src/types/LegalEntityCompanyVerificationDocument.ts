import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BackOrRef } from './BackOrRef';
import { BackOrRefSchema } from './BackOrRef';
import type { FrontOrRef } from './FrontOrRef';
import { FrontOrRefSchema } from './FrontOrRef';
/**
 * LegalEntityCompanyVerificationDocument
 *
 * 
 */
export interface LegalEntityCompanyVerificationDocument {
  /**
   * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. Note that `additional_verification` files are [not downloadable](/file-upload#uploading-a-file).
   */
  back?: BackOrRef;
  /**
   * A user-displayable string describing the verification state of this document.
   */
  details?: string;
  /**
   * One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document.
   */
  detailsCode?: string;
  /**
   * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. Note that `additional_verification` files are [not downloadable](/file-upload#uploading-a-file).
   */
  front?: FrontOrRef;
}

export const LegalEntityCompanyVerificationDocumentSchema: TypedSchema<LegalEntityCompanyVerificationDocument> = typed<LegalEntityCompanyVerificationDocument>(object({
  get back() { return optional(BackOrRefSchema) },
  details: optional(string()),
  detailsCode: optional(string()),
  get front() { return optional(FrontOrRefSchema) },
}));