import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PortalFlowsCouponOffer
 *
 * 
 */
export interface PortalFlowsCouponOffer {
  /**
   * The ID of the coupon to be offered.
   */
  coupon: string;
}

export const PortalFlowsCouponOfferSchema: TypedSchema<PortalFlowsCouponOffer> = typed<PortalFlowsCouponOffer>(object({
  coupon: string(),
}));