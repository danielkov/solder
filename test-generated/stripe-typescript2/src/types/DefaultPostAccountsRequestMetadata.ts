import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type DefaultPostAccountsRequestMetadata = PostAccountsRequestMetadataObject | string;

export const DefaultPostAccountsRequestMetadataSchema: TypedSchema<DefaultPostAccountsRequestMetadata> = typed<DefaultPostAccountsRequestMetadata>(union(PostAccountsRequestMetadataObjectSchema, string()));
