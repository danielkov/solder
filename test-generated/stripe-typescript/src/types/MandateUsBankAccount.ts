import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_us_bank_account
 *
 * 
 */
export interface MandateUsBankAccount {
  /**
   * Mandate collection method
   */
  collectionMethod?: string;
}

export const MandateUsBankAccountSchema: TypedSchema<MandateUsBankAccount> = typed<MandateUsBankAccount>(object({
  collectionMethod: optional(string()),
}));