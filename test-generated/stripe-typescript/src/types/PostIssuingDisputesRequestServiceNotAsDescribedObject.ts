import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCanceledAt } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import { PostIssuingDisputesRequestCanceledObjectCanceledAtSchema } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * service_not_as_described
 */
export interface PostIssuingDisputesRequestServiceNotAsDescribedObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  canceledAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
  cancellationReason?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  receivedAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
}

export const PostIssuingDisputesRequestServiceNotAsDescribedObjectSchema: TypedSchema<PostIssuingDisputesRequestServiceNotAsDescribedObject> = typed<PostIssuingDisputesRequestServiceNotAsDescribedObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get canceledAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
  get cancellationReason() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  get receivedAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
}));