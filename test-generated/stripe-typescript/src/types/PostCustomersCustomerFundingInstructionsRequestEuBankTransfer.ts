import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * eu_bank_account_params
 */
export interface PostCustomersCustomerFundingInstructionsRequestEuBankTransfer {
  country: string;
}

export const PostCustomersCustomerFundingInstructionsRequestEuBankTransferSchema: TypedSchema<PostCustomersCustomerFundingInstructionsRequestEuBankTransfer> = typed<PostCustomersCustomerFundingInstructionsRequestEuBankTransfer>(object({
  country: string(),
}));