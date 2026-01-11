import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_customer_balance_eu_bank_account
 *
 * 
 */
export interface PaymentMethodOptionsCustomerBalanceEuBankAccount {
  /**
   * The desired country code of the bank account information. Permitted values include: `BE`, `DE`, `ES`, `FR`, `IE`, or `NL`.
   */
  country: string;
}

export const PaymentMethodOptionsCustomerBalanceEuBankAccountSchema: TypedSchema<PaymentMethodOptionsCustomerBalanceEuBankAccount> = typed<PaymentMethodOptionsCustomerBalanceEuBankAccount>(object({
  country: string(),
}));