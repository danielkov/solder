import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingAlertsRequestUsageThreshold } from './PostBillingAlertsRequestUsageThreshold';
import { PostBillingAlertsRequestUsageThresholdSchema } from './PostBillingAlertsRequestUsageThreshold';
export interface PostBillingAlertsRequest {
  /**
   * The type of alert to create.
   */
  alertType: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The title of the alert.
   */
  title: string;
  /**
   * usage_threshold_config
   *
   * The configuration of the usage threshold.
   */
  usageThreshold?: PostBillingAlertsRequestUsageThreshold;
}

export const PostBillingAlertsRequestSchema: TypedSchema<PostBillingAlertsRequest> = typed<PostBillingAlertsRequest>(object({
  alertType: string(),
  expand: optional(array(string())),
  title: string(),
  get usageThreshold() { return optional(PostBillingAlertsRequestUsageThresholdSchema) },
}));