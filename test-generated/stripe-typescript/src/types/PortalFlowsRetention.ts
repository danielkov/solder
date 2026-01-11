import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PortalFlowsCouponOffer } from './PortalFlowsCouponOffer';
import { PortalFlowsCouponOfferSchema } from './PortalFlowsCouponOffer';
/**
 * PortalFlowsRetention
 *
 * 
 */
export interface PortalFlowsRetention {
  /**
   * Configuration when `retention.type=coupon_offer`.
   */
  couponOffer?: PortalFlowsCouponOffer;
  /**
   * Type of retention strategy that will be used.
   */
  type: string;
}

export const PortalFlowsRetentionSchema: TypedSchema<PortalFlowsRetention> = typed<PortalFlowsRetention>(object({
  get couponOffer() { return optional(PortalFlowsCouponOfferSchema) },
  type: string(),
}));