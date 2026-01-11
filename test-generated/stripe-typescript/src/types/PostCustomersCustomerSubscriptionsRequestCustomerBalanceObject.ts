import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer } from './PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer';
import { PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransferSchema } from './PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer';
/**
 * invoice_payment_method_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestCustomerBalanceObject {
  /**
   * bank_transfer_param
   */
  bankTransfer?: PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransfer;
  fundingType?: string;
}

export const PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObject> = typed<PostCustomersCustomerSubscriptionsRequestCustomerBalanceObject>(object({
  get bankTransfer() { return optional(PostCustomersCustomerSubscriptionsRequestCustomerBalanceObjectBankTransferSchema) },
  fundingType: optional(string()),
}));