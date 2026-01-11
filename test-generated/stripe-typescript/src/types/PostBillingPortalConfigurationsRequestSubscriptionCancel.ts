import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestCancellationReason } from './PostBillingPortalConfigurationsRequestCancellationReason';
import { PostBillingPortalConfigurationsRequestCancellationReasonSchema } from './PostBillingPortalConfigurationsRequestCancellationReason';
/**
 * subscription_cancel_creation_param
 */
export interface PostBillingPortalConfigurationsRequestSubscriptionCancel {
  /**
   * subscription_cancellation_reason_creation_param
   */
  cancellationReason?: PostBillingPortalConfigurationsRequestCancellationReason;
  enabled: boolean;
  mode?: string;
  prorationBehavior?: string;
}

export const PostBillingPortalConfigurationsRequestSubscriptionCancelSchema: TypedSchema<PostBillingPortalConfigurationsRequestSubscriptionCancel> = typed<PostBillingPortalConfigurationsRequestSubscriptionCancel>(object({
  get cancellationReason() { return optional(PostBillingPortalConfigurationsRequestCancellationReasonSchema) },
  enabled: boolean(),
  mode: optional(string()),
  prorationBehavior: optional(string()),
}));