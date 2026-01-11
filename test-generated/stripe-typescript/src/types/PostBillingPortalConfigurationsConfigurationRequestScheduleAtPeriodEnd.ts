import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsConfigurationRequestConditions } from './PostBillingPortalConfigurationsConfigurationRequestConditions';
import { PostBillingPortalConfigurationsConfigurationRequestConditionsSchema } from './PostBillingPortalConfigurationsConfigurationRequestConditions';
/**
 * schedule_update_at_period_end_updating_param
 */
export interface PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd {
  conditions?: PostBillingPortalConfigurationsConfigurationRequestConditions;
}

export const PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEndSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd> = typed<PostBillingPortalConfigurationsConfigurationRequestScheduleAtPeriodEnd>(object({
  get conditions() { return optional(PostBillingPortalConfigurationsConfigurationRequestConditionsSchema) },
}));