import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * customer_payment_source_bank_account
 */
export interface PostCustomersCustomerRequestBankAccountObject {
  accountHolderName?: string;
  accountHolderType?: string;
  accountNumber: string;
  country: string;
  currency?: string;
  object?: string;
  routingNumber?: string;
}

export const PostCustomersCustomerRequestBankAccountObjectSchema: TypedSchema<PostCustomersCustomerRequestBankAccountObject> = typed<PostCustomersCustomerRequestBankAccountObject>(object({
  accountHolderName: optional(string()),
  accountHolderType: optional(string()),
  accountNumber: string(),
  country: string(),
  currency: optional(string()),
  object: optional(string()),
  routingNumber: optional(string()),
}));