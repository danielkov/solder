import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * DeletedBankAccount
 *
 * 
 */
export interface DeletedBankAccount {
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
   */
  currency?: string;
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const DeletedBankAccountSchema: TypedSchema<DeletedBankAccount> = typed<DeletedBankAccount>(object({
  currency: optional(string()),
  deleted: boolean(),
  id: string(),
  object: string(),
}));