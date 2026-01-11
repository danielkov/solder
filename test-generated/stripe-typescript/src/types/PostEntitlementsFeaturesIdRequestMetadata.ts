import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
export type PostEntitlementsFeaturesIdRequestMetadata = PostAccountsRequestMetadataObject | string;

export const PostEntitlementsFeaturesIdRequestMetadataSchema: TypedSchema<PostEntitlementsFeaturesIdRequestMetadata> = typed<PostEntitlementsFeaturesIdRequestMetadata>(union(PostAccountsRequestMetadataObjectSchema, string()));