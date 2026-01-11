import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AdditionalDocumentationOrRef } from './AdditionalDocumentationOrRef';
import { AdditionalDocumentationOrRefSchema } from './AdditionalDocumentationOrRef';
/**
 * IssuingDisputeServiceNotAsDescribedEvidence
 *
 * 
 */
export interface IssuingDisputeServiceNotAsDescribedEvidence {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: AdditionalDocumentationOrRef;
  /**
   * Date when order was canceled.
   */
  canceledAt?: number;
  /**
   * Reason for canceling the order.
   */
  cancellationReason?: string;
  /**
   * Explanation of why the cardholder is disputing this transaction.
   */
  explanation?: string;
  /**
   * Date when the product was received.
   */
  receivedAt?: number;
}

export const IssuingDisputeServiceNotAsDescribedEvidenceSchema: TypedSchema<IssuingDisputeServiceNotAsDescribedEvidence> = typed<IssuingDisputeServiceNotAsDescribedEvidence>(object({
  get additionalDocumentation() { return optional(AdditionalDocumentationOrRefSchema) },
  canceledAt: optional(number()),
  cancellationReason: optional(string()),
  explanation: optional(string()),
  receivedAt: optional(number()),
}));