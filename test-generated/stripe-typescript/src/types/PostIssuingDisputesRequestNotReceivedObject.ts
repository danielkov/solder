import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCanceledAt } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import { PostIssuingDisputesRequestCanceledObjectCanceledAtSchema } from './PostIssuingDisputesRequestCanceledObjectCanceledAt';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * not_received
 */
export interface PostIssuingDisputesRequestNotReceivedObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  expectedAt?: PostIssuingDisputesRequestCanceledObjectCanceledAt;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  productDescription?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  productType?: string;
}

export const PostIssuingDisputesRequestNotReceivedObjectSchema: TypedSchema<PostIssuingDisputesRequestNotReceivedObject> = typed<PostIssuingDisputesRequestNotReceivedObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get expectedAt() { return optional(PostIssuingDisputesRequestCanceledObjectCanceledAtSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  get productDescription() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  productType: optional(string()),
}));