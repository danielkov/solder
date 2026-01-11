import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * eu_bank_transfer_param
 */
export interface PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer {
  country: string;
}

export const PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransferSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer> = typed<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer>(object({
  country: string(),
}));