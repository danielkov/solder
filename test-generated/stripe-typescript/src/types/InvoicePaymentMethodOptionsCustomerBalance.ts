import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoicePaymentMethodOptionsCustomerBalanceBankTransfer } from './InvoicePaymentMethodOptionsCustomerBalanceBankTransfer';
import { InvoicePaymentMethodOptionsCustomerBalanceBankTransferSchema } from './InvoicePaymentMethodOptionsCustomerBalanceBankTransfer';
/**
 * invoice_payment_method_options_customer_balance
 *
 * 
 */
export interface InvoicePaymentMethodOptionsCustomerBalance {
  /**
   * invoice_payment_method_options_customer_balance_bank_transfer
   *
   * 
   */
  bankTransfer?: InvoicePaymentMethodOptionsCustomerBalanceBankTransfer;
  /**
   * The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`.
   */
  fundingType?: string;
}

export const InvoicePaymentMethodOptionsCustomerBalanceSchema: TypedSchema<InvoicePaymentMethodOptionsCustomerBalance> = typed<InvoicePaymentMethodOptionsCustomerBalance>(object({
  get bankTransfer() { return optional(InvoicePaymentMethodOptionsCustomerBalanceBankTransferSchema) },
  fundingType: optional(string()),
}));