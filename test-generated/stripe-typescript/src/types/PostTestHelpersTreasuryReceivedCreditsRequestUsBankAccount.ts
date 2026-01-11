import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * us_bank_account_source_params
 */
export interface PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount {
  accountHolderName?: string;
  accountNumber?: string;
  routingNumber?: string;
}

export const PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccountSchema: TypedSchema<PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount> = typed<PostTestHelpersTreasuryReceivedCreditsRequestUsBankAccount>(object({
  accountHolderName: optional(string()),
  accountNumber: optional(string()),
  routingNumber: optional(string()),
}));