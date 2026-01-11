import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostTerminalReadersReaderRequestLabel } from './PostTerminalReadersReaderRequestLabel';
import { PostTerminalReadersReaderRequestLabelSchema } from './PostTerminalReadersReaderRequestLabel';
export interface PostTerminalReadersReaderRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The new label of the reader.
   */
  label?: PostTerminalReadersReaderRequestLabel;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
}

export const PostTerminalReadersReaderRequestSchema: TypedSchema<PostTerminalReadersReaderRequest> = typed<PostTerminalReadersReaderRequest>(object({
  expand: optional(array(string())),
  get label() { return optional(PostTerminalReadersReaderRequestLabelSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
}));