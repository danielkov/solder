import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
export interface PostTaxTransactionsCreateFromCalculationRequest {
  /**
   * Tax Calculation ID to be used as input when creating the transaction.
   */
  calculation: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The Unix timestamp representing when the tax liability is assumed or reduced, which determines the liability posting period and handling in tax liability reports. The timestamp must fall within the `tax_date` and the current time, unless the `tax_date` is scheduled in advance. Defaults to the current time.
   */
  postedAt?: number;
  /**
   * A custom order or sale identifier, such as 'myOrder_123'. Must be unique across all transactions, including reversals.
   */
  reference: string;
}

export const PostTaxTransactionsCreateFromCalculationRequestSchema: TypedSchema<PostTaxTransactionsCreateFromCalculationRequest> = typed<PostTaxTransactionsCreateFromCalculationRequest>(object({
  calculation: string(),
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  postedAt: optional(number()),
  reference: string(),
}));