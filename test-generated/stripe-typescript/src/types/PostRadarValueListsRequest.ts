import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
export interface PostRadarValueListsRequest {
  /**
   * The name of the value list for use in rules.
   */
  alias: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Type of the items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`. Use `string` if the item type is unknown or mixed.
   */
  itemType?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The human-readable name of the value list.
   */
  name: string;
}

export const PostRadarValueListsRequestSchema: TypedSchema<PostRadarValueListsRequest> = typed<PostRadarValueListsRequest>(object({
  alias: string(),
  expand: optional(array(string())),
  itemType: optional(string()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  name: string(),
}));