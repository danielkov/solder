import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 *
 * If this is an nz_bank_account PaymentMethod, this hash contains details about the nz_bank_account payment method.
 */
export interface PostPaymentMethodsRequestNzBankAccount {
  accountHolderName?: string;
  accountNumber: string;
  bankCode: string;
  branchCode: string;
  reference?: string;
  suffix: string;
}

export const PostPaymentMethodsRequestNzBankAccountSchema: TypedSchema<PostPaymentMethodsRequestNzBankAccount> = typed<PostPaymentMethodsRequestNzBankAccount>(object({
  accountHolderName: optional(string()),
  accountNumber: string(),
  bankCode: string(),
  branchCode: string(),
  reference: optional(string()),
  suffix: string(),
}));