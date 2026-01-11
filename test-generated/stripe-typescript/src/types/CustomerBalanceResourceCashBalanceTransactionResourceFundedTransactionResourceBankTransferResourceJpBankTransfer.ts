import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer {
  /**
   * The name of the bank of the sender of the funding.
   */
  senderBank?: string;
  /**
   * The name of the bank branch of the sender of the funding.
   */
  senderBranch?: string;
  /**
   * The full name of the sender, as supplied by the sending bank.
   */
  senderName?: string;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransferSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer> = typed<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer>(object({
  senderBank: optional(string()),
  senderBranch: optional(string()),
  senderName: optional(string()),
}));