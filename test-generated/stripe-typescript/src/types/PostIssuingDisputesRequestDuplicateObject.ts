import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostIssuingDisputesRequestCanceledObjectCancellationReason } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
import { PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema } from './PostIssuingDisputesRequestCanceledObjectCancellationReason';
/**
 * duplicate
 */
export interface PostIssuingDisputesRequestDuplicateObject {
  additionalDocumentation?: PostAccountsRequestSupportUrl;
  cardStatement?: PostAccountsRequestSupportUrl;
  cashReceipt?: PostAccountsRequestSupportUrl;
  checkImage?: PostAccountsRequestSupportUrl;
  explanation?: PostIssuingDisputesRequestCanceledObjectCancellationReason;
  originalTransaction?: string;
}

export const PostIssuingDisputesRequestDuplicateObjectSchema: TypedSchema<PostIssuingDisputesRequestDuplicateObject> = typed<PostIssuingDisputesRequestDuplicateObject>(object({
  get additionalDocumentation() { return optional(PostAccountsRequestSupportUrlSchema) },
  get cardStatement() { return optional(PostAccountsRequestSupportUrlSchema) },
  get cashReceipt() { return optional(PostAccountsRequestSupportUrlSchema) },
  get checkImage() { return optional(PostAccountsRequestSupportUrlSchema) },
  get explanation() { return optional(PostIssuingDisputesRequestCanceledObjectCancellationReasonSchema) },
  originalTransaction: optional(string()),
}));