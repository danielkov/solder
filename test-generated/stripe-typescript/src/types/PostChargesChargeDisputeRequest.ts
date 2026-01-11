import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostChargesChargeDisputeRequestEvidence } from './PostChargesChargeDisputeRequestEvidence';
import { PostChargesChargeDisputeRequestEvidenceSchema } from './PostChargesChargeDisputeRequestEvidence';
export interface PostChargesChargeDisputeRequest {
  /**
   * dispute_evidence_params
   *
   * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
   */
  evidence?: PostChargesChargeDisputeRequestEvidence;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).
   */
  submit?: boolean;
}

export const PostChargesChargeDisputeRequestSchema: TypedSchema<PostChargesChargeDisputeRequest> = typed<PostChargesChargeDisputeRequest>(object({
  get evidence() { return optional(PostChargesChargeDisputeRequestEvidenceSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  submit: optional(boolean()),
}));