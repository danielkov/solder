import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { InvoicePaymentMethodOptionsAcssDebit } from './InvoicePaymentMethodOptionsAcssDebit';
import { InvoicePaymentMethodOptionsAcssDebitSchema } from './InvoicePaymentMethodOptionsAcssDebit';
import type { InvoicePaymentMethodOptionsBancontact } from './InvoicePaymentMethodOptionsBancontact';
import { InvoicePaymentMethodOptionsBancontactSchema } from './InvoicePaymentMethodOptionsBancontact';
import type { InvoicePaymentMethodOptionsCustomerBalance } from './InvoicePaymentMethodOptionsCustomerBalance';
import { InvoicePaymentMethodOptionsCustomerBalanceSchema } from './InvoicePaymentMethodOptionsCustomerBalance';
import type { InvoicePaymentMethodOptionsKonbini } from './InvoicePaymentMethodOptionsKonbini';
import { InvoicePaymentMethodOptionsKonbiniSchema } from './InvoicePaymentMethodOptionsKonbini';
import type { InvoicePaymentMethodOptionsSepaDebit } from './InvoicePaymentMethodOptionsSepaDebit';
import { InvoicePaymentMethodOptionsSepaDebitSchema } from './InvoicePaymentMethodOptionsSepaDebit';
import type { InvoicePaymentMethodOptionsUsBankAccount } from './InvoicePaymentMethodOptionsUsBankAccount';
import { InvoicePaymentMethodOptionsUsBankAccountSchema } from './InvoicePaymentMethodOptionsUsBankAccount';
import type { SubscriptionPaymentMethodOptionsCard } from './SubscriptionPaymentMethodOptionsCard';
import { SubscriptionPaymentMethodOptionsCardSchema } from './SubscriptionPaymentMethodOptionsCard';
/**
 * SubscriptionsResourcePaymentMethodOptions
 *
 * 
 */
export interface SubscriptionsResourcePaymentMethodOptions {
  /**
   * This sub-hash contains details about the Canadian pre-authorized debit payment method options to pass to invoices created by the subscription.
   */
  acssDebit?: InvoicePaymentMethodOptionsAcssDebit;
  /**
   * This sub-hash contains details about the Bancontact payment method options to pass to invoices created by the subscription.
   */
  bancontact?: InvoicePaymentMethodOptionsBancontact;
  /**
   * This sub-hash contains details about the Card payment method options to pass to invoices created by the subscription.
   */
  card?: SubscriptionPaymentMethodOptionsCard;
  /**
   * This sub-hash contains details about the Bank transfer payment method options to pass to invoices created by the subscription.
   */
  customerBalance?: InvoicePaymentMethodOptionsCustomerBalance;
  /**
   * This sub-hash contains details about the Konbini payment method options to pass to invoices created by the subscription.
   */
  konbini?: InvoicePaymentMethodOptionsKonbini;
  /**
   * This sub-hash contains details about the SEPA Direct Debit payment method options to pass to invoices created by the subscription.
   */
  sepaDebit?: InvoicePaymentMethodOptionsSepaDebit;
  /**
   * This sub-hash contains details about the ACH direct debit payment method options to pass to invoices created by the subscription.
   */
  usBankAccount?: InvoicePaymentMethodOptionsUsBankAccount;
}

export const SubscriptionsResourcePaymentMethodOptionsSchema: TypedSchema<SubscriptionsResourcePaymentMethodOptions> = typed<SubscriptionsResourcePaymentMethodOptions>(object({
  get acssDebit() { return optional(InvoicePaymentMethodOptionsAcssDebitSchema) },
  get bancontact() { return optional(InvoicePaymentMethodOptionsBancontactSchema) },
  get card() { return optional(SubscriptionPaymentMethodOptionsCardSchema) },
  get customerBalance() { return optional(InvoicePaymentMethodOptionsCustomerBalanceSchema) },
  get konbini() { return optional(InvoicePaymentMethodOptionsKonbiniSchema) },
  get sepaDebit() { return optional(InvoicePaymentMethodOptionsSepaDebitSchema) },
  get usBankAccount() { return optional(InvoicePaymentMethodOptionsUsBankAccountSchema) },
}));