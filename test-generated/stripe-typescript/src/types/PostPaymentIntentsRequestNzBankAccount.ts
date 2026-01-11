import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * param
 */
export interface PostPaymentIntentsRequestNzBankAccount {
  accountHolderName?: string;
  accountNumber: string;
  bankCode: string;
  branchCode: string;
  reference?: string;
  suffix: string;
}

export const PostPaymentIntentsRequestNzBankAccountSchema: TypedSchema<PostPaymentIntentsRequestNzBankAccount> = typed<PostPaymentIntentsRequestNzBankAccount>(object({
  accountHolderName: optional(string()),
  accountNumber: string(),
  bankCode: string(),
  branchCode: string(),
  reference: optional(string()),
  suffix: string(),
}));