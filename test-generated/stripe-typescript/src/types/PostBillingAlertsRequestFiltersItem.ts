import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * usage_alert_filter
 */
export interface PostBillingAlertsRequestFiltersItem {
  customer?: string;
  type: string;
}

export const PostBillingAlertsRequestFiltersItemSchema: TypedSchema<PostBillingAlertsRequestFiltersItem> = typed<PostBillingAlertsRequestFiltersItem>(object({
  customer: optional(string()),
  type: string(),
}));