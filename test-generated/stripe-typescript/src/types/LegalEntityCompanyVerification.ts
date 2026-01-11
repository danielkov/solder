import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { LegalEntityCompanyVerificationDocument } from './LegalEntityCompanyVerificationDocument';
import { LegalEntityCompanyVerificationDocumentSchema } from './LegalEntityCompanyVerificationDocument';
/**
 * LegalEntityCompanyVerification
 *
 * 
 */
export interface LegalEntityCompanyVerification {
  /**
   * LegalEntityCompanyVerificationDocument
   *
   * 
   */
  document: LegalEntityCompanyVerificationDocument;
}

export const LegalEntityCompanyVerificationSchema: TypedSchema<LegalEntityCompanyVerification> = typed<LegalEntityCompanyVerification>(object({
  document: LegalEntityCompanyVerificationDocumentSchema,
}));