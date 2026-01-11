import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
/**
 * file_link_creation_params
 *
 * Optional parameters that automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
 */
export interface PostFilesRequestFileLinkData {
  create: boolean;
  expiresAt?: number;
  metadata?: PostAccountsRequestMetadata;
}

export const PostFilesRequestFileLinkDataSchema: TypedSchema<PostFilesRequestFileLinkData> = typed<PostFilesRequestFileLinkData>(object({
  create: boolean(),
  expiresAt: optional(number()),
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
}));