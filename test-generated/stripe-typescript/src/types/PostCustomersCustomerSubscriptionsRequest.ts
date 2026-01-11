import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem';
import type { PostCustomersCustomerSubscriptionsRequestApplicationFeePercent } from './PostCustomersCustomerSubscriptionsRequestApplicationFeePercent';
import { PostCustomersCustomerSubscriptionsRequestApplicationFeePercentSchema } from './PostCustomersCustomerSubscriptionsRequestApplicationFeePercent';
import type { PostCustomersCustomerSubscriptionsRequestAutomaticTax } from './PostCustomersCustomerSubscriptionsRequestAutomaticTax';
import { PostCustomersCustomerSubscriptionsRequestAutomaticTaxSchema } from './PostCustomersCustomerSubscriptionsRequestAutomaticTax';
import type { PostCustomersCustomerSubscriptionsRequestBillingThresholds } from './PostCustomersCustomerSubscriptionsRequestBillingThresholds';
import { PostCustomersCustomerSubscriptionsRequestBillingThresholdsSchema } from './PostCustomersCustomerSubscriptionsRequestBillingThresholds';
import type { PostCustomersCustomerSubscriptionsRequestCancelAt } from './PostCustomersCustomerSubscriptionsRequestCancelAt';
import { PostCustomersCustomerSubscriptionsRequestCancelAtSchema } from './PostCustomersCustomerSubscriptionsRequestCancelAt';
import type { PostCustomersCustomerSubscriptionsRequestDefaultTaxRates } from './PostCustomersCustomerSubscriptionsRequestDefaultTaxRates';
import { PostCustomersCustomerSubscriptionsRequestDefaultTaxRatesSchema } from './PostCustomersCustomerSubscriptionsRequestDefaultTaxRates';
import type { PostCustomersCustomerSubscriptionsRequestDiscounts } from './PostCustomersCustomerSubscriptionsRequestDiscounts';
import { PostCustomersCustomerSubscriptionsRequestDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestDiscounts';
import type { PostCustomersCustomerSubscriptionsRequestInvoiceSettings } from './PostCustomersCustomerSubscriptionsRequestInvoiceSettings';
import { PostCustomersCustomerSubscriptionsRequestInvoiceSettingsSchema } from './PostCustomersCustomerSubscriptionsRequestInvoiceSettings';
import type { PostCustomersCustomerSubscriptionsRequestItemsItem } from './PostCustomersCustomerSubscriptionsRequestItemsItem';
import { PostCustomersCustomerSubscriptionsRequestItemsItemSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItem';
import type { PostCustomersCustomerSubscriptionsRequestPaymentSettings } from './PostCustomersCustomerSubscriptionsRequestPaymentSettings';
import { PostCustomersCustomerSubscriptionsRequestPaymentSettingsSchema } from './PostCustomersCustomerSubscriptionsRequestPaymentSettings';
import type { PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval } from './PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval';
import { PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalSchema } from './PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval';
import type { PostCustomersCustomerSubscriptionsRequestTransferData } from './PostCustomersCustomerSubscriptionsRequestTransferData';
import { PostCustomersCustomerSubscriptionsRequestTransferDataSchema } from './PostCustomersCustomerSubscriptionsRequestTransferData';
import type { PostCustomersCustomerSubscriptionsRequestTrialEnd } from './PostCustomersCustomerSubscriptionsRequestTrialEnd';
import { PostCustomersCustomerSubscriptionsRequestTrialEndSchema } from './PostCustomersCustomerSubscriptionsRequestTrialEnd';
import type { PostCustomersCustomerSubscriptionsRequestTrialSettings } from './PostCustomersCustomerSubscriptionsRequestTrialSettings';
import { PostCustomersCustomerSubscriptionsRequestTrialSettingsSchema } from './PostCustomersCustomerSubscriptionsRequestTrialSettings';
export interface PostCustomersCustomerSubscriptionsRequest {
  /**
   * A list of prices and quantities that will generate invoice items appended to the next invoice for this subscription. You may pass up to 20 items.
   */
  addInvoiceItems?: Array<PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem>;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
   */
  applicationFeePercent?: PostCustomersCustomerSubscriptionsRequestApplicationFeePercent;
  /**
   * automatic_tax_config
   *
   * Automatic tax settings for this subscription.
   */
  automaticTax?: PostCustomersCustomerSubscriptionsRequestAutomaticTax;
  /**
   * A past timestamp to backdate the subscription's start date to. If set, the first invoice will contain line items for the timespan between the start date and the current time. Can be combined with trials and the billing cycle anchor.
   */
  backdateStartDate?: number;
  /**
   * A future timestamp in UTC format to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). The anchor is the reference point that aligns future billing cycle dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals.
   */
  billingCycleAnchor?: number;
  /**
   * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
   */
  billingThresholds?: PostCustomersCustomerSubscriptionsRequestBillingThresholds;
  /**
   * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
   */
  cancelAt?: PostCustomersCustomerSubscriptionsRequestCancelAt;
  /**
   * Indicate whether this subscription should cancel at the end of the current period (`current_period_end`). Defaults to `false`.
   */
  cancelAtPeriodEnd?: boolean;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
   */
  daysUntilDue?: number;
  /**
   * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultPaymentMethod?: string;
  /**
   * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultSource?: string;
  /**
   * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
   */
  defaultTaxRates?: PostCustomersCustomerSubscriptionsRequestDefaultTaxRates;
  /**
   * The coupons to redeem into discounts for the subscription. If not specified or empty, inherits the discount from the subscription's customer.
   */
  discounts?: PostCustomersCustomerSubscriptionsRequestDiscounts;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * invoice_settings_param
   *
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: PostCustomersCustomerSubscriptionsRequestInvoiceSettings;
  /**
   * A list of up to 20 subscription items, each with an attached price.
   */
  items?: Array<PostCustomersCustomerSubscriptionsRequestItemsItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).
   */
  offSession?: boolean;
  /**
   * Only applies to subscriptions with `collection_method=charge_automatically`.

Use `allow_incomplete` to create Subscriptions with `status=incomplete` if the first invoice can't be paid. Creating Subscriptions with this status allows you to manage scenarios where additional customer actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.

Use `default_incomplete` to create Subscriptions with `status=incomplete` when the first invoice requires payment, otherwise start as active. Subscriptions transition to `status=active` when successfully confirming the PaymentIntent on the first invoice. This allows simpler management of scenarios where additional customer actions are needed to pay a subscription’s invoice, such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method. If the PaymentIntent is not confirmed within 23 hours Subscriptions transition to `status=incomplete_expired`, which is a terminal state.

Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's first invoice can't be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further customer action is needed, this parameter doesn't create a Subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.

`pending_if_incomplete` is only used with updates and cannot be passed when creating a Subscription.

Subscriptions with `collection_method=send_invoice` are automatically activated regardless of the first Invoice status.
   */
  paymentBehavior?: string;
  /**
   * payment_settings
   *
   * Payment settings to pass to invoices created by the subscription.
   */
  paymentSettings?: PostCustomersCustomerSubscriptionsRequestPaymentSettings;
  /**
   * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
   */
  pendingInvoiceItemInterval?: PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) resulting from the `billing_cycle_anchor`. If no value is passed, the default is `create_prorations`.
   */
  prorationBehavior?: string;
  /**
   * transfer_data_specs
   *
   * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
   */
  transferData?: PostCustomersCustomerSubscriptionsRequestTransferData;
  /**
   * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialEnd?: PostCustomersCustomerSubscriptionsRequestTrialEnd;
  /**
   * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialFromPlan?: boolean;
  /**
   * Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialPeriodDays?: number;
  /**
   * trial_settings_config
   *
   * Settings related to subscription trials.
   */
  trialSettings?: PostCustomersCustomerSubscriptionsRequestTrialSettings;
}

export const PostCustomersCustomerSubscriptionsRequestSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequest> = typed<PostCustomersCustomerSubscriptionsRequest>(object({
  get addInvoiceItems() { return optional(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemSchema)) },
  get applicationFeePercent() { return optional(PostCustomersCustomerSubscriptionsRequestApplicationFeePercentSchema) },
  get automaticTax() { return optional(PostCustomersCustomerSubscriptionsRequestAutomaticTaxSchema) },
  backdateStartDate: optional(number()),
  billingCycleAnchor: optional(number()),
  get billingThresholds() { return optional(PostCustomersCustomerSubscriptionsRequestBillingThresholdsSchema) },
  get cancelAt() { return optional(PostCustomersCustomerSubscriptionsRequestCancelAtSchema) },
  cancelAtPeriodEnd: optional(boolean()),
  collectionMethod: optional(string()),
  currency: optional(string()),
  daysUntilDue: optional(number()),
  defaultPaymentMethod: optional(string()),
  defaultSource: optional(string()),
  get defaultTaxRates() { return optional(PostCustomersCustomerSubscriptionsRequestDefaultTaxRatesSchema) },
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestDiscountsSchema) },
  expand: optional(array(string())),
  get invoiceSettings() { return optional(PostCustomersCustomerSubscriptionsRequestInvoiceSettingsSchema) },
  get items() { return optional(array(PostCustomersCustomerSubscriptionsRequestItemsItemSchema)) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  offSession: optional(boolean()),
  paymentBehavior: optional(string()),
  get paymentSettings() { return optional(PostCustomersCustomerSubscriptionsRequestPaymentSettingsSchema) },
  get pendingInvoiceItemInterval() { return optional(PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalSchema) },
  prorationBehavior: optional(string()),
  get transferData() { return optional(PostCustomersCustomerSubscriptionsRequestTransferDataSchema) },
  get trialEnd() { return optional(PostCustomersCustomerSubscriptionsRequestTrialEndSchema) },
  trialFromPlan: optional(boolean()),
  trialPeriodDays: optional(number()),
  get trialSettings() { return optional(PostCustomersCustomerSubscriptionsRequestTrialSettingsSchema) },
}));