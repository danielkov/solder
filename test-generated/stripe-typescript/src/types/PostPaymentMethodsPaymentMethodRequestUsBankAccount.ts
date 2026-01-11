import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * update_param
 *
 * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
 */
export interface PostPaymentMethodsPaymentMethodRequestUsBankAccount {
  accountHolderType?: string;
  accountType?: string;
}

export const PostPaymentMethodsPaymentMethodRequestUsBankAccountSchema: TypedSchema<PostPaymentMethodsPaymentMethodRequestUsBankAccount> = typed<PostPaymentMethodsPaymentMethodRequestUsBankAccount>(object({
  accountHolderType: optional(string()),
  accountType: optional(string()),
}));