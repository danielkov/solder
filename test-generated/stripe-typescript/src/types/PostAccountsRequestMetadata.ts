import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
export type PostAccountsRequestMetadata = PostAccountsRequestMetadataObject | string;

export const PostAccountsRequestMetadataSchema: TypedSchema<PostAccountsRequestMetadata> = typed<PostAccountsRequestMetadata>(union(PostAccountsRequestMetadataObjectSchema, string()));