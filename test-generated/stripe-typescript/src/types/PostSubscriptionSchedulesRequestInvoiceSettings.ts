import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * subscription_schedule_default_settings_param
 */
export interface PostSubscriptionSchedulesRequestInvoiceSettings {
  accountTaxIds?: PostAccountsAccountRequestDefaultAccountTaxIds;
  daysUntilDue?: number;
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
}

export const PostSubscriptionSchedulesRequestInvoiceSettingsSchema: TypedSchema<PostSubscriptionSchedulesRequestInvoiceSettings> = typed<PostSubscriptionSchedulesRequestInvoiceSettings>(object({
  get accountTaxIds() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  daysUntilDue: optional(number()),
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));