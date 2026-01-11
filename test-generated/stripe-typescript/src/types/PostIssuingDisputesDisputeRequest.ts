import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostIssuingDisputesRequestEvidence } from './PostIssuingDisputesRequestEvidence';
import { PostIssuingDisputesRequestEvidenceSchema } from './PostIssuingDisputesRequestEvidence';
export interface PostIssuingDisputesDisputeRequest {
  /**
   * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount?: number;
  /**
   * evidence_param
   *
   * Evidence provided for the dispute.
   */
  evidence?: PostIssuingDisputesRequestEvidence;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
}

export const PostIssuingDisputesDisputeRequestSchema: TypedSchema<PostIssuingDisputesDisputeRequest> = typed<PostIssuingDisputesDisputeRequest>(object({
  amount: optional(number()),
  get evidence() { return optional(PostIssuingDisputesRequestEvidenceSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
}));