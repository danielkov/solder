import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsConfigurationRequestCancellationReason } from './PostBillingPortalConfigurationsConfigurationRequestCancellationReason';
import { PostBillingPortalConfigurationsConfigurationRequestCancellationReasonSchema } from './PostBillingPortalConfigurationsConfigurationRequestCancellationReason';
/**
 * subscription_cancel_updating_param
 */
export interface PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel {
  /**
   * subscription_cancellation_reason_updating_param
   */
  cancellationReason?: PostBillingPortalConfigurationsConfigurationRequestCancellationReason;
  enabled?: boolean;
  mode?: string;
  prorationBehavior?: string;
}

export const PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancelSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel> = typed<PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel>(object({
  get cancellationReason() { return optional(PostBillingPortalConfigurationsConfigurationRequestCancellationReasonSchema) },
  enabled: optional(boolean()),
  mode: optional(string()),
  prorationBehavior: optional(string()),
}));