import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalSessionsRequestCouponOffer } from './PostBillingPortalSessionsRequestCouponOffer';
import { PostBillingPortalSessionsRequestCouponOfferSchema } from './PostBillingPortalSessionsRequestCouponOffer';
/**
 * retention_param
 */
export interface PostBillingPortalSessionsRequestRetention {
  /**
   * coupon_offer_param
   */
  couponOffer: PostBillingPortalSessionsRequestCouponOffer;
  type: string;
}

export const PostBillingPortalSessionsRequestRetentionSchema: TypedSchema<PostBillingPortalSessionsRequestRetention> = typed<PostBillingPortalSessionsRequestRetention>(object({
  couponOffer: PostBillingPortalSessionsRequestCouponOfferSchema,
  type: string(),
}));