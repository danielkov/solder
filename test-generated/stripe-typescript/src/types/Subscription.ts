import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationUnion } from './ApplicationUnion';
import { ApplicationUnionSchema } from './ApplicationUnion';
import type { CancellationDetails } from './CancellationDetails';
import { CancellationDetailsSchema } from './CancellationDetails';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { DefaultPaymentMethodOrRef } from './DefaultPaymentMethodOrRef';
import { DefaultPaymentMethodOrRefSchema } from './DefaultPaymentMethodOrRef';
import type { DefaultSourceUnion } from './DefaultSourceUnion';
import { DefaultSourceUnionSchema } from './DefaultSourceUnion';
import type { DiscountsItemOrRef } from './DiscountsItemOrRef';
import { DiscountsItemOrRefSchema } from './DiscountsItemOrRef';
import type { ItemsProperty } from './ItemsProperty';
import { ItemsPropertySchema } from './ItemsProperty';
import type { LatestInvoiceOrRef } from './LatestInvoiceOrRef';
import { LatestInvoiceOrRefSchema } from './LatestInvoiceOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { PendingSetupIntentOrRef } from './PendingSetupIntentOrRef';
import { PendingSetupIntentOrRefSchema } from './PendingSetupIntentOrRef';
import type { ScheduleOrRef } from './ScheduleOrRef';
import { ScheduleOrRefSchema } from './ScheduleOrRef';
import type { SubscriptionAutomaticTax } from './SubscriptionAutomaticTax';
import { SubscriptionAutomaticTaxSchema } from './SubscriptionAutomaticTax';
import type { SubscriptionBillingThresholds } from './SubscriptionBillingThresholds';
import { SubscriptionBillingThresholdsSchema } from './SubscriptionBillingThresholds';
import type { SubscriptionPendingInvoiceItemInterval } from './SubscriptionPendingInvoiceItemInterval';
import { SubscriptionPendingInvoiceItemIntervalSchema } from './SubscriptionPendingInvoiceItemInterval';
import type { SubscriptionTransferData } from './SubscriptionTransferData';
import { SubscriptionTransferDataSchema } from './SubscriptionTransferData';
import type { SubscriptionsResourceBillingCycleAnchorConfig } from './SubscriptionsResourceBillingCycleAnchorConfig';
import { SubscriptionsResourceBillingCycleAnchorConfigSchema } from './SubscriptionsResourceBillingCycleAnchorConfig';
import type { SubscriptionsResourceBillingMode } from './SubscriptionsResourceBillingMode';
import { SubscriptionsResourceBillingModeSchema } from './SubscriptionsResourceBillingMode';
import type { SubscriptionsResourcePauseCollection } from './SubscriptionsResourcePauseCollection';
import { SubscriptionsResourcePauseCollectionSchema } from './SubscriptionsResourcePauseCollection';
import type { SubscriptionsResourcePaymentSettings } from './SubscriptionsResourcePaymentSettings';
import { SubscriptionsResourcePaymentSettingsSchema } from './SubscriptionsResourcePaymentSettings';
import type { SubscriptionsResourcePendingUpdate } from './SubscriptionsResourcePendingUpdate';
import { SubscriptionsResourcePendingUpdateSchema } from './SubscriptionsResourcePendingUpdate';
import type { SubscriptionsResourceSubscriptionInvoiceSettings } from './SubscriptionsResourceSubscriptionInvoiceSettings';
import { SubscriptionsResourceSubscriptionInvoiceSettingsSchema } from './SubscriptionsResourceSubscriptionInvoiceSettings';
import type { SubscriptionsTrialsResourceTrialSettings } from './SubscriptionsTrialsResourceTrialSettings';
import { SubscriptionsTrialsResourceTrialSettingsSchema } from './SubscriptionsTrialsResourceTrialSettings';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * Subscription
 *
 * Subscriptions allow you to charge a customer on a recurring basis.

Related guide: [Creating subscriptions](https://stripe.com/docs/billing/subscriptions/creating)
 */
export interface Subscription {
  /**
   * ID of the Connect Application that created the subscription.
   */
  application?: ApplicationUnion;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account.
   */
  applicationFeePercent?: number;
  /**
   * SubscriptionAutomaticTax
   *
   * 
   */
  automaticTax: SubscriptionAutomaticTax;
  /**
   * The reference point that aligns future [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle) dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals. The timestamp is in UTC format.
   */
  billingCycleAnchor: number;
  /**
   * The fixed values used to calculate the `billing_cycle_anchor`.
   */
  billingCycleAnchorConfig?: SubscriptionsResourceBillingCycleAnchorConfig;
  /**
   * SubscriptionsResourceBillingMode
   *
   * The billing mode of the subscription.
   */
  billingMode: SubscriptionsResourceBillingMode;
  /**
   * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
   */
  billingThresholds?: SubscriptionBillingThresholds;
  /**
   * A date in the future at which the subscription will automatically get canceled
   */
  cancelAt?: number;
  /**
   * Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period.
   */
  cancelAtPeriodEnd: boolean;
  /**
   * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
   */
  canceledAt?: number;
  /**
   * Details about why this subscription was cancelled
   */
  cancellationDetails?: CancellationDetails;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
   */
  collectionMethod: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer who owns the subscription.
   */
  customer: CustomerUnion;
  /**
   * Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
   */
  daysUntilDue?: number;
  /**
   * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultPaymentMethod?: DefaultPaymentMethodOrRef;
  /**
   * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultSource?: DefaultSourceUnion;
  /**
   * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
   */
  defaultTaxRates?: Array<TaxRate>;
  /**
   * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string;
  /**
   * The discounts applied to the subscription. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: Array<DiscountsItemOrRef>;
  /**
   * If the subscription has ended, the date the subscription ended.
   */
  endedAt?: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * SubscriptionsResourceSubscriptionInvoiceSettings
   *
   * 
   */
  invoiceSettings: SubscriptionsResourceSubscriptionInvoiceSettings;
  /**
   * SubscriptionItemList
   *
   * List of subscription items, each with an attached price.
   */
  items: ItemsProperty;
  /**
   * The most recent invoice this subscription has generated.
   */
  latestInvoice?: LatestInvoiceOrRef;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
   */
  nextPendingInvoiceItemInvoice?: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account (if any) the charge was made on behalf of for charges associated with this subscription. See the [Connect documentation](https://stripe.com/docs/connect/subscriptions#on-behalf-of) for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
   */
  pauseCollection?: SubscriptionsResourcePauseCollection;
  /**
   * Payment settings passed on to invoices created by the subscription.
   */
  paymentSettings?: SubscriptionsResourcePaymentSettings;
  /**
   * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
   */
  pendingInvoiceItemInterval?: SubscriptionPendingInvoiceItemInterval;
  /**
   * You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
   */
  pendingSetupIntent?: PendingSetupIntentOrRef;
  /**
   * If specified, [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates) that will be applied to the subscription once the `latest_invoice` has been paid.
   */
  pendingUpdate?: SubscriptionsResourcePendingUpdate;
  /**
   * The schedule attached to the subscription
   */
  schedule?: ScheduleOrRef;
  /**
   * Date when the subscription was first created. The date might differ from the `created` date due to backdating.
   */
  startDate: number;
  /**
   * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`. 

For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this status can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` status. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal status, the open invoice will be voided and no further invoices will be generated. 

A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over. 

A subscription can only enter a `paused` status [when a trial ends without a payment method](https://stripe.com/docs/billing/subscriptions/trials#create-free-trials-without-payment). A `paused` subscription doesn't generate invoices and can be resumed after your customer adds their payment method. The `paused` status is different from [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment), which still generates invoices and leaves the subscription's status unchanged. 

If subscription `collection_method=charge_automatically`, it becomes `past_due` when payment is required but cannot be paid (due to failed payment or awaiting additional user actions). Once Stripe has exhausted all payment retry attempts, the subscription will become `canceled` or `unpaid` (depending on your subscriptions settings). 

If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
   */
  status: string;
  /**
   * ID of the test clock this subscription belongs to.
   */
  testClock?: TestClockOrRef;
  /**
   * The account (if any) the subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
   */
  transferData?: SubscriptionTransferData;
  /**
   * If the subscription has a trial, the end of that trial.
   */
  trialEnd?: number;
  /**
   * Settings related to subscription trials.
   */
  trialSettings?: SubscriptionsTrialsResourceTrialSettings;
  /**
   * If the subscription has a trial, the beginning of that trial.
   */
  trialStart?: number;
}

export const SubscriptionSchema: TypedSchema<Subscription> = typed<Subscription>(object({
  get application() { return optional(ApplicationUnionSchema) },
  applicationFeePercent: optional(number()),
  automaticTax: SubscriptionAutomaticTaxSchema,
  billingCycleAnchor: number(),
  get billingCycleAnchorConfig() { return optional(SubscriptionsResourceBillingCycleAnchorConfigSchema) },
  billingMode: SubscriptionsResourceBillingModeSchema,
  get billingThresholds() { return optional(SubscriptionBillingThresholdsSchema) },
  cancelAt: optional(number()),
  cancelAtPeriodEnd: boolean(),
  canceledAt: optional(number()),
  get cancellationDetails() { return optional(CancellationDetailsSchema) },
  collectionMethod: string(),
  created: number(),
  currency: string(),
  customer: CustomerUnionSchema,
  daysUntilDue: optional(number()),
  get defaultPaymentMethod() { return optional(DefaultPaymentMethodOrRefSchema) },
  get defaultSource() { return optional(DefaultSourceUnionSchema) },
  get defaultTaxRates() { return optional(array(TaxRateSchema)) },
  description: optional(string()),
  discounts: array(DiscountsItemOrRefSchema),
  endedAt: optional(number()),
  id: string(),
  invoiceSettings: SubscriptionsResourceSubscriptionInvoiceSettingsSchema,
  items: ItemsPropertySchema,
  get latestInvoice() { return optional(LatestInvoiceOrRefSchema) },
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  nextPendingInvoiceItemInvoice: optional(number()),
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  get pauseCollection() { return optional(SubscriptionsResourcePauseCollectionSchema) },
  get paymentSettings() { return optional(SubscriptionsResourcePaymentSettingsSchema) },
  get pendingInvoiceItemInterval() { return optional(SubscriptionPendingInvoiceItemIntervalSchema) },
  get pendingSetupIntent() { return optional(PendingSetupIntentOrRefSchema) },
  get pendingUpdate() { return optional(SubscriptionsResourcePendingUpdateSchema) },
  get schedule() { return optional(ScheduleOrRefSchema) },
  startDate: number(),
  status: string(),
  get testClock() { return optional(TestClockOrRefSchema) },
  get transferData() { return optional(SubscriptionTransferDataSchema) },
  trialEnd: optional(number()),
  get trialSettings() { return optional(SubscriptionsTrialsResourceTrialSettingsSchema) },
  trialStart: optional(number()),
}));