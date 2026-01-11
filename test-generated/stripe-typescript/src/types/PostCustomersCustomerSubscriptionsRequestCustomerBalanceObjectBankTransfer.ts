import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer } from './PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer';
import { PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransferSchema } from './PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer';
/**
 * bank_transfer_param
 */
export interface PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer {
  /**
   * eu_bank_transfer_param
   */
  euBankTransfer?: PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransfer;
  type?: string;
}

export const PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransferSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer> = typed<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer>(object({
  get euBankTransfer() { return optional(PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectEuBankTransferSchema) },
  type: optional(string()),
}));