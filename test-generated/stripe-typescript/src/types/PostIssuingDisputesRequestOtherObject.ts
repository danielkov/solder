import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * other
 */
export interface PostIssuingDisputesRequestOtherObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  productDescription?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  productType?: string;
}

export const PostIssuingDisputesRequestOtherObjectSchema: TypedSchema<PostIssuingDisputesRequestOtherObject> = typed<PostIssuingDisputesRequestOtherObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  get productDescription() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  productType: optional(string()),
}));