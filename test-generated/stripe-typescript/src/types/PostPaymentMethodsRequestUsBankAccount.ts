import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_param
 *
 * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
 */
export interface PostPaymentMethodsRequestUsBankAccount {
  accountHolderType?: string;
  accountNumber?: string;
  accountType?: string;
  financialConnectionsAccount?: string;
  routingNumber?: string;
}

export const PostPaymentMethodsRequestUsBankAccountSchema: TypedSchema<PostPaymentMethodsRequestUsBankAccount> = typed<PostPaymentMethodsRequestUsBankAccount>(object({
  accountHolderType: optional(string()),
  accountNumber: optional(string()),
  accountType: optional(string()),
  financialConnectionsAccount: optional(string()),
  routingNumber: optional(string()),
}));