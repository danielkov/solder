import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem';
import { PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemSchema } from './PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItem';
import type { PostCustomersCustomerSubscriptionsRequestApplicationFeePercent } from './PostCustomersCustomerSubscriptionsRequestApplicationFeePercent';
import { PostCustomersCustomerSubscriptionsRequestApplicationFeePercentSchema } from './PostCustomersCustomerSubscriptionsRequestApplicationFeePercent';
import type { PostCustomersCustomerSubscriptionsRequestBillingThresholds } from './PostCustomersCustomerSubscriptionsRequestBillingThresholds';
import { PostCustomersCustomerSubscriptionsRequestBillingThresholdsSchema } from './PostCustomersCustomerSubscriptionsRequestBillingThresholds';
import type { PostCustomersCustomerSubscriptionsRequestDiscounts } from './PostCustomersCustomerSubscriptionsRequestDiscounts';
import { PostCustomersCustomerSubscriptionsRequestDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestDiscounts';
import type { PostCustomersCustomerSubscriptionsRequestInvoiceSettings } from './PostCustomersCustomerSubscriptionsRequestInvoiceSettings';
import { PostCustomersCustomerSubscriptionsRequestInvoiceSettingsSchema } from './PostCustomersCustomerSubscriptionsRequestInvoiceSettings';
import type { PostCustomersCustomerSubscriptionsRequestPaymentSettings } from './PostCustomersCustomerSubscriptionsRequestPaymentSettings';
import { PostCustomersCustomerSubscriptionsRequestPaymentSettingsSchema } from './PostCustomersCustomerSubscriptionsRequestPaymentSettings';
import type { PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval } from './PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval';
import { PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalSchema } from './PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemInterval';
import type { PostCustomersCustomerSubscriptionsRequestTrialSettings } from './PostCustomersCustomerSubscriptionsRequestTrialSettings';
import { PostCustomersCustomerSubscriptionsRequestTrialSettingsSchema } from './PostCustomersCustomerSubscriptionsRequestTrialSettings';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTaxSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAtSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetailsSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSourceSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRatesSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItemSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferDataSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEndSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd';
export interface PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequest {
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
   * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
   */
  automaticTax?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTax;
  /**
   * Either `now` or `unchanged`. Setting the value to `now` resets the subscription's billing cycle anchor to the current time. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor?: string;
  /**
   * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
   */
  billingThresholds?: PostCustomersCustomerSubscriptionsRequestBillingThresholds;
  /**
   * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
   */
  cancelAt?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAt;
  /**
   * Indicate whether this subscription should cancel at the end of the current period (`current_period_end`). Defaults to `false`.
   */
  cancelAtPeriodEnd?: boolean;
  /**
   * cancellation_details_param
   *
   * Details about why this subscription was cancelled
   */
  cancellationDetails?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetails;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: string;
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
  defaultSource?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSource;
  /**
   * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription. Pass an empty string to remove previously-defined tax rates.
   */
  defaultTaxRates?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRates;
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
  items?: Array<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).
   */
  offSession?: boolean;
  /**
   * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
   */
  pauseCollection?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollection;
  /**
   * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.

Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription’s invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.

Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).

Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://docs.stripe.com/changelog/2019-03-14) to learn more.
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
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
   */
  prorationBehavior?: string;
  /**
   * If set, prorations will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the same prorations that were previewed with the [create preview](https://stripe.com/docs/api/invoices/create_preview) endpoint. `proration_date` can also be used to implement custom proration logic, such as prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
   */
  prorationDate?: number;
  /**
   * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges. This will be unset if you POST an empty value.
   */
  transferData?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferData;
  /**
   * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`.
   */
  trialEnd?: PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEnd;
  /**
   * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialFromPlan?: boolean;
  /**
   * trial_settings_config
   *
   * Settings related to subscription trials.
   */
  trialSettings?: PostCustomersCustomerSubscriptionsRequestTrialSettings;
}

export const PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestSchema: TypedSchema<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequest> = typed<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequest>(object({
  get addInvoiceItems() { return optional(array(PostCustomersCustomerSubscriptionsRequestAddInvoiceItemsItemSchema)) },
  get applicationFeePercent() { return optional(PostCustomersCustomerSubscriptionsRequestApplicationFeePercentSchema) },
  get automaticTax() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestAutomaticTaxSchema) },
  billingCycleAnchor: optional(string()),
  get billingThresholds() { return optional(PostCustomersCustomerSubscriptionsRequestBillingThresholdsSchema) },
  get cancelAt() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancelAtSchema) },
  cancelAtPeriodEnd: optional(boolean()),
  get cancellationDetails() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestCancellationDetailsSchema) },
  collectionMethod: optional(string()),
  daysUntilDue: optional(number()),
  defaultPaymentMethod: optional(string()),
  get defaultSource() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultSourceSchema) },
  get defaultTaxRates() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestDefaultTaxRatesSchema) },
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestDiscountsSchema) },
  expand: optional(array(string())),
  get invoiceSettings() { return optional(PostCustomersCustomerSubscriptionsRequestInvoiceSettingsSchema) },
  get items() { return optional(array(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItemSchema)) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  offSession: optional(boolean()),
  get pauseCollection() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestPauseCollectionSchema) },
  paymentBehavior: optional(string()),
  get paymentSettings() { return optional(PostCustomersCustomerSubscriptionsRequestPaymentSettingsSchema) },
  get pendingInvoiceItemInterval() { return optional(PostCustomersCustomerSubscriptionsRequestPendingInvoiceItemIntervalSchema) },
  prorationBehavior: optional(string()),
  prorationDate: optional(number()),
  get transferData() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTransferDataSchema) },
  get trialEnd() { return optional(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestTrialEndSchema) },
  trialFromPlan: optional(boolean()),
  get trialSettings() { return optional(PostCustomersCustomerSubscriptionsRequestTrialSettingsSchema) },
}));