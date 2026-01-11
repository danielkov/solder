import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostIssuingDisputesRequestCanceled } from './PostIssuingDisputesRequestCanceled';
import { PostIssuingDisputesRequestCanceledSchema } from './PostIssuingDisputesRequestCanceled';
import type { PostIssuingDisputesRequestDuplicate } from './PostIssuingDisputesRequestDuplicate';
import { PostIssuingDisputesRequestDuplicateSchema } from './PostIssuingDisputesRequestDuplicate';
import type { PostIssuingDisputesRequestFraudulent } from './PostIssuingDisputesRequestFraudulent';
import { PostIssuingDisputesRequestFraudulentSchema } from './PostIssuingDisputesRequestFraudulent';
import type { PostIssuingDisputesRequestMerchandiseNotAsDescribed } from './PostIssuingDisputesRequestMerchandiseNotAsDescribed';
import { PostIssuingDisputesRequestMerchandiseNotAsDescribedSchema } from './PostIssuingDisputesRequestMerchandiseNotAsDescribed';
import type { PostIssuingDisputesRequestNoValidAuthorization } from './PostIssuingDisputesRequestNoValidAuthorization';
import { PostIssuingDisputesRequestNoValidAuthorizationSchema } from './PostIssuingDisputesRequestNoValidAuthorization';
import type { PostIssuingDisputesRequestNotReceived } from './PostIssuingDisputesRequestNotReceived';
import { PostIssuingDisputesRequestNotReceivedSchema } from './PostIssuingDisputesRequestNotReceived';
import type { PostIssuingDisputesRequestOther } from './PostIssuingDisputesRequestOther';
import { PostIssuingDisputesRequestOtherSchema } from './PostIssuingDisputesRequestOther';
import type { PostIssuingDisputesRequestServiceNotAsDescribed } from './PostIssuingDisputesRequestServiceNotAsDescribed';
import { PostIssuingDisputesRequestServiceNotAsDescribedSchema } from './PostIssuingDisputesRequestServiceNotAsDescribed';
/**
 * evidence_param
 *
 * Evidence provided for the dispute.
 */
export interface PostIssuingDisputesRequestEvidence {
  canceled?: PostIssuingDisputesRequestCanceled;
  duplicate?: PostIssuingDisputesRequestDuplicate;
  fraudulent?: PostIssuingDisputesRequestFraudulent;
  merchandiseNotAsDescribed?: PostIssuingDisputesRequestMerchandiseNotAsDescribed;
  noValidAuthorization?: PostIssuingDisputesRequestNoValidAuthorization;
  notReceived?: PostIssuingDisputesRequestNotReceived;
  other?: PostIssuingDisputesRequestOther;
  reason?: string;
  serviceNotAsDescribed?: PostIssuingDisputesRequestServiceNotAsDescribed;
}

export const PostIssuingDisputesRequestEvidenceSchema: TypedSchema<PostIssuingDisputesRequestEvidence> = typed<PostIssuingDisputesRequestEvidence>(object({
  get canceled() { return optional(PostIssuingDisputesRequestCanceledSchema) },
  get duplicate() { return optional(PostIssuingDisputesRequestDuplicateSchema) },
  get fraudulent() { return optional(PostIssuingDisputesRequestFraudulentSchema) },
  get merchandiseNotAsDescribed() { return optional(PostIssuingDisputesRequestMerchandiseNotAsDescribedSchema) },
  get noValidAuthorization() { return optional(PostIssuingDisputesRequestNoValidAuthorizationSchema) },
  get notReceived() { return optional(PostIssuingDisputesRequestNotReceivedSchema) },
  get other() { return optional(PostIssuingDisputesRequestOtherSchema) },
  reason: optional(string()),
  get serviceNotAsDescribed() { return optional(PostIssuingDisputesRequestServiceNotAsDescribedSchema) },
}));