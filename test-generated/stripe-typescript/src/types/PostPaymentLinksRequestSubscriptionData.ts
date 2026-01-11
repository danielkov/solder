import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCheckoutSessionsRequestTrialSettings } from './PostCheckoutSessionsRequestTrialSettings';
import { PostCheckoutSessionsRequestTrialSettingsSchema } from './PostCheckoutSessionsRequestTrialSettings';
import type { PostPaymentLinksRequestInvoiceSettings } from './PostPaymentLinksRequestInvoiceSettings';
import { PostPaymentLinksRequestInvoiceSettingsSchema } from './PostPaymentLinksRequestInvoiceSettings';
/**
 * subscription_data_params
 *
 * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
 */
export interface PostPaymentLinksRequestSubscriptionData {
  description?: string;
  /**
   * subscription_data_invoice_settings_params
   */
  invoiceSettings?: PostPaymentLinksRequestInvoiceSettings;
  metadata?: PostAccountsRequestMetadataObject;
  trialPeriodDays?: number;
  /**
   * trial_settings_config
   */
  trialSettings?: PostCheckoutSessionsRequestTrialSettings;
}

export const PostPaymentLinksRequestSubscriptionDataSchema: TypedSchema<PostPaymentLinksRequestSubscriptionData> = typed<PostPaymentLinksRequestSubscriptionData>(object({
  description: optional(string()),
  get invoiceSettings() { return optional(PostPaymentLinksRequestInvoiceSettingsSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  trialPeriodDays: optional(number()),
  get trialSettings() { return optional(PostCheckoutSessionsRequestTrialSettingsSchema) },
}));