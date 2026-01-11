import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LegalEntityPersonVerificationDocument } from './LegalEntityPersonVerificationDocument';
import { LegalEntityPersonVerificationDocumentSchema } from './LegalEntityPersonVerificationDocument';
/**
 * LegalEntityPersonVerification
 *
 * 
 */
export interface LegalEntityPersonVerification {
  /**
   * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
   */
  additionalDocument?: LegalEntityPersonVerificationDocument;
  /**
   * A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified".
   */
  details?: string;
  /**
   * One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
   */
  detailsCode?: string;
  /**
   * LegalEntityPersonVerificationDocument
   *
   * 
   */
  document?: LegalEntityPersonVerificationDocument;
  /**
   * The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`. Please refer [guide](https://stripe.com/docs/connect/handling-api-verification) to handle verification updates.
   */
  status: string;
}

export const LegalEntityPersonVerificationSchema: TypedSchema<LegalEntityPersonVerification> = typed<LegalEntityPersonVerification>(object({
  get additionalDocument() { return optional(LegalEntityPersonVerificationDocumentSchema) },
  details: optional(string()),
  detailsCode: optional(string()),
  get document() { return optional(LegalEntityPersonVerificationDocumentSchema) },
  status: string(),
}));