import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * no_valid_authorization
 */
export interface PostIssuingDisputesRequestNoValidAuthorizationObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
}

export const PostIssuingDisputesRequestNoValidAuthorizationObjectSchema: TypedSchema<PostIssuingDisputesRequestNoValidAuthorizationObject> = typed<PostIssuingDisputesRequestNoValidAuthorizationObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
}));