import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalFlowsFlowSubscriptionUpdate
 *
 * 
 */
export interface PortalFlowsFlowSubscriptionUpdate {
  /**
   * The ID of the subscription to be updated.
   */
  subscription: string;
}

export const PortalFlowsFlowSubscriptionUpdateSchema: TypedSchema<PortalFlowsFlowSubscriptionUpdate> = typed<PortalFlowsFlowSubscriptionUpdate>(object({
  subscription: string(),
}));