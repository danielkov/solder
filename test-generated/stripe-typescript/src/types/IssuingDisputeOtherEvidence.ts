import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AdditionalDocumentationOrRef } from './AdditionalDocumentationOrRef';
import { AdditionalDocumentationOrRefSchema } from './AdditionalDocumentationOrRef';
/**
 * IssuingDisputeOtherEvidence
 *
 * 
 */
export interface IssuingDisputeOtherEvidence {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: AdditionalDocumentationOrRef;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string;
  /**
   * Description of the merchandise or service that was purchased.
   */
  productDescription?: string;
  /**
   * Whether the product was a merchandise or service.
   */
  productType?: string;
}

export const IssuingDisputeOtherEvidenceSchema: TypedSchema<IssuingDisputeOtherEvidence> = typed<IssuingDisputeOtherEvidence>(object({
  get additionalDocumentation() { return optional(AdditionalDocumentationOrRefSchema) },
  explanation: optional(string()),
  productDescription: optional(string()),
  productType: optional(string()),
}));