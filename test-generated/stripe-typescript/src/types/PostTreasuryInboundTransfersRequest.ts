import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
export interface PostTreasuryInboundTransfersRequest {
  /**
   * Amount (in cents) to be transferred.
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
   * The FinancialAccount to send funds to.
   */
  financialAccount: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The origin payment method to be debited for the InboundTransfer.
   */
  originPaymentMethod: string;
  /**
   * The complete description that appears on your customers' statements. Maximum 10 characters.
   */
  statementDescriptor?: string;
}

export const PostTreasuryInboundTransfersRequestSchema: TypedSchema<PostTreasuryInboundTransfersRequest> = typed<PostTreasuryInboundTransfersRequest>(object({
  amount: number(),
  currency: string(),
  description: optional(string()),
  expand: optional(array(string())),
  financialAccount: string(),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  originPaymentMethod: string(),
  statementDescriptor: optional(string()),
}));