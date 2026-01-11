import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostCustomersCustomerBalanceTransactionsTransactionRequest {
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
}

export const PostCustomersCustomerBalanceTransactionsTransactionRequestSchema: TypedSchema<PostCustomersCustomerBalanceTransactionsTransactionRequest> = typed<PostCustomersCustomerBalanceTransactionsTransactionRequest>(object({
  description: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
}));