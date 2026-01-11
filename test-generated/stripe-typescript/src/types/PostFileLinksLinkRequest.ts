import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostFileLinksLinkRequestExpiresAt } from './PostFileLinksLinkRequestExpiresAt';
import { PostFileLinksLinkRequestExpiresAtSchema } from './PostFileLinksLinkRequestExpiresAt';
export interface PostFileLinksLinkRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
   */
  expiresAt?: PostFileLinksLinkRequestExpiresAt;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
}

export const PostFileLinksLinkRequestSchema: TypedSchema<PostFileLinksLinkRequest> = typed<PostFileLinksLinkRequest>(object({
  expand: optional(array(string())),
  get expiresAt() { return optional(PostFileLinksLinkRequestExpiresAtSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
}));