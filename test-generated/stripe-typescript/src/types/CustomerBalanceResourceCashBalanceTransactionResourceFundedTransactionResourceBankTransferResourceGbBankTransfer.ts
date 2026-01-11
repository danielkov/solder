import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer {
  /**
   * The last 4 digits of the account number of the sender of the funding.
   */
  accountNumberLast4?: string;
  /**
   * The full name of the sender, as supplied by the sending bank.
   */
  senderName?: string;
  /**
   * The sort code of the bank of the sender of the funding
   */
  sortCode?: string;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransferSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer> = typed<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer>(object({
  accountNumberLast4: optional(string()),
  senderName: optional(string()),
  sortCode: optional(string()),
}));