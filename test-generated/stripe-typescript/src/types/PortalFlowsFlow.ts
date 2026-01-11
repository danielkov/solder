import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PortalFlowsFlowAfterCompletion } from './PortalFlowsFlowAfterCompletion';
import { PortalFlowsFlowAfterCompletionSchema } from './PortalFlowsFlowAfterCompletion';
import type { PortalFlowsFlowSubscriptionCancel } from './PortalFlowsFlowSubscriptionCancel';
import { PortalFlowsFlowSubscriptionCancelSchema } from './PortalFlowsFlowSubscriptionCancel';
import type { PortalFlowsFlowSubscriptionUpdate } from './PortalFlowsFlowSubscriptionUpdate';
import { PortalFlowsFlowSubscriptionUpdateSchema } from './PortalFlowsFlowSubscriptionUpdate';
import type { PortalFlowsFlowSubscriptionUpdateConfirm } from './PortalFlowsFlowSubscriptionUpdateConfirm';
import { PortalFlowsFlowSubscriptionUpdateConfirmSchema } from './PortalFlowsFlowSubscriptionUpdateConfirm';
/**
 * PortalFlowsFlow
 *
 * 
 */
export interface PortalFlowsFlow {
  /**
   * PortalFlowsFlowAfterCompletion
   *
   * 
   */
  afterCompletion: PortalFlowsFlowAfterCompletion;
  /**
   * Configuration when `flow.type=subscription_cancel`.
   */
  subscriptionCancel?: PortalFlowsFlowSubscriptionCancel;
  /**
   * Configuration when `flow.type=subscription_update`.
   */
  subscriptionUpdate?: PortalFlowsFlowSubscriptionUpdate;
  /**
   * Configuration when `flow.type=subscription_update_confirm`.
   */
  subscriptionUpdateConfirm?: PortalFlowsFlowSubscriptionUpdateConfirm;
  /**
   * Type of flow that the customer will go through.
   */
  type: string;
}

export const PortalFlowsFlowSchema: TypedSchema<PortalFlowsFlow> = typed<PortalFlowsFlow>(object({
  afterCompletion: PortalFlowsFlowAfterCompletionSchema,
  get subscriptionCancel() { return optional(PortalFlowsFlowSubscriptionCancelSchema) },
  get subscriptionUpdate() { return optional(PortalFlowsFlowSubscriptionUpdateSchema) },
  get subscriptionUpdateConfirm() { return optional(PortalFlowsFlowSubscriptionUpdateConfirmSchema) },
  type: string(),
}));