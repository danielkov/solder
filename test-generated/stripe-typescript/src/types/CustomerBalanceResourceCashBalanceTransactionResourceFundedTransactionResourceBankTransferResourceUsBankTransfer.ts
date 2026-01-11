import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer {
  /**
   * The banking network used for this funding.
   */
  network?: string;
  /**
   * The full name of the sender, as supplied by the sending bank.
   */
  senderName?: string;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransferSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer> = typed<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer>(object({
  network: optional(string()),
  senderName: optional(string()),
}));