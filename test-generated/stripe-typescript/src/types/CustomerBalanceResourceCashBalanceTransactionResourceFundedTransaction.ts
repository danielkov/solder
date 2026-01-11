import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction {
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer
   *
   * 
   */
  bankTransfer: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction> = typed<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransaction>(object({
  bankTransfer: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferSchema,
}));