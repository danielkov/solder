import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
export interface PostRadarValueListsValueListRequest {
  /**
   * The name of the value list for use in rules.
   */
  alias?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The human-readable name of the value list.
   */
  name?: string;
}

export const PostRadarValueListsValueListRequestSchema: TypedSchema<PostRadarValueListsValueListRequest> = typed<PostRadarValueListsValueListRequest>(object({
  alias: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  name: optional(string()),
}));