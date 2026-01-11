import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerFundingInstructionsRequestEuBankTransfer } from './PostCustomersCustomerFundingInstructionsRequestEuBankTransfer';
import { PostCustomersCustomerFundingInstructionsRequestEuBankTransferSchema } from './PostCustomersCustomerFundingInstructionsRequestEuBankTransfer';
/**
 * bank_transfer_params
 *
 * Additional parameters for `bank_transfer` funding types
 */
export interface PostCustomersCustomerFundingInstructionsRequestBankTransfer {
  /**
   * eu_bank_account_params
   */
  euBankTransfer?: PostCustomersCustomerFundingInstructionsRequestEuBankTransfer;
  requestedAddressTypes?: Array<string>;
  type: string;
}

export const PostCustomersCustomerFundingInstructionsRequestBankTransferSchema: TypedSchema<PostCustomersCustomerFundingInstructionsRequestBankTransfer> = typed<PostCustomersCustomerFundingInstructionsRequestBankTransfer>(object({
  get euBankTransfer() { return optional(PostCustomersCustomerFundingInstructionsRequestEuBankTransferSchema) },
  requestedAddressTypes: optional(array(string())),
  type: string(),
}));