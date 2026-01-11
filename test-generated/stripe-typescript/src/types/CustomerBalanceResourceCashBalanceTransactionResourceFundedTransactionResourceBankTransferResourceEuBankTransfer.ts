import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer {
  /**
   * The BIC of the bank of the sender of the funding.
   */
  bic?: string;
  /**
   * The last 4 digits of the IBAN of the sender of the funding.
   */
  ibanLast4?: string;
  /**
   * The full name of the sender, as supplied by the sending bank.
   */
  senderName?: string;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransferSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer> = typed<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer>(object({
  bic: optional(string()),
  ibanLast4: optional(string()),
  senderName: optional(string()),
}));