import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingCreditGrantsIdRequestExpiresAt } from './PostBillingCreditGrantsIdRequestExpiresAt';
import { PostBillingCreditGrantsIdRequestExpiresAtSchema } from './PostBillingCreditGrantsIdRequestExpiresAt';
import type { PostBillingCreditGrantsIdRequestMetadata } from './PostBillingCreditGrantsIdRequestMetadata';
import { PostBillingCreditGrantsIdRequestMetadataSchema } from './PostBillingCreditGrantsIdRequestMetadata';
export interface PostBillingCreditGrantsIdRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The time when the billing credits created by this credit grant expire. If set to empty, the billing credits never expire.
   */
  expiresAt?: PostBillingCreditGrantsIdRequestExpiresAt;
  /**
   * Set of key-value pairs you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
   */
  metadata?: PostBillingCreditGrantsIdRequestMetadata;
}

export const PostBillingCreditGrantsIdRequestSchema: TypedSchema<PostBillingCreditGrantsIdRequest> = typed<PostBillingCreditGrantsIdRequest>(object({
  expand: optional(array(string())),
  get expiresAt() { return optional(PostBillingCreditGrantsIdRequestExpiresAtSchema) },
  get metadata() { return optional(PostBillingCreditGrantsIdRequestMetadataSchema) },
}));