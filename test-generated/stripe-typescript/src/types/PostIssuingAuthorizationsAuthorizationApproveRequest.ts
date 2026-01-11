import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostIssuingAuthorizationsAuthorizationApproveRequest {
  /**
   * If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
   */
  amount?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
}

export const PostIssuingAuthorizationsAuthorizationApproveRequestSchema: TypedSchema<PostIssuingAuthorizationsAuthorizationApproveRequest> = typed<PostIssuingAuthorizationsAuthorizationApproveRequest>(object({
  amount: optional(number()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
}));