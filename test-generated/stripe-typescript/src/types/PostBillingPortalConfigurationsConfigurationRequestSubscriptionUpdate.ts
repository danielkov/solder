import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd } from './PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd';
import { PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEndSchema } from './PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd';
import type { PostBillingPortalConfigurationsRequestDefaultAllowedUpdates } from './PostBillingPortalConfigurationsRequestDefaultAllowedUpdates';
import { PostBillingPortalConfigurationsRequestDefaultAllowedUpdatesSchema } from './PostBillingPortalConfigurationsRequestDefaultAllowedUpdates';
import type { PostBillingPortalConfigurationsRequestProducts } from './PostBillingPortalConfigurationsRequestProducts';
import { PostBillingPortalConfigurationsRequestProductsSchema } from './PostBillingPortalConfigurationsRequestProducts';
/**
 * subscription_update_updating_param
 */
export interface PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate {
  defaultAllowedUpdates?: PostBillingPortalConfigurationsRequestDefaultAllowedUpdates;
  enabled?: boolean;
  products?: PostBillingPortalConfigurationsRequestProducts;
  prorationBehavior?: string;
  /**
   * schedule_update_at_period_end_updating_param
   */
  scheduleAtPeriodEnd?: PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd;
  trialUpdateBehavior?: string;
}

export const PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdateSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate> = typed<PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate>(object({
  get defaultAllowedUpdates() { return optional(PostBillingPortalConfigurationsRequestDefaultAllowedUpdatesSchema) },
  enabled: optional(boolean()),
  get products() { return optional(PostBillingPortalConfigurationsRequestProductsSchema) },
  prorationBehavior: optional(string()),
  get scheduleAtPeriodEnd() { return optional(PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEndSchema) },
  trialUpdateBehavior: optional(string()),
}));