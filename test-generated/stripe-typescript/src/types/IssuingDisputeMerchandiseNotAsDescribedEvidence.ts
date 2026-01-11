import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AdditionalDocumentationOrRef } from './AdditionalDocumentationOrRef';
import { AdditionalDocumentationOrRefSchema } from './AdditionalDocumentationOrRef';
/**
 * IssuingDisputeMerchandiseNotAsDescribedEvidence
 *
 * 
 */
export interface IssuingDisputeMerchandiseNotAsDescribedEvidence {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: AdditionalDocumentationOrRef;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string;
  /**
   * Date when the product was received.
   */
  receivedAt?: number;
  /**
   * Description of the cardholder's attempt to return the product.
   */
  returnDescription?: string;
  /**
   * Result of cardholder's attempt to return the product.
   */
  returnStatus?: string;
  /**
   * Date when the product was returned or attempted to be returned.
   */
  returnedAt?: number;
}

export const IssuingDisputeMerchandiseNotAsDescribedEvidenceSchema: TypedSchema<IssuingDisputeMerchandiseNotAsDescribedEvidence> = typed<IssuingDisputeMerchandiseNotAsDescribedEvidence>(object({
  get additionalDocumentation() { return optional(AdditionalDocumentationOrRefSchema) },
  explanation: optional(string()),
  receivedAt: optional(number()),
  returnDescription: optional(string()),
  returnStatus: optional(string()),
  returnedAt: optional(number()),
}));