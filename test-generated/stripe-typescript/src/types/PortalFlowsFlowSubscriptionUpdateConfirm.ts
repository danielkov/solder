import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PortalFlowsSubscriptionUpdateConfirmDiscount } from './PortalFlowsSubscriptionUpdateConfirmDiscount';
import { PortalFlowsSubscriptionUpdateConfirmDiscountSchema } from './PortalFlowsSubscriptionUpdateConfirmDiscount';
import type { PortalFlowsSubscriptionUpdateConfirmItem } from './PortalFlowsSubscriptionUpdateConfirmItem';
import { PortalFlowsSubscriptionUpdateConfirmItemSchema } from './PortalFlowsSubscriptionUpdateConfirmItem';
/**
 * PortalFlowsFlowSubscriptionUpdateConfirm
 *
 * 
 */
export interface PortalFlowsFlowSubscriptionUpdateConfirm {
  /**
   * The coupon or promotion code to apply to this subscription update.
   */
  discounts?: Array<PortalFlowsSubscriptionUpdateConfirmDiscount>;
  /**
   * The [subscription item](https://stripe.com/docs/api/subscription_items) to be updated through this flow. Currently, only up to one may be specified and subscriptions with multiple items are not updatable.
   */
  items: Array<PortalFlowsSubscriptionUpdateConfirmItem>;
  /**
   * The ID of the subscription to be updated.
   */
  subscription: string;
}

export const PortalFlowsFlowSubscriptionUpdateConfirmSchema: TypedSchema<PortalFlowsFlowSubscriptionUpdateConfirm> = typed<PortalFlowsFlowSubscriptionUpdateConfirm>(object({
  get discounts() { return optional(array(PortalFlowsSubscriptionUpdateConfirmDiscountSchema)) },
  items: array(PortalFlowsSubscriptionUpdateConfirmItemSchema),
  subscription: string(),
}));