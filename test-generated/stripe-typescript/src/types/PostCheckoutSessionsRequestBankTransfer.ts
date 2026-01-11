import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestEuBankTransfer } from './PostCheckoutSessionsRequestEuBankTransfer';
import { PostCheckoutSessionsRequestEuBankTransferSchema } from './PostCheckoutSessionsRequestEuBankTransfer';
/**
 * bank_transfer_param
 */
export interface PostCheckoutSessionsRequestBankTransfer {
  /**
   * eu_bank_transfer_params
   */
  euBankTransfer?: PostCheckoutSessionsRequestEuBankTransfer;
  requestedAddressTypes?: Array<string>;
  type: string;
}

export const PostCheckoutSessionsRequestBankTransferSchema: TypedSchema<PostCheckoutSessionsRequestBankTransfer> = typed<PostCheckoutSessionsRequestBankTransfer>(object({
  get euBankTransfer() { return optional(PostCheckoutSessionsRequestEuBankTransferSchema) },
  requestedAddressTypes: optional(array(string())),
  type: string(),
}));