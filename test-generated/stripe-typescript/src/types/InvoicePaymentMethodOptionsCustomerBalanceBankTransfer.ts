import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer } from './InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer';
import { InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransferSchema } from './InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer';
/**
 * invoice_payment_method_options_customer_balance_bank_transfer
 *
 * 
 */
export interface InvoicePaymentMethodOptionsCustomerBalanceBankTransfer {
  /**
   * invoice_payment_method_options_customer_balance_bank_transfer_eu_bank_transfer
   *
   * 
   */
  euBankTransfer?: InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer;
  /**
   * The bank transfer type that can be used for funding. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
   */
  type?: string;
}

export const InvoicePaymentMethodOptionsCustomerBalanceBankTransferSchema: TypedSchema<InvoicePaymentMethodOptionsCustomerBalanceBankTransfer> = typed<InvoicePaymentMethodOptionsCustomerBalanceBankTransfer>(object({
  get euBankTransfer() { return optional(InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransferSchema) },
  type: optional(string()),
}));