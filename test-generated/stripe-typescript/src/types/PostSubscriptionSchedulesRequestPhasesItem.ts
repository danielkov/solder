import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostCheckoutSessionsRequestTransferData } from './DefaultPostCheckoutSessionsRequestTransferData';
import { DefaultPostCheckoutSessionsRequestTransferDataSchema } from './DefaultPostCheckoutSessionsRequestTransferData';
import type { PostAccountsAccountPeopleRequestFilesItem } from './PostAccountsAccountPeopleRequestFilesItem';
import { PostAccountsAccountPeopleRequestFilesItemSchema } from './PostAccountsAccountPeopleRequestFilesItem';
import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import { PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema } from './PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts';
import type { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem';
import { PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemSchema } from './PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem';
import type { PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax } from './PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax';
import { PostInvoicesCreatePreviewRequestPhasesItemAutomaticTaxSchema } from './PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax';
import type { PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds } from './PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds';
import { PostInvoicesCreatePreviewRequestPhasesItemBillingThresholdsSchema } from './PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds';
import type { PostInvoicesCreatePreviewRequestPhasesItemDuration } from './PostInvoicesCreatePreviewRequestPhasesItemDuration';
import { PostInvoicesCreatePreviewRequestPhasesItemDurationSchema } from './PostInvoicesCreatePreviewRequestPhasesItemDuration';
import type { PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings } from './PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings';
import { PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettingsSchema } from './PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings';
import type { PostInvoicesCreatePreviewRequestPhasesItemItemsItem } from './PostInvoicesCreatePreviewRequestPhasesItemItemsItem';
import { PostInvoicesCreatePreviewRequestPhasesItemItemsItemSchema } from './PostInvoicesCreatePreviewRequestPhasesItemItemsItem';
/**
 * phase_configuration_params
 */
export interface PostSubscriptionSchedulesRequestPhasesItem {
  addInvoiceItems?: Array<PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItem>;
  applicationFeePercent?: number;
  /**
   * automatic_tax_config
   */
  automaticTax?: PostInvoicesCreatePreviewRequestPhasesItemAutomaticTax;
  billingCycleAnchor?: string;
  billingThresholds?: PostInvoicesCreatePreviewRequestPhasesItemBillingThresholds;
  collectionMethod?: string;
  currency?: string;
  defaultPaymentMethod?: string;
  defaultTaxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
  description?: PostAccountsAccountPeopleRequestFilesItem;
  discounts?: PostCustomersCustomerSubscriptionsRequestItemsItemDiscounts;
  /**
   * duration_params
   */
  duration?: PostInvoicesCreatePreviewRequestPhasesItemDuration;
  endDate?: number;
  /**
   * invoice_settings
   */
  invoiceSettings?: PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings;
  items: Array<PostInvoicesCreatePreviewRequestPhasesItemItemsItem>;
  metadata?: PostAccountsRequestMetadataObject;
  onBehalfOf?: string;
  prorationBehavior?: string;
  /**
   * transfer_data_specs
   */
  transferData?: DefaultPostCheckoutSessionsRequestTransferData;
  trial?: boolean;
  trialEnd?: number;
}

export const PostSubscriptionSchedulesRequestPhasesItemSchema: TypedSchema<PostSubscriptionSchedulesRequestPhasesItem> = typed<PostSubscriptionSchedulesRequestPhasesItem>(object({
  get addInvoiceItems() { return optional(array(PostInvoicesCreatePreviewRequestPhasesItemAddInvoiceItemsItemSchema)) },
  applicationFeePercent: optional(number()),
  get automaticTax() { return optional(PostInvoicesCreatePreviewRequestPhasesItemAutomaticTaxSchema) },
  billingCycleAnchor: optional(string()),
  get billingThresholds() { return optional(PostInvoicesCreatePreviewRequestPhasesItemBillingThresholdsSchema) },
  collectionMethod: optional(string()),
  currency: optional(string()),
  defaultPaymentMethod: optional(string()),
  get defaultTaxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  get description() { return optional(PostAccountsAccountPeopleRequestFilesItemSchema) },
  get discounts() { return optional(PostCustomersCustomerSubscriptionsRequestItemsItemDiscountsSchema) },
  get duration() { return optional(PostInvoicesCreatePreviewRequestPhasesItemDurationSchema) },
  endDate: optional(number()),
  get invoiceSettings() { return optional(PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettingsSchema) },
  items: array(PostInvoicesCreatePreviewRequestPhasesItemItemsItemSchema),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  onBehalfOf: optional(string()),
  prorationBehavior: optional(string()),
  get transferData() { return optional(DefaultPostCheckoutSessionsRequestTransferDataSchema) },
  trial: optional(boolean()),
  trialEnd: optional(number()),
}));