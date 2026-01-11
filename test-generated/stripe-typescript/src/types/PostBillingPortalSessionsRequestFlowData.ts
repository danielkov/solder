import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalSessionsRequestAfterCompletion } from './PostBillingPortalSessionsRequestAfterCompletion';
import { PostBillingPortalSessionsRequestAfterCompletionSchema } from './PostBillingPortalSessionsRequestAfterCompletion';
import type { PostBillingPortalSessionsRequestSubscriptionCancel } from './PostBillingPortalSessionsRequestSubscriptionCancel';
import { PostBillingPortalSessionsRequestSubscriptionCancelSchema } from './PostBillingPortalSessionsRequestSubscriptionCancel';
import type { PostBillingPortalSessionsRequestSubscriptionUpdate } from './PostBillingPortalSessionsRequestSubscriptionUpdate';
import { PostBillingPortalSessionsRequestSubscriptionUpdateSchema } from './PostBillingPortalSessionsRequestSubscriptionUpdate';
import type { PostBillingPortalSessionsRequestSubscriptionUpdateConfirm } from './PostBillingPortalSessionsRequestSubscriptionUpdateConfirm';
import { PostBillingPortalSessionsRequestSubscriptionUpdateConfirmSchema } from './PostBillingPortalSessionsRequestSubscriptionUpdateConfirm';
/**
 * flow_data_param
 *
 * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
 */
export interface PostBillingPortalSessionsRequestFlowData {
  /**
   * flow_data_after_completion_param
   */
  afterCompletion?: PostBillingPortalSessionsRequestAfterCompletion;
  /**
   * flow_data_subscription_cancel_param
   */
  subscriptionCancel?: PostBillingPortalSessionsRequestSubscriptionCancel;
  /**
   * flow_data_subscription_update_param
   */
  subscriptionUpdate?: PostBillingPortalSessionsRequestSubscriptionUpdate;
  /**
   * flow_data_subscription_update_confirm_param
   */
  subscriptionUpdateConfirm?: PostBillingPortalSessionsRequestSubscriptionUpdateConfirm;
  type: string;
}

export const PostBillingPortalSessionsRequestFlowDataSchema: TypedSchema<PostBillingPortalSessionsRequestFlowData> = typed<PostBillingPortalSessionsRequestFlowData>(object({
  get afterCompletion() { return optional(PostBillingPortalSessionsRequestAfterCompletionSchema) },
  get subscriptionCancel() { return optional(PostBillingPortalSessionsRequestSubscriptionCancelSchema) },
  get subscriptionUpdate() { return optional(PostBillingPortalSessionsRequestSubscriptionUpdateSchema) },
  get subscriptionUpdateConfirm() { return optional(PostBillingPortalSessionsRequestSubscriptionUpdateConfirmSchema) },
  type: string(),
}));