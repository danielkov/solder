import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestDefaultAllowedUpdates } from './PostBillingPortalConfigurationsRequestDefaultAllowedUpdates';
import { PostBillingPortalConfigurationsRequestDefaultAllowedUpdatesSchema } from './PostBillingPortalConfigurationsRequestDefaultAllowedUpdates';
import type { PostBillingPortalConfigurationsRequestProducts } from './PostBillingPortalConfigurationsRequestProducts';
import { PostBillingPortalConfigurationsRequestProductsSchema } from './PostBillingPortalConfigurationsRequestProducts';
import type { PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd } from './PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd';
import { PostBillingPortalConfigurationsRequestScheduleAtPeriodEndSchema } from './PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd';
/**
 * subscription_update_creation_param
 */
export interface PostBillingPortalConfigurationsRequestSubscriptionUpdate {
  defaultAllowedUpdates?: PostBillingPortalConfigurationsRequestDefaultAllowedUpdates;
  enabled: boolean;
  products?: PostBillingPortalConfigurationsRequestProducts;
  prorationBehavior?: string;
  /**
   * schedule_update_at_period_end_creating_param
   */
  scheduleAtPeriodEnd?: PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd;
  trialUpdateBehavior?: string;
}

export const PostBillingPortalConfigurationsRequestSubscriptionUpdateSchema: TypedSchema<PostBillingPortalConfigurationsRequestSubscriptionUpdate> = typed<PostBillingPortalConfigurationsRequestSubscriptionUpdate>(object({
  get defaultAllowedUpdates() { return optional(PostBillingPortalConfigurationsRequestDefaultAllowedUpdatesSchema) },
  enabled: boolean(),
  get products() { return optional(PostBillingPortalConfigurationsRequestProductsSchema) },
  prorationBehavior: optional(string()),
  get scheduleAtPeriodEnd() { return optional(PostBillingPortalConfigurationsRequestScheduleAtPeriodEndSchema) },
  trialUpdateBehavior: optional(string()),
}));