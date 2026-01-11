import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { InvoicePaymentMethodOptionsAcssDebit } from './InvoicePaymentMethodOptionsAcssDebit';
import { InvoicePaymentMethodOptionsAcssDebitSchema } from './InvoicePaymentMethodOptionsAcssDebit';
import type { InvoicePaymentMethodOptionsBancontact } from './InvoicePaymentMethodOptionsBancontact';
import { InvoicePaymentMethodOptionsBancontactSchema } from './InvoicePaymentMethodOptionsBancontact';
import type { InvoicePaymentMethodOptionsCard } from './InvoicePaymentMethodOptionsCard';
import { InvoicePaymentMethodOptionsCardSchema } from './InvoicePaymentMethodOptionsCard';
import type { InvoicePaymentMethodOptionsCustomerBalance } from './InvoicePaymentMethodOptionsCustomerBalance';
import { InvoicePaymentMethodOptionsCustomerBalanceSchema } from './InvoicePaymentMethodOptionsCustomerBalance';
import type { InvoicePaymentMethodOptionsKonbini } from './InvoicePaymentMethodOptionsKonbini';
import { InvoicePaymentMethodOptionsKonbiniSchema } from './InvoicePaymentMethodOptionsKonbini';
import type { InvoicePaymentMethodOptionsSepaDebit } from './InvoicePaymentMethodOptionsSepaDebit';
import { InvoicePaymentMethodOptionsSepaDebitSchema } from './InvoicePaymentMethodOptionsSepaDebit';
import type { InvoicePaymentMethodOptionsUsBankAccount } from './InvoicePaymentMethodOptionsUsBankAccount';
import { InvoicePaymentMethodOptionsUsBankAccountSchema } from './InvoicePaymentMethodOptionsUsBankAccount';
/**
 * InvoicesPaymentMethodOptions
 *
 * 
 */
export interface InvoicesPaymentMethodOptions {
  /**
   * If paying by `acss_debit`, this sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to the invoice’s PaymentIntent.
   */
  acssDebit?: InvoicePaymentMethodOptionsAcssDebit;
  /**
   * If paying by `bancontact`, this sub-hash contains details about the Bancontact payment method options to pass to the invoice’s PaymentIntent.
   */
  bancontact?: InvoicePaymentMethodOptionsBancontact;
  /**
   * If paying by `card`, this sub-hash contains details about the Card payment method options to pass to the invoice’s PaymentIntent.
   */
  card?: InvoicePaymentMethodOptionsCard;
  /**
   * If paying by `customer_balance`, this sub-hash contains details about the Bank transfer payment method options to pass to the invoice’s PaymentIntent.
   */
  customerBalance?: InvoicePaymentMethodOptionsCustomerBalance;
  /**
   * If paying by `konbini`, this sub-hash contains details about the Konbini payment method options to pass to the invoice’s PaymentIntent.
   */
  konbini?: InvoicePaymentMethodOptionsKonbini;
  /**
   * If paying by `sepa_debit`, this sub-hash contains details about the SEPA Direct Debit payment method options to pass to the invoice’s PaymentIntent.
   */
  sepaDebit?: InvoicePaymentMethodOptionsSepaDebit;
  /**
   * If paying by `us_bank_account`, this sub-hash contains details about the ACH direct debit payment method options to pass to the invoice’s PaymentIntent.
   */
  usBankAccount?: InvoicePaymentMethodOptionsUsBankAccount;
}

export const InvoicesPaymentMethodOptionsSchema: TypedSchema<InvoicesPaymentMethodOptions> = typed<InvoicesPaymentMethodOptions>(object({
  get acssDebit() { return optional(InvoicePaymentMethodOptionsAcssDebitSchema) },
  get bancontact() { return optional(InvoicePaymentMethodOptionsBancontactSchema) },
  get card() { return optional(InvoicePaymentMethodOptionsCardSchema) },
  get customerBalance() { return optional(InvoicePaymentMethodOptionsCustomerBalanceSchema) },
  get konbini() { return optional(InvoicePaymentMethodOptionsKonbiniSchema) },
  get sepaDebit() { return optional(InvoicePaymentMethodOptionsSepaDebitSchema) },
  get usBankAccount() { return optional(InvoicePaymentMethodOptionsUsBankAccountSchema) },
}));