import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
import type { PostCheckoutSessionsRequestBillingMode } from './PostCheckoutSessionsRequestBillingMode';
import { PostCheckoutSessionsRequestBillingModeSchema } from './PostCheckoutSessionsRequestBillingMode';
import type { PostQuotesRequestEffectiveDate } from './PostQuotesRequestEffectiveDate';
import { PostQuotesRequestEffectiveDateSchema } from './PostQuotesRequestEffectiveDate';
/**
 * subscription_data_create_params
 *
 * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
 */
export interface PostQuotesRequestSubscriptionData {
  /**
   * billing_mode
   */
  billingMode?: PostCheckoutSessionsRequestBillingMode;
  description?: string;
  effectiveDate?: PostQuotesRequestEffectiveDate;
  metadata?: PostAccountsRequestMetadataObject;
  trialPeriodDays?: PostBalanceSettingsRequestDelayDaysOverride;
}

export const PostQuotesRequestSubscriptionDataSchema: TypedSchema<PostQuotesRequestSubscriptionData> = typed<PostQuotesRequestSubscriptionData>(object({
  get billingMode() { return optional(PostCheckoutSessionsRequestBillingModeSchema) },
  description: optional(string()),
  get effectiveDate() { return optional(PostQuotesRequestEffectiveDateSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  get trialPeriodDays() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
}));