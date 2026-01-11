import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BackOrRef } from './BackOrRef';
import { BackOrRefSchema } from './BackOrRef';
import type { FrontOrRef } from './FrontOrRef';
import { FrontOrRefSchema } from './FrontOrRef';
/**
 * LegalEntityPersonVerificationDocument
 *
 * 
 */
export interface LegalEntityPersonVerificationDocument {
  /**
   * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  back?: BackOrRef;
  /**
   * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
   */
  details?: string;
  /**
   * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
   */
  detailsCode?: string;
  /**
   * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
   */
  front?: FrontOrRef;
}

export const LegalEntityPersonVerificationDocumentSchema: TypedSchema<LegalEntityPersonVerificationDocument> = typed<LegalEntityPersonVerificationDocument>(object({
  get back() { return optional(BackOrRefSchema) },
  details: optional(string()),
  detailsCode: optional(string()),
  get front() { return optional(FrontOrRefSchema) },
}));