import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AdditionalDocumentationOrRef } from './AdditionalDocumentationOrRef';
import { AdditionalDocumentationOrRefSchema } from './AdditionalDocumentationOrRef';
/**
 * IssuingDisputeFraudulentEvidence
 *
 * 
 */
export interface IssuingDisputeFraudulentEvidence {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: AdditionalDocumentationOrRef;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string;
}

export const IssuingDisputeFraudulentEvidenceSchema: TypedSchema<IssuingDisputeFraudulentEvidence> = typed<IssuingDisputeFraudulentEvidence>(object({
  get additionalDocumentation() { return optional(AdditionalDocumentationOrRefSchema) },
  explanation: optional(string()),
}));