import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalFlowsSubscriptionUpdateConfirmDiscount
 *
 * 
 */
export interface PortalFlowsSubscriptionUpdateConfirmDiscount {
  /**
   * The ID of the coupon to apply to this subscription update.
   */
  coupon?: string;
  /**
   * The ID of a promotion code to apply to this subscription update.
   */
  promotionCode?: string;
}

export const PortalFlowsSubscriptionUpdateConfirmDiscountSchema: TypedSchema<PortalFlowsSubscriptionUpdateConfirmDiscount> = typed<PortalFlowsSubscriptionUpdateConfirmDiscount>(object({
  coupon: optional(string()),
  promotionCode: optional(string()),
}));