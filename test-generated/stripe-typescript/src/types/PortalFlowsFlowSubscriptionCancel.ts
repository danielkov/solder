import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PortalFlowsRetention } from './PortalFlowsRetention';
import { PortalFlowsRetentionSchema } from './PortalFlowsRetention';
/**
 * PortalFlowsFlowSubscriptionCancel
 *
 * 
 */
export interface PortalFlowsFlowSubscriptionCancel {
  /**
   * Specify a retention strategy to be used in the cancellation flow.
   */
  retention?: PortalFlowsRetention;
  /**
   * The ID of the subscription to be canceled.
   */
  subscription: string;
}

export const PortalFlowsFlowSubscriptionCancelSchema: TypedSchema<PortalFlowsFlowSubscriptionCancel> = typed<PortalFlowsFlowSubscriptionCancel>(object({
  get retention() { return optional(PortalFlowsRetentionSchema) },
  subscription: string(),
}));