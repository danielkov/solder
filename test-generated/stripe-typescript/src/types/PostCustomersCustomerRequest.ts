import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostChargesRequestCard } from './PostChargesRequestCard';
import { PostChargesRequestCardSchema } from './PostChargesRequestCard';
import type { PostCustomersCustomerRequestBankAccount } from './PostCustomersCustomerRequestBankAccount';
import { PostCustomersCustomerRequestBankAccountSchema } from './PostCustomersCustomerRequestBankAccount';
import type { PostCustomersCustomerRequestTax } from './PostCustomersCustomerRequestTax';
import { PostCustomersCustomerRequestTaxSchema } from './PostCustomersCustomerRequestTax';
import type { PostCustomersRequestAddress } from './PostCustomersRequestAddress';
import { PostCustomersRequestAddressSchema } from './PostCustomersRequestAddress';
import type { PostCustomersRequestBusinessName } from './PostCustomersRequestBusinessName';
import { PostCustomersRequestBusinessNameSchema } from './PostCustomersRequestBusinessName';
import type { PostCustomersRequestCashBalance } from './PostCustomersRequestCashBalance';
import { PostCustomersRequestCashBalanceSchema } from './PostCustomersRequestCashBalance';
import type { PostCustomersRequestIndividualName } from './PostCustomersRequestIndividualName';
import { PostCustomersRequestIndividualNameSchema } from './PostCustomersRequestIndividualName';
import type { PostCustomersRequestInvoiceSettings } from './PostCustomersRequestInvoiceSettings';
import { PostCustomersRequestInvoiceSettingsSchema } from './PostCustomersRequestInvoiceSettings';
import type { PostCustomersRequestShipping } from './PostCustomersRequestShipping';
import { PostCustomersRequestShippingSchema } from './PostCustomersRequestShipping';
export interface PostCustomersCustomerRequest {
  /**
   * The customer's address.
   */
  address?: PostCustomersRequestAddress;
  /**
   * An integer amount in cents (or local equivalent) that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
   */
  balance?: number;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: PostCustomersCustomerRequestBankAccount;
  /**
   * The customer's business name. This may be up to *150 characters*.
   */
  businessName?: PostCustomersRequestBusinessName;
  /**
   * A token, like the ones returned by [Stripe.js](https://stripe.com/docs/js).
   */
  card?: PostChargesRequestCard;
  /**
   * cash_balance_param
   *
   * Balance information and default balance settings for this customer.
   */
  cashBalance?: PostCustomersRequestCashBalance;
  /**
   * ID of Alipay account to make the customer's new default for invoice payments.
   */
  defaultAlipayAccount?: string;
  /**
   * ID of bank account to make the customer's new default for invoice payments.
   */
  defaultBankAccount?: string;
  /**
   * ID of card to make the customer's new default for invoice payments.
   */
  defaultCard?: string;
  /**
   * If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method) parameter.

Provide the ID of a payment source already attached to this customer to make it this customer's default payment source.

If you want to add a new payment source and make it the default, see the [source](https://stripe.com/docs/api/customers/update#update_customer-source) property.
   */
  defaultSource?: string;
  /**
   * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
   */
  description?: string;
  /**
   * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
   */
  email?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The customer's full name. This may be up to *150 characters*.
   */
  individualName?: PostCustomersRequestIndividualName;
  /**
   * The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
   */
  invoicePrefix?: string;
  /**
   * customer_param
   *
   * Default invoice settings for this customer.
   */
  invoiceSettings?: PostCustomersRequestInvoiceSettings;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The customer's full name or business name.
   */
  name?: string;
  /**
   * The sequence to be used on the customer's next invoice. Defaults to 1.
   */
  nextInvoiceSequence?: number;
  /**
   * The customer's phone number.
   */
  phone?: string;
  /**
   * Customer's preferred languages, ordered by preference.
   */
  preferredLocales?: Array<string>;
  /**
   * The customer's shipping information. Appears on invoices emailed to this customer.
   */
  shipping?: PostCustomersRequestShipping;
  source?: string;
  /**
   * shared_tax_update_param
   *
   * Tax details about the customer.
   */
  tax?: PostCustomersCustomerRequestTax;
  /**
   * The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
   */
  taxExempt?: string;
}

export const PostCustomersCustomerRequestSchema: TypedSchema<PostCustomersCustomerRequest> = typed<PostCustomersCustomerRequest>(object({
  get address() { return optional(PostCustomersRequestAddressSchema) },
  balance: optional(number()),
  get bankAccount() { return optional(PostCustomersCustomerRequestBankAccountSchema) },
  get businessName() { return optional(PostCustomersRequestBusinessNameSchema) },
  get card() { return optional(PostChargesRequestCardSchema) },
  get cashBalance() { return optional(PostCustomersRequestCashBalanceSchema) },
  defaultAlipayAccount: optional(string()),
  defaultBankAccount: optional(string()),
  defaultCard: optional(string()),
  defaultSource: optional(string()),
  description: optional(string()),
  email: optional(string()),
  expand: optional(array(string())),
  get individualName() { return optional(PostCustomersRequestIndividualNameSchema) },
  invoicePrefix: optional(string()),
  get invoiceSettings() { return optional(PostCustomersRequestInvoiceSettingsSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  name: optional(string()),
  nextInvoiceSequence: optional(number()),
  phone: optional(string()),
  preferredLocales: optional(array(string())),
  get shipping() { return optional(PostCustomersRequestShippingSchema) },
  source: optional(string()),
  get tax() { return optional(PostCustomersCustomerRequestTaxSchema) },
  taxExempt: optional(string()),
}));