import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type PostEntitlementsFeaturesIdRequestMetadata = PostAccountsRequestMetadataObject | string;

export const PostEntitlementsFeaturesIdRequestMetadataSchema: TypedSchema<PostEntitlementsFeaturesIdRequestMetadata> = typed<PostEntitlementsFeaturesIdRequestMetadata>(union(PostAccountsRequestMetadataObjectSchema, string()));
