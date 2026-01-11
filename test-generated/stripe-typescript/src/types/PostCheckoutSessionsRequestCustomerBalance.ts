import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestBankTransfer } from './PostCheckoutSessionsRequestBankTransfer';
import { PostCheckoutSessionsRequestBankTransferSchema } from './PostCheckoutSessionsRequestBankTransfer';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestCustomerBalance {
  /**
   * bank_transfer_param
   */
  bankTransfer?: PostCheckoutSessionsRequestBankTransfer;
  fundingType?: string;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestCustomerBalanceSchema: TypedSchema<PostCheckoutSessionsRequestCustomerBalance> = typed<PostCheckoutSessionsRequestCustomerBalance>(object({
  get bankTransfer() { return optional(PostCheckoutSessionsRequestBankTransferSchema) },
  fundingType: optional(string()),
  setupFutureUsage: optional(string()),
}));