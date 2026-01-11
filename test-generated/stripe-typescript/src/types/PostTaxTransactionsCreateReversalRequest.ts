import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostTaxTransactionsCreateReversalRequestLineItemsItem } from './PostTaxTransactionsCreateReversalRequestLineItemsItem';
import { PostTaxTransactionsCreateReversalRequestLineItemsItemSchema } from './PostTaxTransactionsCreateReversalRequestLineItemsItem';
import type { PostTaxTransactionsCreateReversalRequestShippingCost } from './PostTaxTransactionsCreateReversalRequestShippingCost';
import { PostTaxTransactionsCreateReversalRequestShippingCostSchema } from './PostTaxTransactionsCreateReversalRequestShippingCost';
export interface PostTaxTransactionsCreateReversalRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A flat amount to reverse across the entire transaction, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative. This value represents the total amount to refund from the transaction, including taxes.
   */
  flatAmount?: number;
  /**
   * The line item amounts to reverse.
   */
  lineItems?: Array<PostTaxTransactionsCreateReversalRequestLineItemsItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * If `partial`, the provided line item or shipping cost amounts are reversed. If `full`, the original transaction is fully reversed.
   */
  mode: string;
  /**
   * The ID of the Transaction to partially or fully reverse.
   */
  originalTransaction: string;
  /**
   * A custom identifier for this reversal, such as `myOrder_123-refund_1`, which must be unique across all transactions. The reference helps identify this reversal transaction in exported [tax reports](https://stripe.com/docs/tax/reports).
   */
  reference: string;
  /**
   * transaction_shipping_cost_reversal
   *
   * The shipping cost to reverse.
   */
  shippingCost?: PostTaxTransactionsCreateReversalRequestShippingCost;
}

export const PostTaxTransactionsCreateReversalRequestSchema: TypedSchema<PostTaxTransactionsCreateReversalRequest> = typed<PostTaxTransactionsCreateReversalRequest>(object({
  expand: optional(array(string())),
  flatAmount: optional(number()),
  get lineItems() { return optional(array(PostTaxTransactionsCreateReversalRequestLineItemsItemSchema)) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  mode: string(),
  originalTransaction: string(),
  reference: string(),
  get shippingCost() { return optional(PostTaxTransactionsCreateReversalRequestShippingCostSchema) },
}));