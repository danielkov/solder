import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalSessionsRequestRetention } from './PostBillingPortalSessionsRequestRetention';
import { PostBillingPortalSessionsRequestRetentionSchema } from './PostBillingPortalSessionsRequestRetention';
/**
 * flow_data_subscription_cancel_param
 */
export interface PostBillingPortalSessionsRequestSubscriptionCancel {
  /**
   * retention_param
   */
  retention?: PostBillingPortalSessionsRequestRetention;
  subscription: string;
}

export const PostBillingPortalSessionsRequestSubscriptionCancelSchema: TypedSchema<PostBillingPortalSessionsRequestSubscriptionCancel> = typed<PostBillingPortalSessionsRequestSubscriptionCancel>(object({
  get retention() { return optional(PostBillingPortalSessionsRequestRetentionSchema) },
  subscription: string(),
}));