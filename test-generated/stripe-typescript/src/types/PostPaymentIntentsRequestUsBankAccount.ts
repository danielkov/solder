import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_param
 */
export interface PostPaymentIntentsRequestUsBankAccount {
  accountHolderType?: string;
  accountNumber?: string;
  accountType?: string;
  financialConnectionsAccount?: string;
  routingNumber?: string;
}

export const PostPaymentIntentsRequestUsBankAccountSchema: TypedSchema<PostPaymentIntentsRequestUsBankAccount> = typed<PostPaymentIntentsRequestUsBankAccount>(object({
  accountHolderType: optional(string()),
  accountNumber: optional(string()),
  accountType: optional(string()),
  financialConnectionsAccount: optional(string()),
  routingNumber: optional(string()),
}));