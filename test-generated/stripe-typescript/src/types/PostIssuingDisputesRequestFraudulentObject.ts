import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * fraudulent
 */
export interface PostIssuingDisputesRequestFraudulentObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
}

export const PostIssuingDisputesRequestFraudulentObjectSchema: TypedSchema<PostIssuingDisputesRequestFraudulentObject> = typed<PostIssuingDisputesRequestFraudulentObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
}));