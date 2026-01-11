import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostCustomersCustomerBalanceTransactionsRequest {
  /**
   * The integer amount in **cents (or local equivalent)** to apply to the customer's credit balance.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Specifies the [`invoice_credit_balance`](https://stripe.com/docs/api/customers/object#customer_object-invoice_credit_balance) that this transaction will apply to. If the customer's `currency` is not set, it will be updated to this value.
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
}

export const PostCustomersCustomerBalanceTransactionsRequestSchema: TypedSchema<PostCustomersCustomerBalanceTransactionsRequest> = typed<PostCustomersCustomerBalanceTransactionsRequest>(object({
  amount: number(),
  currency: string(),
  description: optional(string()),
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
}));