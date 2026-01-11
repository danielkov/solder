import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerFundingInstructionsRequestBankTransfer } from './PostCustomersCustomerFundingInstructionsRequestBankTransfer';
import { PostCustomersCustomerFundingInstructionsRequestBankTransferSchema } from './PostCustomersCustomerFundingInstructionsRequestBankTransfer';
export interface PostCustomersCustomerFundingInstructionsRequest {
  /**
   * bank_transfer_params
   *
   * Additional parameters for `bank_transfer` funding types
   */
  bankTransfer: PostCustomersCustomerFundingInstructionsRequestBankTransfer;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The `funding_type` to get the instructions for.
   */
  fundingType: string;
}

export const PostCustomersCustomerFundingInstructionsRequestSchema: TypedSchema<PostCustomersCustomerFundingInstructionsRequest> = typed<PostCustomersCustomerFundingInstructionsRequest>(object({
  bankTransfer: PostCustomersCustomerFundingInstructionsRequestBankTransferSchema,
  currency: string(),
  expand: optional(array(string())),
  fundingType: string(),
}));