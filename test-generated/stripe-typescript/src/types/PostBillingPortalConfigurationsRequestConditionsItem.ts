import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * schedule_update_at_period_end_condition_param
 */
export interface PostBillingPortalConfigurationsRequestConditionsItem {
  type: string;
}

export const PostBillingPortalConfigurationsRequestConditionsItemSchema: TypedSchema<PostBillingPortalConfigurationsRequestConditionsItem> = typed<PostBillingPortalConfigurationsRequestConditionsItem>(object({
  type: string(),
}));