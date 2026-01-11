import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCanceledAt } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import { PostIssuingDisputesRequestCanceledObjectCanceledAtSchema } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import type { PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided } from './PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided';
import { PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvidedSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * canceled
 */
export interface PostIssuingDisputesRequestCanceledObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  canceledAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
  cancellationPolicyProvided?: PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvided;
  cancellationReason?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  expectedAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  productDescription?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  productType?: string;
  returnStatus?: string;
  returnedAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
}

export const PostIssuingDisputesRequestCanceledObjectSchema: TypedSchema<PostIssuingDisputesRequestCanceledObject> = typed<PostIssuingDisputesRequestCanceledObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get canceledAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
  get cancellationPolicyProvided() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationPolicyProvidedSchema) },
  get cancellationReason() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  get expectedAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  get productDescription() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  productType: optional(string()),
  returnStatus: optional(string()),
  get returnedAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
}));