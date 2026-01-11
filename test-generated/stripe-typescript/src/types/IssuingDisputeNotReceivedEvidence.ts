import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AdditionalDocumentationOrRef } from './AdditionalDocumentationOrRef';
import { AdditionalDocumentationOrRefSchema } from './AdditionalDocumentationOrRef';
/**
 * IssuingDisputeNotReceivedEvidence
 *
 * 
 */
export interface IssuingDisputeNotReceivedEvidence {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: AdditionalDocumentationOrRef;
  /**
   * Date when the cardholder expected to receive the product.
   */
  expectedAt?: number;
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

export const IssuingDisputeNotReceivedEvidenceSchema: TypedSchema<IssuingDisputeNotReceivedEvidence> = typed<IssuingDisputeNotReceivedEvidence>(object({
  get additionalDocumentation() { return optional(AdditionalDocumentationOrRefSchema) },
  expectedAt: optional(number()),
  explanation: optional(string()),
  productDescription: optional(string()),
  productType: optional(string()),
}));