import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AdditionalDocumentationOrRef } from './AdditionalDocumentationOrRef';
import { AdditionalDocumentationOrRefSchema } from './AdditionalDocumentationOrRef';
/**
 * IssuingDisputeCanceledEvidence
 *
 * 
 */
export interface IssuingDisputeCanceledEvidence {
  /**
   * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
   */
  additionalDocumentation?: AdditionalDocumentationOrRef;
  /**
   * Date when order was canceled.
   */
  canceledAt?: number;
  /**
   * Whether the cardholder was provided with a cancellation policy.
   */
  cancellationPolicyProvided?: boolean;
  /**
   * Reason for canceling the order.
   */
  cancellationReason?: string;
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
  /**
   * Result of cardholder's attempt to return the product.
   */
  returnStatus?: string;
  /**
   * Date when the product was returned or attempted to be returned.
   */
  returnedAt?: number;
}

export const IssuingDisputeCanceledEvidenceSchema: TypedSchema<IssuingDisputeCanceledEvidence> = typed<IssuingDisputeCanceledEvidence>(object({
  get additionalDocumentation() { return optional(AdditionalDocumentationOrRefSchema) },
  canceledAt: optional(number()),
  cancellationPolicyProvided: optional(boolean()),
  cancellationReason: optional(string()),
  expectedAt: optional(number()),
  explanation: optional(string()),
  productDescription: optional(string()),
  productType: optional(string()),
  returnStatus: optional(string()),
  returnedAt: optional(number()),
}));