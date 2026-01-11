import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestConditionsItem } from './PostBillingPortalConfigurationsRequestConditionsItem';
import { PostBillingPortalConfigurationsRequestConditionsItemSchema } from './PostBillingPortalConfigurationsRequestConditionsItem';
/**
 * schedule_update_at_period_end_creating_param
 */
export interface PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd {
  conditions?: Array<PostBillingPortalConfigurationsRequestConditionsItem>;
}

export const PostBillingPortalConfigurationsRequestScheduleAtPeriodEndSchema: TypedSchema<PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd> = typed<PostBillingPortalConfigurationsRequestScheduleAtPeriodEnd>(object({
  get conditions() { return optional(array(PostBillingPortalConfigurationsRequestConditionsItemSchema)) },
}));