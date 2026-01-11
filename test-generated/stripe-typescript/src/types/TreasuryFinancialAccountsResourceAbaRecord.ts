import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryFinancialAccountsResourceABARecord
 *
 * ABA Records contain U.S. bank account details per the ABA format.
 */
export interface TreasuryFinancialAccountsResourceAbaRecord {
  /**
   * The name of the person or business that owns the bank account.
   */
  accountHolderName: string;
  /**
   * The account number.
   */
  accountNumber?: string;
  /**
   * The last four characters of the account number.
   */
  accountNumberLast4: string;
  /**
   * Name of the bank.
   */
  bankName: string;
  /**
   * Routing number for the account.
   */
  routingNumber: string;
}

export const TreasuryFinancialAccountsResourceAbaRecordSchema: TypedSchema<TreasuryFinancialAccountsResourceAbaRecord> = typed<TreasuryFinancialAccountsResourceAbaRecord>(object({
  accountHolderName: string(),
  accountNumber: optional(string()),
  accountNumberLast4: string(),
  bankName: string(),
  routingNumber: string(),
}));