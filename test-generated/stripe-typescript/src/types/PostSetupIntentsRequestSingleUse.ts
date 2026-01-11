import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * setup_intent_single_use_params
 *
 * If you populate this hash, this SetupIntent generates a `single_use` mandate after successful completion.

Single-use mandates are only valid for the following payment methods: `acss_debit`, `alipay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `boleto`, `ideal`, `link`, `sepa_debit`, and `us_bank_account`.
 */
export interface PostSetupIntentsRequestSingleUse {
  amount: number;
  currency: string;
}

export const PostSetupIntentsRequestSingleUseSchema: TypedSchema<PostSetupIntentsRequestSingleUse> = typed<PostSetupIntentsRequestSingleUse>(object({
  amount: number(),
  currency: string(),
}));