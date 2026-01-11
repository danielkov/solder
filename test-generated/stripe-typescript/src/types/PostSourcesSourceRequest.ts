import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostSourcesRequestMandate } from './PostSourcesRequestMandate';
import { PostSourcesRequestMandateSchema } from './PostSourcesRequestMandate';
import type { PostSourcesRequestOwner } from './PostSourcesRequestOwner';
import { PostSourcesRequestOwnerSchema } from './PostSourcesRequestOwner';
import type { PostSourcesSourceRequestSourceOrder } from './PostSourcesSourceRequestSourceOrder';
import { PostSourcesSourceRequestSourceOrderSchema } from './PostSourcesSourceRequestSourceOrder';
export interface PostSourcesSourceRequest {
  /**
   * Amount associated with the source.
   */
  amount?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * mandate_params
   *
   * Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
   */
  mandate?: PostSourcesRequestMandate;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * owner
   *
   * Information about the owner of the payment instrument that may be used or required by particular source types.
   */
  owner?: PostSourcesRequestOwner;
  /**
   * order_params
   *
   * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
   */
  sourceOrder?: PostSourcesSourceRequestSourceOrder;
}

export const PostSourcesSourceRequestSchema: TypedSchema<PostSourcesSourceRequest> = typed<PostSourcesSourceRequest>(object({
  amount: optional(number()),
  expand: optional(array(string())),
  get mandate() { return optional(PostSourcesRequestMandateSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get owner() { return optional(PostSourcesRequestOwnerSchema) },
  get sourceOrder() { return optional(PostSourcesSourceRequestSourceOrderSchema) },
}));