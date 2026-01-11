import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingAlertsRequestFiltersItem } from './PostBillingAlertsRequestFiltersItem';
import { PostBillingAlertsRequestFiltersItemSchema } from './PostBillingAlertsRequestFiltersItem';
/**
 * usage_threshold_config
 *
 * The configuration of the usage threshold.
 */
export interface PostBillingAlertsRequestUsageThreshold {
  filters?: Array<PostBillingAlertsRequestFiltersItem>;
  gte: number;
  meter: string;
  recurrence: string;
}

export const PostBillingAlertsRequestUsageThresholdSchema: TypedSchema<PostBillingAlertsRequestUsageThreshold> = typed<PostBillingAlertsRequestUsageThreshold>(object({
  get filters() { return optional(array(PostBillingAlertsRequestFiltersItemSchema)) },
  gte: number(),
  meter: string(),
  recurrence: string(),
}));