import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostCheckoutSessionsRequestTransferData } from './DefaultPostCheckoutSessionsRequestTransferData';
import { DefaultPostCheckoutSessionsRequestTransferDataSchema } from './DefaultPostCheckoutSessionsRequestTransferData';
import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCheckoutSessionsRequestBillingMode } from './PostCheckoutSessionsRequestBillingMode';
import { PostCheckoutSessionsRequestBillingModeSchema } from './PostCheckoutSessionsRequestBillingMode';
import type { PostCheckoutSessionsRequestInvoiceSettings } from './PostCheckoutSessionsRequestInvoiceSettings';
import { PostCheckoutSessionsRequestInvoiceSettingsSchema } from './PostCheckoutSessionsRequestInvoiceSettings';
import type { PostCheckoutSessionsRequestTrialSettings } from './PostCheckoutSessionsRequestTrialSettings';
import { PostCheckoutSessionsRequestTrialSettingsSchema } from './PostCheckoutSessionsRequestTrialSettings';
/**
 * subscription_data_params
 *
 * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
 */
export interface PostCheckoutSessionsRequestSubscriptionData {
  applicationFeePercent?: number;
  billingCycleAnchor?: number;
  /**
   * billing_mode
   */
  billingMode?: PostCheckoutSessionsRequestBillingMode;
  defaultTaxRates?: Array<string>;
  description?: string;
  /**
   * invoice_settings_params
   */
  invoiceSettings?: PostCheckoutSessionsRequestInvoiceSettings;
  metadata?: PostAccountsRequestMetadataObject;
  onBehalfOf?: string;
  prorationBehavior?: string;
  /**
   * transfer_data_specs
   */
  transferData?: DefaultPostCheckoutSessionsRequestTransferData;
  trialEnd?: number;
  trialPeriodDays?: number;
  /**
   * trial_settings_config
   */
  trialSettings?: PostCheckoutSessionsRequestTrialSettings;
}

export const PostCheckoutSessionsRequestSubscriptionDataSchema: TypedSchema<PostCheckoutSessionsRequestSubscriptionData> = typed<PostCheckoutSessionsRequestSubscriptionData>(object({
  applicationFeePercent: optional(number()),
  billingCycleAnchor: optional(number()),
  get billingMode() { return optional(PostCheckoutSessionsRequestBillingModeSchema) },
  defaultTaxRates: optional(array(string())),
  description: optional(string()),
  get invoiceSettings() { return optional(PostCheckoutSessionsRequestInvoiceSettingsSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  onBehalfOf: optional(string()),
  prorationBehavior: optional(string()),
  get transferData() { return optional(DefaultPostCheckoutSessionsRequestTransferDataSchema) },
  trialEnd: optional(number()),
  trialPeriodDays: optional(number()),
  get trialSettings() { return optional(PostCheckoutSessionsRequestTrialSettingsSchema) },
}));