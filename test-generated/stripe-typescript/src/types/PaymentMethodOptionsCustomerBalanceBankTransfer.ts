import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodOptionsCustomerBalanceEuBankAccount } from './PaymentMethodOptionsCustomerBalanceEuBankAccount';
import { PaymentMethodOptionsCustomerBalanceEuBankAccountSchema } from './PaymentMethodOptionsCustomerBalanceEuBankAccount';
/**
 * payment_method_options_customer_balance_bank_transfer
 *
 * 
 */
export interface PaymentMethodOptionsCustomerBalanceBankTransfer {
  /**
   * payment_method_options_customer_balance_eu_bank_account
   *
   * 
   */
  euBankTransfer?: PaymentMethodOptionsCustomerBalanceEuBankAccount;
  /**
   * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.

Permitted values include: `sort_code`, `zengin`, `iban`, or `spei`.
   */
  requestedAddressTypes?: Array<string>;
  /**
   * The bank transfer type that this PaymentIntent is allowed to use for funding Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
   */
  type?: string;
}

export const PaymentMethodOptionsCustomerBalanceBankTransferSchema: TypedSchema<PaymentMethodOptionsCustomerBalanceBankTransfer> = typed<PaymentMethodOptionsCustomerBalanceBankTransfer>(object({
  get euBankTransfer() { return optional(PaymentMethodOptionsCustomerBalanceEuBankAccountSchema) },
  requestedAddressTypes: optional(array(string())),
  type: optional(string()),
}));