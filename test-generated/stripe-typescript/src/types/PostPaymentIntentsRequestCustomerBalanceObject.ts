import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestBankTransfer } from './PostCheckoutSessionsRequestBankTransfer';
import { PostCheckoutSessionsRequestBankTransferSchema } from './PostCheckoutSessionsRequestBankTransfer';
/**
 * payment_intent_payment_method_options_param
 */
export interface PostPaymentIntentsRequestCustomerBalanceObject {
  /**
   * bank_transfer_param
   */
  bankTransfer?: PostCheckoutSessionsRequestBankTransfer;
  fundingType?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestCustomerBalanceObjectSchema: TypedSchema<PostPaymentIntentsRequestCustomerBalanceObject> = typed<PostPaymentIntentsRequestCustomerBalanceObject>(object({
  get bankTransfer() { return optional(PostCheckoutSessionsRequestBankTransferSchema) },
  fundingType: optional(string()),
  setupFutureUsage: optional(string()),
}));