import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
export type DefaultPostAccountsRequestMetadata = PostAccountsRequestMetadataObject | string;

export const DefaultPostAccountsRequestMetadataSchema: TypedSchema<DefaultPostAccountsRequestMetadata> = typed<DefaultPostAccountsRequestMetadata>(union(PostAccountsRequestMetadataObjectSchema, string()));