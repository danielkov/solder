import { TypedSchema, literal, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Bank Account
 *
 * A bank account to take payment from. Must be able to make payments in the currency specified in the payment.
 */
export interface SourceUnionObject2 {
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountType: string;
  /**
   * The name of the bank associated with the routing number.
   */
  bankName: string;
  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   */
  country: string;
  name: string;
  /**
   * The account number for the bank account, in string form. Must be a current account.
   */
  number: string;
  object?: "bank_account";
  /**
   * The sort code for the bank account, in string form. Must be a six-digit number.
   */
  sortCode?: string;
}

export const SourceUnionObject2Schema: TypedSchema<SourceUnionObject2> = typed<SourceUnionObject2>(object({
  accountType: string(),
  bankName: string(),
  country: string(),
  name: string(),
  number: string(),
  object: optional(literal("bank_account")),
  sortCode: optional(string()),
}));