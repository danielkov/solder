import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostEntitlementsFeaturesRequestMetadata } from './PostEntitlementsFeaturesRequestMetadata';
import { PostEntitlementsFeaturesRequestMetadataSchema } from './PostEntitlementsFeaturesRequestMetadata';
export interface PostEntitlementsFeaturesRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A unique key you provide as your own system identifier. This may be up to 80 characters.
   */
  lookupKey: string;
  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: PostEntitlementsFeaturesRequestMetadata;
  /**
   * The feature's name, for your own purpose, not meant to be displayable to the customer.
   */
  name: string;
}

export const PostEntitlementsFeaturesRequestSchema: TypedSchema<PostEntitlementsFeaturesRequest> = typed<PostEntitlementsFeaturesRequest>(object({
  expand: optional(array(string())),
  lookupKey: string(),
  get metadata() { return optional(PostEntitlementsFeaturesRequestMetadataSchema) },
  name: string(),
}));