import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
export type PostInvoicesInvoiceLinesLineItemIdRequestMetadata = PostAccountsRequestMetadataObject | string;

export const PostInvoicesInvoiceLinesLineItemIdRequestMetadataSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequestMetadata> = typed<PostInvoicesInvoiceLinesLineItemIdRequestMetadata>(union(PostAccountsRequestMetadataObjectSchema, string()));