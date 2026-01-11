import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasurySharedResourceInitiatingPaymentMethodDetailsUSBankAccount
 *
 * 
 */
export interface TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount {
  /**
   * Bank name.
   */
  bankName?: string;
  /**
   * The last four digits of the bank account number.
   */
  last4?: string;
  /**
   * The routing number for the bank account.
   */
  routingNumber?: string;
}

export const TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccountSchema: TypedSchema<TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount> = typed<TreasurySharedResourceInitiatingPaymentMethodDetailsUsBankAccount>(object({
  bankName: optional(string()),
  last4: optional(string()),
  routingNumber: optional(string()),
}));