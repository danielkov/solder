import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPaymentMethodOrRef } from './DefaultPaymentMethodOrRef';
import { DefaultPaymentMethodOrRefSchema } from './DefaultPaymentMethodOrRef';
import type { DiscountsResourceStackableDiscount } from './DiscountsResourceStackableDiscount';
import { DiscountsResourceStackableDiscountSchema } from './DiscountsResourceStackableDiscount';
import type { InvoiceSettingSubscriptionSchedulePhaseSetting } from './InvoiceSettingSubscriptionSchedulePhaseSetting';
import { InvoiceSettingSubscriptionSchedulePhaseSettingSchema } from './InvoiceSettingSubscriptionSchedulePhaseSetting';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { SchedulesPhaseAutomaticTax } from './SchedulesPhaseAutomaticTax';
import { SchedulesPhaseAutomaticTaxSchema } from './SchedulesPhaseAutomaticTax';
import type { SubscriptionBillingThresholds } from './SubscriptionBillingThresholds';
import { SubscriptionBillingThresholdsSchema } from './SubscriptionBillingThresholds';
import type { SubscriptionScheduleAddInvoiceItem } from './SubscriptionScheduleAddInvoiceItem';
import { SubscriptionScheduleAddInvoiceItemSchema } from './SubscriptionScheduleAddInvoiceItem';
import type { SubscriptionScheduleConfigurationItem } from './SubscriptionScheduleConfigurationItem';
import { SubscriptionScheduleConfigurationItemSchema } from './SubscriptionScheduleConfigurationItem';
import type { SubscriptionTransferData } from './SubscriptionTransferData';
import { SubscriptionTransferDataSchema } from './SubscriptionTransferData';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
/**
 * SubscriptionSchedulePhaseConfiguration
 *
 * A phase describes the plans, coupon, and trialing status of a subscription for a predefined time period.
 */
export interface SubscriptionSchedulePhaseConfiguration {
  /**
   * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
   */
  addInvoiceItems: Array<SubscriptionScheduleAddInvoiceItem>;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
   */
  applicationFeePercent?: number;
  /**
   * SchedulesPhaseAutomaticTax
   *
   * 
   */
  automaticTax?: SchedulesPhaseAutomaticTax;
  /**
   * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor?: string;
  /**
   * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
   */
  billingThresholds?: SubscriptionBillingThresholds;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
   */
  collectionMethod?: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: DefaultPaymentMethodOrRef;
  /**
   * The default tax rates to apply to the subscription during this phase of the subscription schedule.
   */
  defaultTaxRates?: Array<TaxRate>;
  /**
   * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string;
  /**
   * The stackable discounts that will be applied to the subscription on this phase. Subscription item discounts are applied before subscription discounts.
   */
  discounts: Array<DiscountsResourceStackableDiscount>;
  /**
   * The end of this phase of the subscription schedule.
   */
  endDate: number;
  /**
   * The invoice settings applicable during this phase.
   */
  invoiceSettings?: InvoiceSettingSubscriptionSchedulePhaseSetting;
  /**
   * Subscription items to configure the subscription to during this phase of the subscription schedule.
   */
  items: Array<SubscriptionScheduleConfigurationItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered. Updating the underlying subscription's `metadata` directly will not affect the current phase's `metadata`.
   */
  metadata?: MetadataProperty;
  /**
   * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * When transitioning phases, controls how prorations are handled (if any). Possible values are `create_prorations`, `none`, and `always_invoice`.
   */
  prorationBehavior: string;
  /**
   * The start of this phase of the subscription schedule.
   */
  startDate: number;
  /**
   * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
   */
  transferData?: SubscriptionTransferData;
  /**
   * When the trial ends within the phase.
   */
  trialEnd?: number;
}

export const SubscriptionSchedulePhaseConfigurationSchema: TypedSchema<SubscriptionSchedulePhaseConfiguration> = typed<SubscriptionSchedulePhaseConfiguration>(object({
  addInvoiceItems: array(SubscriptionScheduleAddInvoiceItemSchema),
  applicationFeePercent: optional(number()),
  get automaticTax() { return optional(SchedulesPhaseAutomaticTaxSchema) },
  billingCycleAnchor: optional(string()),
  get billingThresholds() { return optional(SubscriptionBillingThresholdsSchema) },
  collectionMethod: optional(string()),
  currency: string(),
  get defaultPaymentMethod() { return optional(DefaultPaymentMethodOrRefSchema) },
  get defaultTaxRates() { return optional(array(TaxRateSchema)) },
  description: optional(string()),
  discounts: array(DiscountsResourceStackableDiscountSchema),
  endDate: number(),
  get invoiceSettings() { return optional(InvoiceSettingSubscriptionSchedulePhaseSettingSchema) },
  items: array(SubscriptionScheduleConfigurationItemSchema),
  get metadata() { return optional(MetadataPropertySchema) },
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  prorationBehavior: string(),
  startDate: number(),
  get transferData() { return optional(SubscriptionTransferDataSchema) },
  trialEnd: optional(number()),
}));