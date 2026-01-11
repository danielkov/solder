import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadata } from './PostAccountsRequestMetadata';
import { PostAccountsRequestMetadataSchema } from './PostAccountsRequestMetadata';
import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
import type { PostPaymentLinksPaymentLinkRequestTrialSettings } from './PostPaymentLinksPaymentLinkRequestTrialSettings';
import { PostPaymentLinksPaymentLinkRequestTrialSettingsSchema } from './PostPaymentLinksPaymentLinkRequestTrialSettings';
import type { PostPaymentLinksRequestInvoiceSettings } from './PostPaymentLinksRequestInvoiceSettings';
import { PostPaymentLinksRequestInvoiceSettingsSchema } from './PostPaymentLinksRequestInvoiceSettings';
/**
 * subscription_data_update_params
 *
 * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
 */
export interface PostPaymentLinksPaymentLinkRequestSubscriptionData {
  /**
   * subscription_data_invoice_settings_params
   */
  invoiceSettings?: PostPaymentLinksRequestInvoiceSettings;
  metadata?: PostAccountsRequestMetadata;
  trialPeriodDays?: PostBalanceSettingsRequestDelayDaysOverride;
  trialSettings?: PostPaymentLinksPaymentLinkRequestTrialSettings;
}

export const PostPaymentLinksPaymentLinkRequestSubscriptionDataSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestSubscriptionData> = typed<PostPaymentLinksPaymentLinkRequestSubscriptionData>(object({
  get invoiceSettings() { return optional(PostPaymentLinksRequestInvoiceSettingsSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataSchema) },
  get trialPeriodDays() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
  get trialSettings() { return optional(PostPaymentLinksPaymentLinkRequestTrialSettingsSchema) },
}));