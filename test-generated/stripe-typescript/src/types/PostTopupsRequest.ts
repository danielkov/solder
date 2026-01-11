import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostTopupsRequest {
  /**
   * A positive integer representing how much to transfer.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
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
  /**
   * The ID of a source to transfer funds from. For most users, this should be left unspecified which will use the bank account that was set up in the dashboard for the specified currency. In test mode, this can be a test bank token (see [Testing Top-ups](https://stripe.com/docs/connect/testing#testing-top-ups)).
   */
  source?: string;
  /**
   * Extra information about a top-up for the source's bank statement. Limited to 15 ASCII characters.
   */
  statementDescriptor?: string;
  /**
   * A string that identifies this top-up as part of a group.
   */
  transferGroup?: string;
}

export const PostTopupsRequestSchema: TypedSchema<PostTopupsRequest> = typed<PostTopupsRequest>(object({
  amount: number(),
  currency: string(),
  description: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  source: optional(string()),
  statementDescriptor: optional(string()),
  transferGroup: optional(string()),
}));