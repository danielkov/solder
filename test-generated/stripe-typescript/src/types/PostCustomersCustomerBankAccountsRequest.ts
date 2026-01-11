import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostChargesRequestCard } from './PostChargesRequestCard';
import { PostChargesRequestCardSchema } from './PostChargesRequestCard';
import type { PostCustomersCustomerRequestBankAccount } from './PostCustomersCustomerRequestBankAccount';
import { PostCustomersCustomerRequestBankAccountSchema } from './PostCustomersCustomerRequestBankAccount';
export interface PostCustomersCustomerBankAccountsRequest {
  /**
   * A token returned by [Stripe.js](https://stripe.com/docs/js) representing the user’s Alipay account details.
   */
  alipayAccount?: string;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: PostCustomersCustomerRequestBankAccount;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: PostChargesRequestCard;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * Please refer to full [documentation](https://stripe.com/docs/api) instead.
   */
  source?: string;
}

export const PostCustomersCustomerBankAccountsRequestSchema: TypedSchema<PostCustomersCustomerBankAccountsRequest> = typed<PostCustomersCustomerBankAccountsRequest>(object({
  alipayAccount: optional(string()),
  get bankAccount() { return optional(PostCustomersCustomerRequestBankAccountSchema) },
  get card() { return optional(PostChargesRequestCardSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  source: optional(string()),
}));