import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCanceledAt } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import { PostIssuingDisputesRequestCanceledObjectCanceledAtSchema } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * merchandise_not_as_described
 */
export interface PostIssuingDisputesRequestMerchandiseNotAsDescribedObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  receivedAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
  returnDescription?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  returnStatus?: string;
  returnedAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
}

export const PostIssuingDisputesRequestMerchandiseNotAsDescribedObjectSchema: TypedSchema<PostIssuingDisputesRequestMerchandiseNotAsDescribedObject> = typed<PostIssuingDisputesRequestMerchandiseNotAsDescribedObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  get receivedAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
  get returnDescription() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  returnStatus: optional(string()),
  get returnedAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
}));