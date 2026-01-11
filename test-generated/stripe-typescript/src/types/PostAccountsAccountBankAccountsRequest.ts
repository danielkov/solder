import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostAccountsRequestBankAccount } from './PostAccountsRequestBankAccount';
import { PostAccountsRequestBankAccountSchema } from './PostAccountsRequestBankAccount';
export interface PostAccountsAccountBankAccountsRequest {
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: PostAccountsRequestBankAccount;
  /**
   * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
   */
  defaultForCurrency?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js) or a dictionary containing a user's external account details (with the options shown below). Please refer to full [documentation](https://stripe.com/docs/api/external_accounts) instead.
   */
  externalAccount?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
}

export const PostAccountsAccountBankAccountsRequestSchema: TypedSchema<PostAccountsAccountBankAccountsRequest> = typed<PostAccountsAccountBankAccountsRequest>(object({
  get bankAccount() { return optional(PostAccountsRequestBankAccountSchema) },
  defaultForCurrency: optional(boolean()),
  expand: optional(array(string())),
  externalAccount: optional(string()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
}));