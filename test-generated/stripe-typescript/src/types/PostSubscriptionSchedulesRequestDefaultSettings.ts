import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountPeopleRequestFilesItem } from './PostAccountsAccountPeopleRequestFilesItem';
import { PostAccountsAccountPeopleRequestFilesItemSchema } from './PostAccountsAccountPeopleRequestFilesItem';
import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax } from './PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax';
import { PostInvoicesCreatePreviewRequestPhasesItemAutomaticTaxSchema } from './PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax';
import type { PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds } from './PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds';
import { PostInvoicesCreatePreviewRequestPhasesItemBillingThresholdsSchema } from './PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds';
import type { PostSubscriptionSchedulesRequestInvoiceSettings } from './PostSubscriptionSchedulesRequestInvoiceSettings';
import { PostSubscriptionSchedulesRequestInvoiceSettingsSchema } from './PostSubscriptionSchedulesRequestInvoiceSettings';
import type { PostSubscriptionSchedulesRequestTransferData } from './PostSubscriptionSchedulesRequestTransferData';
import { PostSubscriptionSchedulesRequestTransferDataSchema } from './PostSubscriptionSchedulesRequestTransferData';
/**
 * default_settings_params
 *
 * Object representing the subscription schedule's default settings.
 */
export interface PostSubscriptionSchedulesRequestDefaultSettings {
  applicationFeePercent?: number;
  /**
   * automatic_tax_config
   */
  automaticTax?: PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax;
  billingCycleAnchor?: string;
  billingThresholds?: PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds;
  collectionMethod?: string;
  defaultPaymentMethod?: string;
  description?: PostAccountsAccountPeopleRequestFilesItem;
  /**
   * subscription_schedule_default_settings_param
   */
  invoiceSettings?: PostSubscriptionSchedulesRequestInvoiceSettings;
  onBehalfOf?: PostAccountsRequestSupportUrl;
  transferData?: PostSubscriptionSchedulesRequestTransferData;
}

export const PostSubscriptionSchedulesRequestDefaultSettingsSchema: TypedSchema<PostSubscriptionSchedulesRequestDefaultSettings> = typed<PostSubscriptionSchedulesRequestDefaultSettings>(object({
  applicationFeePercent: optional(number()),
  get automaticTax() { return optional(PostInvoicesCreatePreviewRequestPhasesItemAutomaticTaxSchema) },
  billingCycleAnchor: optional(string()),
  get billingThresholds() { return optional(PostInvoicesCreatePreviewRequestPhasesItemBillingThresholdsSchema) },
  collectionMethod: optional(string()),
  defaultPaymentMethod: optional(string()),
  get description() { return optional(PostAccountsAccountPeopleRequestFilesItemSchema) },
  get invoiceSettings() { return optional(PostSubscriptionSchedulesRequestInvoiceSettingsSchema) },
  get onBehalfOf() { return optional(PostAccountsRequestSupportUrlSchema) },
  get transferData() { return optional(PostSubscriptionSchedulesRequestTransferDataSchema) },
}));