import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_payment_method_options_customer_balance_bank_transfer_eu_bank_transfer
 *
 * 
 */
export interface InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer {
  /**
   * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
   */
  country: string;
}

export const InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransferSchema: TypedSchema<InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer> = typed<InvoicePaymentMethodOptionsCustomerBalanceBankTransferEuBankTransfer>(object({
  country: string(),
}));