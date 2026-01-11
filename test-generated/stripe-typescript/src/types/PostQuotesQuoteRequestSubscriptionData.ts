import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountPeopleRequestFilesItem } from './PostAccountsAccountPeopleRequestFilesItem';
import { PostAccountsAccountPeopleRequestFilesItemSchema } from './PostAccountsAccountPeopleRequestFilesItem';
import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
import type { PostBalanceSettingsRequestDelayDaysOverride } from './PostBalanceSettingsRequestDelayDaysOverride';
import { PostBalanceSettingsRequestDelayDaysOverrideSchema } from './PostBalanceSettingsRequestDelayDaysOverride';
import type { PostQuotesRequestEffectiveDate } from './PostQuotesRequestEffectiveDate';
import { PostQuotesRequestEffectiveDateSchema } from './PostQuotesRequestEffectiveDate';
/**
 * subscription_data_update_params
 *
 * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
 */
export interface PostQuotesQuoteRequestSubscriptionData {
  description?: PostAccountsAccountPeopleRequestFilesItem;
  effectiveDate?: PostQuotesRequestEffectiveDate;
  metadata?: PostAccountsRequestMetadataObject;
  trialPeriodDays?: PostBalanceSettingsRequestDelayDaysOverride;
}

export const PostQuotesQuoteRequestSubscriptionDataSchema: TypedSchema<PostQuotesQuoteRequestSubscriptionData> = typed<PostQuotesQuoteRequestSubscriptionData>(object({
  get description() { return optional(PostAccountsAccountPeopleRequestFilesItemSchema) },
  get effectiveDate() { return optional(PostQuotesRequestEffectiveDateSchema) },
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  get trialPeriodDays() { return optional(PostBalanceSettingsRequestDelayDaysOverrideSchema) },
}));