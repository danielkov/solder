import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransferSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer';
import type { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransferSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer';
import type { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransferSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer';
import type { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer';
import { CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransferSchema } from './CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer';
/**
 * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer
 *
 * 
 */
export interface CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer {
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer
   *
   * 
   */
  euBankTransfer?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransfer;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer
   *
   * 
   */
  gbBankTransfer?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransfer;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer
   *
   * 
   */
  jpBankTransfer?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransfer;
  /**
   * The user-supplied reference field on the bank transfer.
   */
  reference?: string;
  /**
   * The funding method type used to fund the customer balance. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
   */
  type: string;
  /**
   * CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer
   *
   * 
   */
  usBankTransfer?: CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransfer;
}

export const CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferSchema: TypedSchema<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer> = typed<CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransfer>(object({
  get euBankTransfer() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceEuBankTransferSchema) },
  get gbBankTransfer() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceGbBankTransferSchema) },
  get jpBankTransfer() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceJpBankTransferSchema) },
  reference: optional(string()),
  type: string(),
  get usBankTransfer() { return optional(CustomerBalanceResourceCashBalanceTransactionResourceFundedTransactionResourceBankTransferResourceUsBankTransferSchema) },
}));