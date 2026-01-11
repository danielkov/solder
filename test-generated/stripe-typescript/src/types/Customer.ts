import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Address } from './Address';
import { AddressSchema } from './Address';
import type { CashBalance } from './CashBalance';
import { CashBalanceSchema } from './CashBalance';
import type { CustomerTax } from './CustomerTax';
import { CustomerTaxSchema } from './CustomerTax';
import type { DefaultSourceUnion } from './DefaultSourceUnion';
import { DefaultSourceUnionSchema } from './DefaultSourceUnion';
import type { Discount } from './Discount';
import { DiscountSchema } from './Discount';
import type { InvoiceCreditBalanceProperty } from './InvoiceCreditBalanceProperty';
import { InvoiceCreditBalancePropertySchema } from './InvoiceCreditBalanceProperty';
import type { InvoiceSettingCustomerSetting } from './InvoiceSettingCustomerSetting';
import { InvoiceSettingCustomerSettingSchema } from './InvoiceSettingCustomerSetting';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { Shipping } from './Shipping';
import { ShippingSchema } from './Shipping';
import type { SourcesProperty } from './SourcesProperty';
import { SourcesPropertySchema } from './SourcesProperty';
import type { SubscriptionsProperty } from './SubscriptionsProperty';
import { SubscriptionsPropertySchema } from './SubscriptionsProperty';
import type { TaxIdsProperty } from './TaxIdsProperty';
import { TaxIdsPropertySchema } from './TaxIdsProperty';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * Customer
 *
 * This object represents a customer of your business. Use it to [create recurring charges](https://stripe.com/docs/invoicing/customer), [save payment](https://stripe.com/docs/payments/save-during-payment) and contact information,
and track payments that belong to the same customer.
 */
export interface Customer {
  /**
   * The customer's address.
   */
  address?: Address;
  /**
   * The current balance, if any, that's stored on the customer in their default currency. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that's added to their next invoice. The balance only considers amounts that Stripe hasn't successfully applied to any invoice. It doesn't reflect unpaid invoices. This balance is only taken into account after invoices finalize. For multi-currency balances, see [invoice_credit_balance](https://stripe.com/docs/api/customers/object#customer_object-invoice_credit_balance).
   */
  balance?: number;
  /**
   * The customer's business name.
   */
  businessName?: string;
  /**
   * The current funds being held by Stripe on behalf of the customer. You can apply these funds towards payment intents when the source is "cash_balance". The `settings[reconciliation_mode]` field describes if these funds apply to these payment intents manually or automatically.
   */
  cashBalance?: CashBalance;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
   */
  currency?: string;
  /**
   * ID of the default payment source for the customer.

If you use payment methods created through the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) field instead.
   */
  defaultSource?: DefaultSourceUnion;
  /**
   * Tracks the most recent state change on any invoice belonging to the customer. Paying an invoice or marking it uncollectible via the API will set this field to false. An automatic payment failure or passing the `invoice.due_date` will set this field to `true`.

If an invoice becomes uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn't reset to `false`.

If you care whether the customer has paid their most recent subscription invoice, use `subscription.status` instead. Paying or marking uncollectible any customer invoice regardless of whether it is the latest invoice for a subscription will always set this field to `false`.
   */
  delinquent?: boolean;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Describes the current discount active on the customer, if there is one.
   */
  discount?: Discount;
  /**
   * The customer's email address.
   */
  email?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The customer's individual name.
   */
  individualName?: string;
  /**
   * The current multi-currency balances, if any, that's stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that's added to their next invoice denominated in that currency. These balances don't apply to unpaid invoices. They solely track amounts that Stripe hasn't successfully applied to any invoice. Stripe only applies a balance in a specific currency to an invoice after that invoice (which is in the same currency) finalizes.
   */
  invoiceCreditBalance?: InvoiceCreditBalanceProperty;
  /**
   * The prefix for the customer used to generate unique invoice numbers.
   */
  invoicePrefix?: string;
  /**
   * InvoiceSettingCustomerSetting
   *
   * 
   */
  invoiceSettings?: InvoiceSettingCustomerSetting;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The customer's full name or business name.
   */
  name?: string;
  /**
   * The suffix of the customer's next invoice number (for example, 0001). When the account uses account level sequencing, this parameter is ignored in API requests and the field omitted in API responses.
   */
  nextInvoiceSequence?: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The customer's phone number.
   */
  phone?: string;
  /**
   * The customer's preferred locales (languages), ordered by preference.
   */
  preferredLocales?: Array<string>;
  /**
   * Mailing and shipping address for the customer. Appears on invoices emailed to this customer.
   */
  shipping?: Shipping;
  /**
   * ApmsSourcesSourceList
   *
   * The customer's payment sources, if any.
   */
  sources?: SourcesProperty;
  /**
   * SubscriptionList
   *
   * The customer's current subscriptions, if any.
   */
  subscriptions?: SubscriptionsProperty;
  /**
   * CustomerTax
   *
   * 
   */
  tax?: CustomerTax;
  /**
   * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the following text: **"Reverse charge"**.
   */
  taxExempt?: string;
  /**
   * TaxIDsList
   *
   * The customer's tax IDs.
   */
  taxIds?: TaxIdsProperty;
  /**
   * ID of the test clock that this customer belongs to.
   */
  testClock?: TestClockOrRef;
}

export const CustomerSchema: TypedSchema<Customer> = typed<Customer>(object({
  get address() { return optional(AddressSchema) },
  balance: optional(number()),
  businessName: optional(string()),
  get cashBalance() { return optional(CashBalanceSchema) },
  created: number(),
  currency: optional(string()),
  get defaultSource() { return optional(DefaultSourceUnionSchema) },
  delinquent: optional(boolean()),
  description: optional(string()),
  get discount() { return optional(DiscountSchema) },
  email: optional(string()),
  id: string(),
  individualName: optional(string()),
  get invoiceCreditBalance() { return optional(InvoiceCreditBalancePropertySchema) },
  invoicePrefix: optional(string()),
  get invoiceSettings() { return optional(InvoiceSettingCustomerSettingSchema) },
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  name: optional(string()),
  nextInvoiceSequence: optional(number()),
  object: string(),
  phone: optional(string()),
  preferredLocales: optional(array(string())),
  get shipping() { return optional(ShippingSchema) },
  get sources() { return optional(SourcesPropertySchema) },
  get subscriptions() { return optional(SubscriptionsPropertySchema) },
  get tax() { return optional(CustomerTaxSchema) },
  taxExempt: optional(string()),
  get taxIds() { return optional(TaxIdsPropertySchema) },
  get testClock() { return optional(TestClockOrRefSchema) },
}));