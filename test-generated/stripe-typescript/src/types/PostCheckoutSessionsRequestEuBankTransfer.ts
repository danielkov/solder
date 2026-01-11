import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * eu_bank_transfer_params
 */
export interface PostCheckoutSessionsRequestEuBankTransfer {
  country: string;
}

export const PostCheckoutSessionsRequestEuBankTransferSchema: TypedSchema<PostCheckoutSessionsRequestEuBankTransfer> = typed<PostCheckoutSessionsRequestEuBankTransfer>(object({
  country: string(),
}));