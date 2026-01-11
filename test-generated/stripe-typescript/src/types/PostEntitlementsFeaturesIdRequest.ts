import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostEntitlementsFeaturesIdRequestMetadata } from './PostEntitlementsFeaturesIdRequestMetadata';
import { PostEntitlementsFeaturesIdRequestMetadataSchema } from './PostEntitlementsFeaturesIdRequestMetadata';
export interface PostEntitlementsFeaturesIdRequest {
  /**
   * Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
   */
  active?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: PostEntitlementsFeaturesIdRequestMetadata;
  /**
   * The feature's name, for your own purpose, not meant to be displayable to the customer.
   */
  name?: string;
}

export const PostEntitlementsFeaturesIdRequestSchema: TypedSchema<PostEntitlementsFeaturesIdRequest> = typed<PostEntitlementsFeaturesIdRequest>(object({
  active: optional(boolean()),
  expand: optional(array(string())),
  get metadata() { return optional(PostEntitlementsFeaturesIdRequestMetadataSchema) },
  name: optional(string()),
}));