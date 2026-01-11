import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PaymentLinksResourceSubscriptionDataInvoiceSettings } from './PaymentLinksResourceSubscriptionDataInvoiceSettings';
import { PaymentLinksResourceSubscriptionDataInvoiceSettingsSchema } from './PaymentLinksResourceSubscriptionDataInvoiceSettings';
import type { SubscriptionsTrialsResourceTrialSettings } from './SubscriptionsTrialsResourceTrialSettings';
import { SubscriptionsTrialsResourceTrialSettingsSchema } from './SubscriptionsTrialsResourceTrialSettings';
/**
 * PaymentLinksResourceSubscriptionData
 *
 * 
 */
export interface PaymentLinksResourceSubscriptionData {
  /**
   * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string;
  /**
   * PaymentLinksResourceSubscriptionDataInvoiceSettings
   *
   * 
   */
  invoiceSettings: PaymentLinksResourceSubscriptionDataInvoiceSettings;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Subscriptions](https://stripe.com/docs/api/subscriptions) generated from this payment link.
   */
  metadata: MetadataProperty;
  /**
   * Integer representing the number of trial period days before the customer is charged for the first time.
   */
  trialPeriodDays?: number;
  /**
   * Settings related to subscription trials.
   */
  trialSettings?: SubscriptionsTrialsResourceTrialSettings;
}

export const PaymentLinksResourceSubscriptionDataSchema: TypedSchema<PaymentLinksResourceSubscriptionData> = typed<PaymentLinksResourceSubscriptionData>(object({
  description: optional(string()),
  invoiceSettings: PaymentLinksResourceSubscriptionDataInvoiceSettingsSchema,
  metadata: MetadataPropertySchema,
  trialPeriodDays: optional(number()),
  get trialSettings() { return optional(SubscriptionsTrialsResourceTrialSettingsSchema) },
}));