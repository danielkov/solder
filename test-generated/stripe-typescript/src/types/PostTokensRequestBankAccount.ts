import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * token_create_bank_account
 *
 * The bank account this token will represent.
 */
export interface PostTokensRequestBankAccount {
  accountHolderName?: string;
  accountHolderType?: string;
  accountNumber: string;
  accountType?: string;
  country: string;
  currency?: string;
  paymentMethod?: string;
  routingNumber?: string;
}

export const PostTokensRequestBankAccountSchema: TypedSchema<PostTokensRequestBankAccount> = typed<PostTokensRequestBankAccount>(object({
  accountHolderName: optional(string()),
  accountHolderType: optional(string()),
  accountNumber: string(),
  accountType: optional(string()),
  country: string(),
  currency: optional(string()),
  paymentMethod: optional(string()),
  routingNumber: optional(string()),
}));