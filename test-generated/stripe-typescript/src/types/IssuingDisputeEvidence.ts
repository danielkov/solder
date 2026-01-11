import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { IssuingDisputeCanceledEvidence } from './IssuingDisputeCanceledEvidence';
import { IssuingDisputeCanceledEvidenceSchema } from './IssuingDisputeCanceledEvidence';
import type { IssuingDisputeDuplicateEvidence } from './IssuingDisputeDuplicateEvidence';
import { IssuingDisputeDuplicateEvidenceSchema } from './IssuingDisputeDuplicateEvidence';
import type { IssuingDisputeFraudulentEvidence } from './IssuingDisputeFraudulentEvidence';
import { IssuingDisputeFraudulentEvidenceSchema } from './IssuingDisputeFraudulentEvidence';
import type { IssuingDisputeMerchandiseNotAsDescribedEvidence } from './IssuingDisputeMerchandiseNotAsDescribedEvidence';
import { IssuingDisputeMerchandiseNotAsDescribedEvidenceSchema } from './IssuingDisputeMerchandiseNotAsDescribedEvidence';
import type { IssuingDisputeNoValidAuthorizationEvidence } from './IssuingDisputeNoValidAuthorizationEvidence';
import { IssuingDisputeNoValidAuthorizationEvidenceSchema } from './IssuingDisputeNoValidAuthorizationEvidence';
import type { IssuingDisputeNotReceivedEvidence } from './IssuingDisputeNotReceivedEvidence';
import { IssuingDisputeNotReceivedEvidenceSchema } from './IssuingDisputeNotReceivedEvidence';
import type { IssuingDisputeOtherEvidence } from './IssuingDisputeOtherEvidence';
import { IssuingDisputeOtherEvidenceSchema } from './IssuingDisputeOtherEvidence';
import type { IssuingDisputeServiceNotAsDescribedEvidence } from './IssuingDisputeServiceNotAsDescribedEvidence';
import { IssuingDisputeServiceNotAsDescribedEvidenceSchema } from './IssuingDisputeServiceNotAsDescribedEvidence';
/**
 * IssuingDisputeEvidence
 *
 * 
 */
export interface IssuingDisputeEvidence {
  /**
   * IssuingDisputeCanceledEvidence
   *
   * 
   */
  canceled?: IssuingDisputeCanceledEvidence;
  /**
   * IssuingDisputeDuplicateEvidence
   *
   * 
   */
  duplicate?: IssuingDisputeDuplicateEvidence;
  /**
   * IssuingDisputeFraudulentEvidence
   *
   * 
   */
  fraudulent?: IssuingDisputeFraudulentEvidence;
  /**
   * IssuingDisputeMerchandiseNotAsDescribedEvidence
   *
   * 
   */
  merchandiseNotAsDescribed?: IssuingDisputeMerchandiseNotAsDescribedEvidence;
  /**
   * IssuingDisputeNoValidAuthorizationEvidence
   *
   * 
   */
  noValidAuthorization?: IssuingDisputeNoValidAuthorizationEvidence;
  /**
   * IssuingDisputeNotReceivedEvidence
   *
   * 
   */
  notReceived?: IssuingDisputeNotReceivedEvidence;
  /**
   * IssuingDisputeOtherEvidence
   *
   * 
   */
  other?: IssuingDisputeOtherEvidence;
  /**
   * The reason for filing the dispute. Its value will match the field containing the evidence.
   */
  reason: string;
  /**
   * IssuingDisputeServiceNotAsDescribedEvidence
   *
   * 
   */
  serviceNotAsDescribed?: IssuingDisputeServiceNotAsDescribedEvidence;
}

export const IssuingDisputeEvidenceSchema: TypedSchema<IssuingDisputeEvidence> = typed<IssuingDisputeEvidence>(object({
  get canceled() { return optional(IssuingDisputeCanceledEvidenceSchema) },
  get duplicate() { return optional(IssuingDisputeDuplicateEvidenceSchema) },
  get fraudulent() { return optional(IssuingDisputeFraudulentEvidenceSchema) },
  get merchandiseNotAsDescribed() { return optional(IssuingDisputeMerchandiseNotAsDescribedEvidenceSchema) },
  get noValidAuthorization() { return optional(IssuingDisputeNoValidAuthorizationEvidenceSchema) },
  get notReceived() { return optional(IssuingDisputeNotReceivedEvidenceSchema) },
  get other() { return optional(IssuingDisputeOtherEvidenceSchema) },
  reason: string(),
  get serviceNotAsDescribed() { return optional(IssuingDisputeServiceNotAsDescribedEvidenceSchema) },
}));