import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
export interface PostTransfersRequest {
  /**
   * A positive integer in cents (or local equivalent) representing how much to transfer.
   */
  amount?: number;
  /**
   * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The ID of a connected Stripe account. <a href="/docs/connect/separate-charges-and-transfers">See the Connect documentation</a> for details.
   */
  destination: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-availability) for details.
   */
  sourceTransaction?: string;
  /**
   * The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
   */
  sourceType?: string;
  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string;
}

export const PostTransfersRequestSchema: TypedSchema<PostTransfersRequest> = typed<PostTransfersRequest>(object({
  amount: optional(number()),
  currency: string(),
  description: optional(string()),
  destination: string(),
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  sourceTransaction: optional(string()),
  sourceType: optional(string()),
  transferGroup: optional(string()),
}));