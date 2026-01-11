import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPaymentMethodOrRef } from './DefaultPaymentMethodOrRef';
import { DefaultPaymentMethodOrRefSchema } from './DefaultPaymentMethodOrRef';
import type { InvoiceSettingSubscriptionScheduleSetting } from './InvoiceSettingSubscriptionScheduleSetting';
import { InvoiceSettingSubscriptionScheduleSettingSchema } from './InvoiceSettingSubscriptionScheduleSetting';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { SubscriptionBillingThresholds } from './SubscriptionBillingThresholds';
import { SubscriptionBillingThresholdsSchema } from './SubscriptionBillingThresholds';
import type { SubscriptionSchedulesResourceDefaultSettingsAutomaticTax } from './SubscriptionSchedulesResourceDefaultSettingsAutomaticTax';
import { SubscriptionSchedulesResourceDefaultSettingsAutomaticTaxSchema } from './SubscriptionSchedulesResourceDefaultSettingsAutomaticTax';
import type { SubscriptionTransferData } from './SubscriptionTransferData';
import { SubscriptionTransferDataSchema } from './SubscriptionTransferData';
/**
 * SubscriptionSchedulesResourceDefaultSettings
 *
 * 
 */
export interface SubscriptionSchedulesResourceDefaultSettings {
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
   */
  applicationFeePercent?: number;
  /**
   * SubscriptionSchedulesResourceDefaultSettingsAutomaticTax
   *
   * 
   */
  automaticTax?: SubscriptionSchedulesResourceDefaultSettingsAutomaticTax;
  /**
   * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor: string;
  /**
   * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
   */
  billingThresholds?: SubscriptionBillingThresholds;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
   */
  collectionMethod?: string;
  /**
   * ID of the default payment method for the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: DefaultPaymentMethodOrRef;
  /**
   * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string;
  /**
   * InvoiceSettingSubscriptionScheduleSetting
   *
   * 
   */
  invoiceSettings: InvoiceSettingSubscriptionScheduleSetting;
  /**
   * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
   */
  transferData?: SubscriptionTransferData;
}

export const SubscriptionSchedulesResourceDefaultSettingsSchema: TypedSchema<SubscriptionSchedulesResourceDefaultSettings> = typed<SubscriptionSchedulesResourceDefaultSettings>(object({
  applicationFeePercent: optional(number()),
  get automaticTax() { return optional(SubscriptionSchedulesResourceDefaultSettingsAutomaticTaxSchema) },
  billingCycleAnchor: string(),
  get billingThresholds() { return optional(SubscriptionBillingThresholdsSchema) },
  collectionMethod: optional(string()),
  get defaultPaymentMethod() { return optional(DefaultPaymentMethodOrRefSchema) },
  description: optional(string()),
  invoiceSettings: InvoiceSettingSubscriptionScheduleSettingSchema,
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  get transferData() { return optional(SubscriptionTransferDataSchema) },
}));